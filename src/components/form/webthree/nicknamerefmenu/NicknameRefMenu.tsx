import { nickRefSchema } from "../../../../schema/Index";
import { useAppContext } from "../../../../utilities/utils/Utils";
import { Formik, ErrorMessage, Form, Field } from "formik";

const initialValues = {
  username: "",
  referralCode: "",
};

function NicknameRefMenu() {
  const { state } = useAppContext();
  const { theme } = state;

  // SUBMIT HANDLE
  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Submitted Values:", values);
    // Add your submission logic here
  };

  return (
    <div className="web_three_nick_ref_form max_width_modal modal_menu">
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
              validationSchema={nickRefSchema}
              onSubmit={handleSubmit}
            >
              {({ touched, errors, isSubmitting, isValid, dirty }) => (
                <Form>
                  <div className="inner_form">
                    <div className="grid_form">
                      <div
                        className={`form_group ${
                          touched.username && errors.username ? "error" : ""
                        }`}
                      >
                        <Field
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Nickname"
                          className={`input_box ${
                            touched.username && errors.username
                              ? "error-border"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="error"
                        />
                      </div>
                      <div
                        className={`form_group ${
                          touched.referralCode && errors.referralCode
                            ? "error"
                            : ""
                        }`}
                      >
                        <Field
                          type="text"
                          id="referralCode"
                          name="referralCode"
                          placeholder="Referral Code (Optional)"
                          className={`input_box ${
                            touched.referralCode && errors.referralCode
                              ? "error-border"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="referralCode"
                          component="div"
                          className="error"
                        />
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

export default NicknameRefMenu;
