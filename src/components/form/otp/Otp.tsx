import OtpInput from "react-otp-input";
import Box from "@mui/material/Box";
import { Formik, ErrorMessage, Form, Field, FormikHelpers } from "formik";
import {
  emailValidationSchema,
  mobileValidationSchema,
  otpSchema,
} from "../../../schema/Index";
import "../styles.scss";
import {
  ErrorResponse,
  getError,
  useAppContext,
} from "../../../utilities/utils/Utils";
import { useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { authRequest } from "../../../base url/BaseUrl";
import { OtpAction, OtpState, OtpValues } from "../../../types/auth/types";
import { Link } from "react-router-dom";

// Initial values for the OTP form
const initialOtpValues = {
  otp: "",
};

// Resend Otp via email
const initialEmailValues = {
  email: "",
};

// Resend Otp via email
const initialMobileValues = {
  phone: "",
};

const reducer = (state: OtpState, action: OtpAction): OtpState => {
  switch (action.type) {
    case "SUBMIT_REQUEST":
      return { ...state, loading: true, error: "" };
    case "SUBMIT_SUCCESS":
      return { ...state, loading: false };
    case "SUBMIT_FAIL":
      return { ...state, loading: false, error: action.payload || "" };
    default:
      return state;
  }
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
};

interface OtpVerificationDropDownMenuProps {
  onClose: () => void;
  setMenu: (
    menu:
      | "webthree_email"
      | "editEmail"
      | "editMobile"
      | "verifyEmail"
      | "verifyMobile"
      | "terms"
  ) => void;
}
export function EmailOtpVerificationDropDownMenu({
  setMenu,
}: OtpVerificationDropDownMenuProps) {
  const { state } = useAppContext();
  const { theme } = state;

  const [, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });

  // Calculate initial countdown based on the stored end time
  const calculateInitialCountdown = () => {
    const storedEndTime = localStorage.getItem("otpResendEndTime");
    if (storedEndTime) {
      const remainingTime = Math.floor(
        (parseInt(storedEndTime, 10) - Date.now()) / 1000
      );
      return remainingTime > 0 ? remainingTime : 0;
    }
    return 0;
  };

  // State for countdown timer and disabling the button
  const [countdown, setCountdown] = useState(calculateInitialCountdown);
  const [isDisabled, setIsDisabled] = useState(countdown > 0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
        localStorage.setItem(
          "otpResendEndTime",
          (Date.now() + (countdown - 1) * 1000).toString()
        );
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsDisabled(false);
      localStorage.removeItem("otpResendEndTime");
    }
  }, [countdown]);

  // Function to handle OTP verification
  const handleVerifiedOTP = (isAccountVerified: boolean) => {
    const temporaryUserInfo = JSON.parse(
      localStorage.getItem("temporaryUserInfo") || "{}"
    );
    temporaryUserInfo.isAccountVerified = isAccountVerified;

    //localStorage.removeItem("temporaryUserInfo");
  };

  //=============
  // HANDLE SUBMIT
  //=============
  const handleSubmit = async (
    values: OtpValues,
    actions: FormikHelpers<OtpValues>
  ) => {
    try {
      dispatch({ type: "SUBMIT_REQUEST" });

      const temporaryUserInfo = JSON.parse(
        localStorage.getItem("temporaryUserInfo") || "{}"
      );

      const { data } = await axios.post(`${authRequest}/verify-otp`, {
        otp: values.otp,
        email: temporaryUserInfo.email,
      });

      dispatch({ type: "SUBMIT_SUCCESS", payload: data });
      toast.success("OTP verified successfully", {
        position: "bottom-center",
      });
      setTimeout(() => {
        actions.resetForm();
      }, 2000);

      // Call the function here and pass the isAccountVerified value
      handleVerifiedOTP(data.isAccountVerified);
      setMenu("terms");
    } catch (err) {
      dispatch({
        type: "SUBMIT_FAIL",
        payload: getError(err as ErrorResponse),
      });
      toast.error(getError(err as ErrorResponse), {
        position: "bottom-center",
      });
    }
  };

  //==============================
  // Function to handle OTP resend
  //==============================
  const handleResendOtp = async () => {
    try {
      // Retrieve temporary user info from local storage
      const temporaryUserInfo = JSON.parse(
        localStorage.getItem("temporaryUserInfo") || "{}"
      );

      if (temporaryUserInfo && temporaryUserInfo.email) {
        // Your logic to resend OTP
        await axios.post(`${authRequest}/request-otp`, {
          email: temporaryUserInfo.email,
        });

        toast.success("Verification email resent successfully", {
          position: "bottom-center",
        });

        setIsDisabled(true);
        const endTime = Date.now() + 60000; // 60 seconds from now
        setCountdown(60); // Start the countdown for 1 minute
        localStorage.setItem("otpResendEndTime", endTime.toString());
      } else {
        // Handle the case where email is not found in local storage
        toast.error("Email not found in local storage", {
          position: "bottom-center",
        });
      }
    } catch (err) {
      toast.error(getError(err as ErrorResponse), {
        position: "bottom-center",
      });
    }
  };

  //Navigate to
  const navigateToEdit = () => {
    setMenu("editEmail");
  };
  return (
    <div className="modal_menu max_width_modal">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <Box className="menu_modal otp_menu">
          <div className="header">
            <div className="title">
              <h4>Verify Your Email Address</h4>
            </div>
            <div className="text">
              <small>We've sent 6 digit code to </small>
            </div>
            <div className="email">
              <small>emmanuel@example.com</small>
            </div>
            <Link onClick={navigateToEdit} to="">
              <small>Edit Email</small>
            </Link>
          </div>
          <div className="form_box">
            <Formik
              initialValues={initialOtpValues}
              validationSchema={otpSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, errors, values }) => {
                const isOtpComplete = values.otp.length === 6;
                const hasErrors =
                  Object.keys(errors).length > 0 || !isOtpComplete;

                return (
                  <Form>
                    <div className="inner_form">
                      <div className="form_group a_flex">
                        <Field name="otp">
                          {({
                            field,
                          }: {
                            field: { value: string; name: string };
                          }) => (
                            <OtpInput
                              value={field.value}
                              onChange={(otp) => setFieldValue("otp", otp)}
                              numInputs={6}
                              inputType="number"
                              renderSeparator={
                                <span className="input_span"></span>
                              }
                              renderInput={(props) => <input {...props} />}
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name="otp"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="form_group">
                        <div className="btn c_flex">
                          <button className="main_btn l_flex">
                            <span
                              onClick={isDisabled ? undefined : handleResendOtp}
                              style={{
                                cursor: isDisabled ? "not-allowed" : "pointer",
                              }}
                            >
                              {isDisabled ? "" : "Resend OTP"}
                            </span>
                            {isDisabled && (
                              <div className="timer">
                                {formatTime(countdown)} Sec
                              </div>
                            )}
                          </button>
                          <button
                            type="submit"
                            className={
                              hasErrors
                                ? "main_btn disabled l_flex"
                                : "main_btn active l_flex"
                            }
                            disabled={isSubmitting || hasErrors}
                          >
                            {isSubmitting ? (
                              <span className="a_flex">
                                <i className="fa fa-spinner fa-spin"></i>
                                Verifying...
                              </span>
                            ) : (
                              "Verify Email"
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="form_group">
                        <div className="lower_text l_flex">
                          <small className="">
                            Already have an account? &#160;
                            <Link to="">Sign in</Link>
                          </small>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Box>
      </div>
    </div>
  );
}

// SEND EMAIL OTP
export function SendEmailOtpDropDownMenu({
  setMenu,
}: OtpVerificationDropDownMenuProps) {
  const { state } = useAppContext();
  const { theme } = state;

  const [, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });

  // Calculate initial countdown based on the stored end time
  const calculateInitialCountdown = () => {
    const storedEndTime = localStorage.getItem("otpResendEndTime");
    if (storedEndTime) {
      const remainingTime = Math.floor(
        (parseInt(storedEndTime, 10) - Date.now()) / 1000
      );
      return remainingTime > 0 ? remainingTime : 0;
    }
    return 0;
  };

  // State for countdown timer and disabling the button
  const [countdown, setCountdown] = useState(calculateInitialCountdown);
  const [_, setIsDisabled] = useState(countdown > 0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
        localStorage.setItem(
          "otpResendEndTime",
          (Date.now() + (countdown - 1) * 1000).toString()
        );
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsDisabled(false);
      localStorage.removeItem("otpResendEndTime");
    }
  }, [countdown]);

  // Function to handle OTP verification
  const handleVerifiedOTP = (isAccountVerified: boolean) => {
    const temporaryUserInfo = JSON.parse(
      localStorage.getItem("temporaryUserInfo") || "{}"
    );
    temporaryUserInfo.isAccountVerified = isAccountVerified;

    //localStorage.removeItem("temporaryUserInfo");
  };

  //=============
  // HANDLE SUBMIT
  //=============
  const handleSubmit = async (
    values: OtpValues,
    actions: FormikHelpers<OtpValues>
  ) => {
    try {
      dispatch({ type: "SUBMIT_REQUEST" });

      const temporaryUserInfo = JSON.parse(
        localStorage.getItem("temporaryUserInfo") || "{}"
      );

      const { data } = await axios.post(`${authRequest}/verify-otp`, {
        otp: values.otp,
        email: temporaryUserInfo.email,
      });

      dispatch({ type: "SUBMIT_SUCCESS", payload: data });
      toast.success("OTP verified successfully", {
        position: "bottom-center",
      });
      setTimeout(() => {
        actions.resetForm();
      }, 2000);

      // Call the function here and pass the isAccountVerified value
      handleVerifiedOTP(data.isAccountVerified);
      setMenu("terms");
    } catch (err) {
      dispatch({
        type: "SUBMIT_FAIL",
        payload: getError(err as ErrorResponse),
      });
      toast.error(getError(err as ErrorResponse), {
        position: "bottom-center",
      });
    }
  };

  //==============================
  // Function to handle OTP resend
  //==============================
  const handleResendOtp = async () => {
    try {
      // Retrieve temporary user info from local storage
      const temporaryUserInfo = JSON.parse(
        localStorage.getItem("temporaryUserInfo") || "{}"
      );

      if (temporaryUserInfo && temporaryUserInfo.email) {
        // Your logic to resend OTP
        await axios.post(`${authRequest}/request-otp`, {
          email: temporaryUserInfo.email,
        });

        toast.success("Verification email resent successfully", {
          position: "bottom-center",
        });

        setIsDisabled(true);
        const endTime = Date.now() + 60000; // 60 seconds from now
        setCountdown(60); // Start the countdown for 1 minute
        localStorage.setItem("otpResendEndTime", endTime.toString());
      } else {
        // Handle the case where email is not found in local storage
        toast.error("Email not found in local storage", {
          position: "bottom-center",
        });
      }
    } catch (err) {
      toast.error(getError(err as ErrorResponse), {
        position: "bottom-center",
      });
    }
  };

  //Navigate to Login Menu
  const navigateToLogin = () => {
    setMenu("webthree_email");
  };

  return (
    <div className="modal_menu max_width_modal">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <Box className="menu_modal otp_menu">
          <div className="header">
            <div className="title">
              <h4>Edit Email Address</h4>
            </div>
            <div className="text">
              <small>
                To enhance account security, verify your email address{" "}
              </small>
            </div>
          </div>
          <div className="form_box edit_form_box">
            <Formik
              initialValues={initialEmailValues}
              validationSchema={emailValidationSchema}
              onSubmit={handleResendOtp}
            >
              {({ touched, errors, isSubmitting, isValid, dirty }) => (
                <Form>
                  <div className="inner_form">
                    <div className="grid_form">
                      <div
                        className={`form_group ${
                          touched.email && errors.email ? "error" : ""
                        }`}
                      >
                        <Field
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email"
                          className={`input_box email_phone_input ${
                            touched.email && errors.email ? "error-border" : ""
                          }`}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="form_group">
                      <div className="btn edit_btn l_flex">
                        <button
                          type="submit"
                          className={`main_btn ${
                            isValid && dirty ? "active" : ""
                          } l_flex`}
                          disabled={!isValid || !dirty || isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="a_flex">
                              <i className="fa fa-spinner fa-spin"></i>
                              Sending...
                            </span>
                          ) : (
                            "Send OTP"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="form_box">
            <Formik
              initialValues={initialOtpValues}
              validationSchema={otpSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, errors, values }) => {
                const isOtpComplete = values.otp.length === 6;
                const hasErrors =
                  Object.keys(errors).length > 0 || !isOtpComplete;

                return (
                  <Form>
                    <div className="inner_form">
                      <div className="form_group a_flex">
                        <Field name="otp">
                          {({
                            field,
                          }: {
                            field: { value: string; name: string };
                          }) => (
                            <OtpInput
                              value={field.value}
                              onChange={(otp) => setFieldValue("otp", otp)}
                              numInputs={6}
                              inputType="number"
                              renderSeparator={
                                <span className="input_span"></span>
                              }
                              renderInput={(props) => <input {...props} />}
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name="otp"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="form_group">
                        <div className="btn edit_btn">
                          <button
                            type="submit"
                            className={
                              hasErrors
                                ? "main_btn disabled l_flex"
                                : "main_btn active l_flex"
                            }
                            disabled={isSubmitting || hasErrors}
                          >
                            {isSubmitting ? (
                              <span className="a_flex">
                                <i className="fa fa-spinner fa-spin"></i>
                                Verifying...
                              </span>
                            ) : (
                              "Verify Email Address"
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="form_group">
                        <div className="lower_text l_flex">
                          <small className="">
                            Already have an account? &#160;
                            <Link onClick={navigateToLogin} to="">
                              Sign in
                            </Link>
                          </small>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Box>
      </div>
    </div>
  );
}

// SEND MOBILE OTP
export function SendMobileOtpDropDownMenu({
  setMenu,
}: OtpVerificationDropDownMenuProps) {
  const { state } = useAppContext();
  const { theme } = state;

  const [, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });

  // Calculate initial countdown based on the stored end time
  const calculateInitialCountdown = () => {
    const storedEndTime = localStorage.getItem("otpResendEndTime");
    if (storedEndTime) {
      const remainingTime = Math.floor(
        (parseInt(storedEndTime, 10) - Date.now()) / 1000
      );
      return remainingTime > 0 ? remainingTime : 0;
    }
    return 0;
  };

  // State for countdown timer and disabling the button
  const [countdown, setCountdown] = useState(calculateInitialCountdown);
  const [_, setIsDisabled] = useState(countdown > 0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
        localStorage.setItem(
          "otpResendEndTime",
          (Date.now() + (countdown - 1) * 1000).toString()
        );
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsDisabled(false);
      localStorage.removeItem("otpResendEndTime");
    }
  }, [countdown]);

  // Function to handle OTP verification
  const handleVerifiedOTP = (isAccountVerified: boolean) => {
    const temporaryUserInfo = JSON.parse(
      localStorage.getItem("temporaryUserInfo") || "{}"
    );
    temporaryUserInfo.isAccountVerified = isAccountVerified;

    //localStorage.removeItem("temporaryUserInfo");
  };

  //=============
  // HANDLE SUBMIT
  //=============
  const handleSubmit = async (
    values: OtpValues,
    actions: FormikHelpers<OtpValues>
  ) => {
    try {
      dispatch({ type: "SUBMIT_REQUEST" });

      const temporaryUserInfo = JSON.parse(
        localStorage.getItem("temporaryUserInfo") || "{}"
      );

      const { data } = await axios.post(`${authRequest}/verify-otp`, {
        otp: values.otp,
        email: temporaryUserInfo.email,
      });

      dispatch({ type: "SUBMIT_SUCCESS", payload: data });
      toast.success("OTP verified successfully", {
        position: "bottom-center",
      });
      setTimeout(() => {
        actions.resetForm();
      }, 2000);

      // Call the function here and pass the isAccountVerified value
      handleVerifiedOTP(data.isAccountVerified);
      setMenu("terms");
    } catch (err) {
      dispatch({
        type: "SUBMIT_FAIL",
        payload: getError(err as ErrorResponse),
      });
      toast.error(getError(err as ErrorResponse), {
        position: "bottom-center",
      });
    }
  };

  //==============================
  // Function to handle OTP resend
  //==============================
  const handleResendOtp = async () => {
    try {
      // Retrieve temporary user info from local storage
      const temporaryUserInfo = JSON.parse(
        localStorage.getItem("temporaryUserInfo") || "{}"
      );

      if (temporaryUserInfo && temporaryUserInfo.email) {
        // Your logic to resend OTP
        await axios.post(`${authRequest}/request-otp`, {
          email: temporaryUserInfo.email,
        });

        toast.success("Verification email resent successfully", {
          position: "bottom-center",
        });

        setIsDisabled(true);
        const endTime = Date.now() + 60000; // 60 seconds from now
        setCountdown(60); // Start the countdown for 1 minute
        localStorage.setItem("otpResendEndTime", endTime.toString());
      } else {
        // Handle the case where email is not found in local storage
        toast.error("Email not found in local storage", {
          position: "bottom-center",
        });
      }
    } catch (err) {
      toast.error(getError(err as ErrorResponse), {
        position: "bottom-center",
      });
    }
  };

  //Navigate to Login Menu
  const navigateToLogin = () => {
    setMenu("webthree_email");
  };

  return (
    <div className="modal_menu max_width_modal">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <Box className="menu_modal otp_menu">
          <div className="header">
            <div className="title">
              <h4>Edit Mobile Number</h4>
            </div>
            <div className="text">
              <small>
                To enhance account security, verify your mobile number
              </small>
            </div>
          </div>
          <div className="form_box edit_form_box">
            <Formik
              initialValues={initialMobileValues}
              validationSchema={mobileValidationSchema}
              onSubmit={handleResendOtp}
            >
              {({ touched, errors, isSubmitting, isValid, dirty }) => (
                <Form>
                  <div className="inner_form">
                    <div className="grid_form">
                      <div
                        className={`form_group ${
                          touched.phone && errors.phone ? "error" : ""
                        }`}
                      >
                        <Field
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          className={`input_box email_phone_input ${
                            touched.phone && errors.phone ? "error-border" : ""
                          }`}
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="form_group">
                      <div className="btn edit_btn l_flex">
                        <button
                          type="submit"
                          className={`main_btn ${
                            isValid && dirty ? "active" : ""
                          } l_flex`}
                          disabled={!isValid || !dirty || isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="a_flex">
                              <i className="fa fa-spinner fa-spin"></i>
                              Sending...
                            </span>
                          ) : (
                            "Send OTP"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="form_box">
            <Formik
              initialValues={initialOtpValues}
              validationSchema={otpSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, errors, values }) => {
                const isOtpComplete = values.otp.length === 6;
                const hasErrors =
                  Object.keys(errors).length > 0 || !isOtpComplete;

                return (
                  <Form>
                    <div className="inner_form">
                      <div className="form_group a_flex">
                        <Field name="otp">
                          {({
                            field,
                          }: {
                            field: { value: string; name: string };
                          }) => (
                            <OtpInput
                              value={field.value}
                              onChange={(otp) => setFieldValue("otp", otp)}
                              numInputs={6}
                              inputType="number"
                              renderSeparator={
                                <span className="input_span"></span>
                              }
                              renderInput={(props) => <input {...props} />}
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name="otp"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="form_group">
                        <div className="btn edit_btn">
                          <button
                            type="submit"
                            className={
                              hasErrors
                                ? "main_btn disabled l_flex"
                                : "main_btn active l_flex"
                            }
                            disabled={isSubmitting || hasErrors}
                          >
                            {isSubmitting ? (
                              <span className="a_flex">
                                <i className="fa fa-spinner fa-spin"></i>
                                Verifying...
                              </span>
                            ) : (
                              "Verify Mobile Number"
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="form_group">
                        <div className="lower_text l_flex">
                          <small className="">
                            Already have an account? &#160;
                            <Link onClick={navigateToLogin} to="">
                              Sign in
                            </Link>
                          </small>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Box>
      </div>
    </div>
  );
}

//MOBILE OTP
export function MobileOtpVerificationDropDownMenu({
  setMenu,
}: OtpVerificationDropDownMenuProps) {
  const { state } = useAppContext();
  const { theme } = state;

  const [, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });

  // Calculate initial countdown based on the stored end time
  const calculateInitialCountdown = () => {
    const storedEndTime = localStorage.getItem("otpResendEndTime");
    if (storedEndTime) {
      const remainingTime = Math.floor(
        (parseInt(storedEndTime, 10) - Date.now()) / 1000
      );
      return remainingTime > 0 ? remainingTime : 0;
    }
    return 0;
  };

  // State for countdown timer and disabling the button
  const [countdown, setCountdown] = useState(calculateInitialCountdown);
  const [isDisabled, setIsDisabled] = useState(countdown > 0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
        localStorage.setItem(
          "otpResendEndTime",
          (Date.now() + (countdown - 1) * 1000).toString()
        );
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsDisabled(false);
      localStorage.removeItem("otpResendEndTime");
    }
  }, [countdown]);

  // Function to handle OTP verification
  const handleVerifiedOTP = (isAccountVerified: boolean) => {
    const temporaryUserInfo = JSON.parse(
      localStorage.getItem("temporaryUserInfo") || "{}"
    );
    temporaryUserInfo.isAccountVerified = isAccountVerified;

    //localStorage.removeItem("temporaryUserInfo");
  };

  //=============
  // HANDLE SUBMIT
  //=============
  const handleSubmit = async (
    values: OtpValues,
    actions: FormikHelpers<OtpValues>
  ) => {
    try {
      dispatch({ type: "SUBMIT_REQUEST" });

      const temporaryUserInfo = JSON.parse(
        localStorage.getItem("temporaryUserInfo") || "{}"
      );

      const { data } = await axios.post(`${authRequest}/verify-otp`, {
        otp: values.otp,
        email: temporaryUserInfo.email,
      });

      dispatch({ type: "SUBMIT_SUCCESS", payload: data });
      toast.success("OTP verified successfully", {
        position: "bottom-center",
      });
      setTimeout(() => {
        actions.resetForm();
      }, 2000);

      // Call the function here and pass the isAccountVerified value
      handleVerifiedOTP(data.isAccountVerified);
      setMenu("terms");
    } catch (err) {
      dispatch({
        type: "SUBMIT_FAIL",
        payload: getError(err as ErrorResponse),
      });
      toast.error(getError(err as ErrorResponse), {
        position: "bottom-center",
      });
    }
  };

  //==============================
  // Function to handle OTP resend
  //==============================
  const handleResendOtp = async () => {
    try {
      // Retrieve temporary user info from local storage
      const temporaryUserInfo = JSON.parse(
        localStorage.getItem("temporaryUserInfo") || "{}"
      );

      if (temporaryUserInfo && temporaryUserInfo.email) {
        // Your logic to resend OTP
        await axios.post(`${authRequest}/request-otp`, {
          email: temporaryUserInfo.email,
        });

        toast.success("Verification email resent successfully", {
          position: "bottom-center",
        });

        setIsDisabled(true);
        const endTime = Date.now() + 60000; // 60 seconds from now
        setCountdown(60); // Start the countdown for 1 minute
        localStorage.setItem("otpResendEndTime", endTime.toString());
      } else {
        // Handle the case where email is not found in local storage
        toast.error("Email not found in local storage", {
          position: "bottom-center",
        });
      }
    } catch (err) {
      toast.error(getError(err as ErrorResponse), {
        position: "bottom-center",
      });
    }
  };

  //Navigate to Login Menu
  const navigateToLogin = () => {
    setMenu("webthree_email");
  };

  //Navigate to
  const navigateToEdit = () => {
    setMenu("editMobile");
  };
  return (
    <div className="modal_menu max_width_modal">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <Box className="menu_modal otp_menu">
          <div className="header">
            <div className="title">
              <h4>Verify Your Mobile Number</h4>
            </div>
            <div className="text">
              <small>We've sent 6 digit code to </small>
            </div>
            <div className="email">
              <small>+2348116915104</small>
            </div>
            <Link onClick={navigateToEdit} to="">
              <small>Edit Mobile Number</small>
            </Link>
          </div>
          <div className="form_box">
            <Formik
              initialValues={initialOtpValues}
              validationSchema={otpSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, errors, values }) => {
                const isOtpComplete = values.otp.length === 6;
                const hasErrors =
                  Object.keys(errors).length > 0 || !isOtpComplete;

                return (
                  <Form>
                    <div className="inner_form">
                      <div className="form_group a_flex">
                        <Field name="otp">
                          {({
                            field,
                          }: {
                            field: { value: string; name: string };
                          }) => (
                            <OtpInput
                              value={field.value}
                              onChange={(otp) => setFieldValue("otp", otp)}
                              numInputs={6}
                              inputType="number"
                              renderSeparator={
                                <span className="input_span"></span>
                              }
                              renderInput={(props) => <input {...props} />}
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name="otp"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="form_group">
                        <div className="btn c_flex">
                          <button className="main_btn l_flex">
                            <span
                              onClick={isDisabled ? undefined : handleResendOtp}
                              style={{
                                cursor: isDisabled ? "not-allowed" : "pointer",
                              }}
                            >
                              {isDisabled ? "" : "Resend OTP"}
                            </span>
                            {isDisabled && (
                              <div className="timer">
                                {formatTime(countdown)} Sec
                              </div>
                            )}
                          </button>
                          <button
                            type="submit"
                            className={
                              hasErrors
                                ? "main_btn disabled l_flex"
                                : "main_btn active l_flex"
                            }
                            disabled={isSubmitting || hasErrors}
                          >
                            {isSubmitting ? (
                              <span className="a_flex">
                                <i className="fa fa-spinner fa-spin"></i>
                                Verifying...
                              </span>
                            ) : (
                              "Verify"
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="form_group">
                        <div className="lower_text l_flex">
                          <small className="">
                            Already have an account? &#160;
                            <Link onClick={navigateToLogin} to="">
                              Sign in
                            </Link>
                          </small>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Box>
      </div>
    </div>
  );
}
