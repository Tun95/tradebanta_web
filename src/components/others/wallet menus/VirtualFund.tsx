import { virtualAccountSchema } from "../../../schema/Index";
import { useAppContext } from "../../../utilities/utils/Utils";
import { Formik, ErrorMessage, Form, Field } from "formik";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

const initialValues = {
  bankName: "",
  account: "",
  accountName: "",
};
function VirtualFundMenu() {
  const { state } = useAppContext();
  const { theme } = state;

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Submitted Values:", values);
    // Add your submission logic here
  };
  return (
    <div className="fund_virtual_account max_width_modal modal_menu">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <div className="content">
          <div className="header">
            <div className="title">
              <h4>Fund with Virtual Account</h4>
            </div>
            <div className="text">
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </small>
            </div>
          </div>
          <div className="form_box">
            <Formik
              initialValues={initialValues}
              validationSchema={virtualAccountSchema}
              onSubmit={handleSubmit}
            >
              {({ touched, errors, isSubmitting, isValid, dirty }) => (
                <Form>
                  <div className="inner_form">
                    <div className="grid_form">
                      {/* Account Number */}
                      <div
                        className={`form_group ${
                          touched.account && errors.account ? "error" : ""
                        }`}
                      >
                        <label htmlFor="account">Account Number</label>
                        <span className="input_icon a_flex">
                          <Field
                            type="number"
                            id="account"
                            name="account"
                            placeholder="1234567890"
                            className={`input_box ${
                              touched.account && errors.account
                                ? "error-border"
                                : ""
                            }`}
                          />{" "}
                          <span className="_icon l_flex">
                            <ContentCopyOutlinedIcon className="icon" />
                          </span>
                        </span>
                        <ErrorMessage
                          name="account"
                          component="div"
                          className="error"
                        />
                      </div>

                      {/* Bank Name */}
                      <div
                        className={`form_group ${
                          touched.bankName && errors.bankName ? "error" : ""
                        }`}
                      >
                        <label htmlFor="bankName">Bank Name</label>

                        <Field
                          type="text"
                          id="bankName"
                          name="bankName"
                          placeholder="Providus Bank"
                          className={`input_box ${
                            touched.bankName && errors.bankName
                              ? "error-border"
                              : ""
                          }`}
                        />

                        <ErrorMessage
                          name="bankName"
                          component="div"
                          className="error"
                        />
                      </div>

                      {/* Account Name */}
                      <div
                        className={`form_group ${
                          touched.accountName && errors.accountName
                            ? "error"
                            : ""
                        }`}
                      >
                        <label htmlFor="accountName">Account Name</label>
                        <Field
                          type="text"
                          id="accountName"
                          name="accountName"
                          placeholder="FortuneHQ-3672"
                          className={`input_box ${
                            touched.accountName && errors.accountName
                              ? "error-border"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="accountName"
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form_group">
                      <div className="btn l_flex">
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
                              Saving...
                            </span>
                          ) : (
                            "I have made the transfer"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualFundMenu;
