import { useAppContext } from "../../../utilities/utils/Utils";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { bonusClaimIssueSchema } from "../../../schema/Index";

const initialValues = {
  bonusType: "",
  amount: "",
  currency: "",
  description: "",
  attachement: "",
};
function BonusClaimIssueMenu() {
  const { state } = useAppContext();
  const { theme } = state;

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Submitted Values:", values);
    // Add your submission logic here
  };

  return (
    <div className="withdrawal_issue max_width_modal modal_menu">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <div className="content">
          <div className="header">
            <div className="title">
              <h4>Report Bonus Claim Issue</h4>
            </div>
            <div className="text">
              <small>
                Notice a problem with your bonus?
                <p>Let us know</p>
              </small>
            </div>
          </div>

          <div className="form_box">
            <Formik
              initialValues={initialValues}
              validationSchema={bonusClaimIssueSchema}
              onSubmit={handleSubmit}
            >
              {({ touched, errors, isSubmitting, isValid, dirty }) => (
                <Form>
                  <div className="inner_form">
                    <div className="grid_form">
                      {/* Currency Type */}
                      <div
                        className={`form_group ${
                          touched.bonusType && errors.bonusType ? "error" : ""
                        }`}
                      >
                        <Field
                          as="select"
                          id="bonusType"
                          name="bonusType"
                          className={`select ${
                            touched.bonusType && errors.bonusType
                              ? "error-border"
                              : ""
                          }`}
                        >
                          <option value="" label="Bonus Type" />
                          <option value="NGN" label="Nigerian Naira (NGN)" />
                          <option
                            value="Crypto Currency"
                            label="Crypto Currency"
                          />
                        </Field>
                        <ErrorMessage
                          name="bonusType"
                          component="div"
                          className="error"
                        />
                      </div>

                      {/* Amount & Currency */}
                      <div className="span_grid f_flex">
                        <div
                          className={`form_group ${
                            touched.amount && errors.amount ? "error" : ""
                          }`}
                        >
                          <Field
                            type="text"
                            id="amount"
                            name="amount"
                            placeholder="Expected Amount"
                            className={`input_box ${
                              touched.amount && errors.amount
                                ? "error-border"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            name="amount"
                            component="div"
                            className="error"
                          />
                        </div>
                        {/* Currency */}
                        <div
                          className={`form_group ${
                            touched.currency && errors.currency ? "error" : ""
                          }`}
                        >
                          <Field
                            as="select"
                            id="currency"
                            name="currency"
                            className={`select ${
                              touched.currency && errors.currency
                                ? "error-border"
                                : ""
                            }`}
                          >
                            <option value="" label="Select Currency" />
                            <option value="USD" label="USD" />
                            <option value="EUR" label="EUR" />
                            <option value="NGN" label="NGN" />
                          </Field>
                          <ErrorMessage
                            name="currency"
                            component="div"
                            className="error"
                          />
                        </div>
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

                      {/* Attachment */}
                      {/* Attachment */}
                      <div className="form_group attachment_group a_flex">
                        <label
                          htmlFor="attachment"
                          className="attachment_label c_flex"
                        >
                          <small>Attachment (Optional)</small>{" "}
                          <div className="_icon l_flex">
                            <NoteAddOutlinedIcon className="attachment_icon" />
                          </div>
                        </label>
                        <Field
                          type="file"
                          id="attachment"
                          name="attachment"
                          className="input_box attachment_input"
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
                            "Submit"
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

export default BonusClaimIssueMenu;
