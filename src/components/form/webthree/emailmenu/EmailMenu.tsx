import { Link } from "react-router-dom";
import { emailValidationSchema } from "../../../../schema/Index";
import { useAppContext } from "../../../../utilities/utils/Utils";
import { Formik, ErrorMessage, Form, Field } from "formik";

const initialValues = {
  email: "",
};
function EmailMenu() {
  const { state, onClose } = useAppContext();
  const { theme } = state;

  // SUBMIT HANDLE
  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Submitted Values:", values);
    // Add your submission logic here
  };

  return (
    <div className="web_three_email_form max_width_modal modal_menu">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <div className="content">
          <div className="header">
            <div className="title">
              <h4>Welcome Back to TradeBanta</h4>
            </div>
            <div className="text">
              <small>Log in to track your predictions and earnings</small>
            </div>
          </div>
          <div className="form_box">
            <Formik
              initialValues={initialValues}
              validationSchema={emailValidationSchema}
              onSubmit={handleSubmit}
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
                          className={`input_box ${
                            touched.email && errors.email ? "error-border" : ""
                          }`}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="forgot_text mt10 l_flex">
                        <small className="a_flex">
                          <p>
                            By registering, you accept the
                            <Link onClick={onClose} to="/terms">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link onClick={onClose} to="/betting-terms">
                              Betting Terms & Conditions
                            </Link>
                          </p>
                        </small>
                      </div>
                    </div>
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
                              Continuing...
                            </span>
                          ) : (
                            "Continue"
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

export default EmailMenu;
