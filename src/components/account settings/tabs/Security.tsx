import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { passwordValidationSchema } from "../../../schema/Index";
import axios from "axios";
import { authRequest } from "../../../base url/BaseUrl";
import { toast } from "react-toastify";
import {
  ErrorResponse,
  getError,
  useAppContext,
} from "../../../utilities/utils/Utils";
import { Switch } from "antd";

// Formik initial values and validation schema
const initialPasswordValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

function Security() {
  //CONTEXT
  const { state, setMenu, showDrawer } = useAppContext();
  const { userInfo } = state;

  //PASSWORD
  const [currentPasswordType, setCurrentPasswordType] = useState<
    "password" | "text"
  >("password");
  const [newPasswordType, setNewPasswordType] = useState<"password" | "text">(
    "password"
  );
  const [confirmPasswordType, setConfirmPasswordType] = useState<
    "password" | "text"
  >("password");

  const [currentPasswordIcon, setCurrentPasswordIcon] =
    useState<string>(eyeOff);
  const [newPasswordIcon, setNewPasswordIcon] = useState<string>(eyeOff);
  const [confirmPasswordIcon, setConfirmPasswordIcon] =
    useState<string>(eyeOff);
  const toggleCurrentPassword = () => {
    setCurrentPasswordType(
      currentPasswordType === "password" ? "text" : "password"
    );
    setCurrentPasswordIcon(currentPasswordIcon === eyeOff ? eye : eyeOff);
  };

  const toggleNewPassword = () => {
    setNewPasswordType(newPasswordType === "password" ? "text" : "password");
    setNewPasswordIcon(newPasswordIcon === eyeOff ? eye : eyeOff);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordType(
      confirmPasswordType === "password" ? "text" : "password"
    );
    setConfirmPasswordIcon(confirmPasswordIcon === eyeOff ? eye : eyeOff);
  };

  // State to manage the switch status and selected 2FA method
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  // Handle switch toggle
  const handleSwitchChange = (checked: boolean) => {
    setIs2FAEnabled(checked);
  };

  // Function to handle sending OTP
  const handleSendEmailOtp = async () => {
    // Add your logic to send an email OTP
    console.log("Sending email OTP...");
  };

  const handleSendMobileOtp = async () => {
    // Add your logic to send a mobile OTP
    console.log("Sending mobile OTP...");
  };

  // Handle "Setup 2FA" button click
  const handleSetup2FA = async () => {
    if (!selectedMethod) {
      alert("Please select a 2FA method.");
      return;
    }

    // Perform actions based on the selected method
    if (selectedMethod === "authenticator_app") {
      setMenu("authenticator_app");
    } else if (selectedMethod === "email") {
      await handleSendEmailOtp();
      setMenu("acc_email_otp");
    } else if (selectedMethod === "phone") {
      await handleSendMobileOtp();
      setMenu("acc_mobile_otp");
    }

    // Show the modal/drawer
    showDrawer();
  };
  return (
    <div className="security_component account_tab_component mt">
      <div className="content change_password light_shadow">
        <div className="header">
          <div className="head">
            <h4>Change Password</h4>
          </div>
          <div className="text">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </small>
          </div>
        </div>
        <div className="form_box">
          <Formik
            initialValues={initialPasswordValues}
            validationSchema={passwordValidationSchema}
            onSubmit={async (values, { resetForm, setSubmitting }) => {
              try {
                await axios.put(
                  `${authRequest}/api/users/update-password`,
                  {
                    currentPassword: values.currentPassword,
                    newPassword: values.newPassword,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${userInfo?.token}`,
                    },
                  }
                );
                toast.success("Password updated successfully");
                resetForm();
              } catch (error) {
                toast.error(getError(error as ErrorResponse));
              } finally {
                setSubmitting(false); // Ensure form submission state is reset
              }
            }}
          >
            {({
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              isSubmitting, // Pass this prop to buttons
            }) => (
              <Form onSubmit={handleSubmit} className="inner_form">
                <div className="form_group">
                  <Field
                    name="currentPassword"
                    type={currentPasswordType}
                    value={values.currentPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.currentPassword && touched.currentPassword
                        ? "input-error"
                        : ""
                    }
                    placeholder="Current Password"
                  />
                  <span
                    className="toggle_password"
                    onClick={toggleCurrentPassword}
                  >
                    <Icon
                      icon={currentPasswordIcon}
                      size={16}
                      className="eye_icon"
                    />
                  </span>
                  <ErrorMessage
                    name="currentPassword"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form_group">
                  <Field
                    name="newPassword"
                    type={newPasswordType}
                    value={values.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.newPassword && touched.newPassword
                        ? "input-error"
                        : ""
                    }
                    placeholder="New Password"
                  />
                  <span className="toggle_password" onClick={toggleNewPassword}>
                    <Icon
                      icon={newPasswordIcon}
                      size={16}
                      className="eye_icon"
                    />
                  </span>
                  <ErrorMessage
                    name="newPassword"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="form_group">
                  <Field
                    name="confirmPassword"
                    type={confirmPasswordType}
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? "input-error"
                        : ""
                    }
                    placeholder="Confirm New password"
                  />
                  <span
                    className="toggle_password"
                    onClick={toggleConfirmPassword}
                  >
                    <Icon
                      icon={confirmPasswordIcon}
                      size={16}
                      className="eye_icon"
                    />
                  </span>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error"
                  />{" "}
                </div>

                <div className="btn">
                  <button
                    type="submit"
                    className="main_btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="a_flex">
                        <i className="fa fa-spinner fa-spin"></i>
                        Saving...
                      </span>
                    ) : (
                      "Change Password"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>{" "}
      <div className="content two_step_factor light_shadow mt">
        <div className="haeder_switch c_flex">
          <div className="header">
            <div className="head">
              <h4>Two-Factor Authentication (2FA)</h4>
            </div>
            <div className="text">
              <small>Add an extra layer of security to your account </small>
            </div>
          </div>
          <div className="switch">
            <Switch checked={is2FAEnabled} onChange={handleSwitchChange} />
          </div>
        </div>
        <form action="" className="form_box">
          {is2FAEnabled && (
            <div className="inner_form">
              <div className="form_group">
                <label htmlFor="auth">2FA Method</label>
                <select
                  name="auth"
                  id="auth"
                  value={selectedMethod}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                >
                  <option value="">Select a method</option>
                  <option value="authenticator_app">Authenticator App</option>
                  <option value="email">Email</option>
                  <option value="phone">Mobile Number</option>
                </select>
              </div>
              <div className="btn">
                <button
                  type="button"
                  className="main_btn twofa_btn"
                  disabled={!selectedMethod}
                  onClick={handleSetup2FA}
                >
                  Setup 2FA
                </button>
              </div>
            </div>
          )}
          <div className="btn">
            <button type="submit" className="main_btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>{" "}
    </div>
  );
}

export default Security;
