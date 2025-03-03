import { commentReportSchema } from "../../../schema/Index";
import { useAppContext } from "../../../utilities/utils/Utils";
import { Formik, ErrorMessage, Form, Field } from "formik";

const initialValues = {
  reportingType: "",
  description: "",
};
function ReportCommentMenu() {
  const { state } = useAppContext();
  const { theme } = state;

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Submitted Values:", values);
    // Add your submission logic here
  };

  return (
    <div className="comment_issue max_width_modal modal_menu">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <div className="content">
          <div className="header">
            <div className="title">
              <h4>Report Comment</h4>
            </div>
            <div className="text">
              <small>
                Help us maintain a safe and respectful community. Let us know
                why this comment is inappropriate
              </small>
            </div>
          </div>

          <div className="form_box">
            <Formik
              initialValues={initialValues}
              validationSchema={commentReportSchema}
              onSubmit={handleSubmit}
            >
              {({ touched, errors, isSubmitting, isValid, dirty }) => (
                <Form>
                  <div className="inner_form">
                    <div className="grid_form">
                      {/* Reporting Type */}
                      <div
                        className={`form_group ${
                          touched.reportingType && errors.reportingType
                            ? "error"
                            : ""
                        }`}
                      >
                        <Field
                          as="select"
                          id="reportingType"
                          name="reportingType"
                          className={`select ${
                            touched.reportingType && errors.reportingType
                              ? "error-border"
                              : ""
                          }`}
                        >
                          <option value="" label="Select Reporting Type" />
                          <option value="Harassment" label="Harassment" />
                          <option value="Spam" label="Spam" />
                          <option value="Hate Speech" label="Hate Speech" />
                          <option
                            value="Misinformation"
                            label="Misinformation"
                          />
                        </Field>
                        <ErrorMessage
                          name="reportingType"
                          component="div"
                          className="error"
                        />
                      </div>

                      {/* Description */}
                      <div
                        className={`form_group ${
                          touched.description && errors.description
                            ? "error"
                            : ""
                        }`}
                      >
                        <Field
                          as="textarea"
                          id="description"
                          name="description"
                          placeholder="Describe the issue"
                          className={`textarea ${
                            touched.description && errors.description
                              ? "error-border"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="description"
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
                              Submitting...
                            </span>
                          ) : (
                            "Submit Report"
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

export default ReportCommentMenu;
