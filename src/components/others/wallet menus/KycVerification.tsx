import { kycVerifySchema } from "../../../schema/Index";
import { useAppContext } from "../../../utilities/utils/Utils";
import "./styles.scss";
import { Formik, ErrorMessage, Form, Field } from "formik";

const initialValues = {
  fullName: "",
  dob: "",
  docType: "",
  ninNumber: "",
};

function KycVerificationMenu() {
  const { state } = useAppContext();
  const { theme } = state;

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Submitted Values:", values);
    // Add your submission logic here
  };

  return (
    <div className="kyc_verification max_width_modal modal_menu">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <div className="content">
          <div className="header">
            <div className="title">
              <h4>Complete Your KYC Verification</h4>
            </div>
            <div className="text">
              <small>
                For your security and compliance, we need to verify your
                identity.
              </small>
            </div>
          </div>
          <div className="form_box">
            <Formik
              initialValues={initialValues}
              validationSchema={kycVerifySchema}
              onSubmit={handleSubmit}
            >
              {({ touched, errors, isSubmitting, isValid, dirty }) => (
                <Form>
                  <div className="inner_form">
                    <div className="grid_form">
                      {/* Full Name */}
                      <div
                        className={`form_group ${
                          touched.fullName && errors.fullName ? "error" : ""
                        }`}
                      >
                        <Field
                          type="text"
                          id="fullName"
                          name="fullName"
                          placeholder="Full Name"
                          className={`input_box ${
                            touched.fullName && errors.fullName
                              ? "error-border"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="fullName"
                          component="div"
                          className="error"
                        />
                      </div>
                      {/* Date of Birth */}
                      <div
                        className={`form_group ${
                          touched.dob && errors.dob ? "error" : ""
                        }`}
                      >
                        <Field
                          type="date"
                          id="dob"
                          name="dob"
                          placeholder="Date of Birth"
                          className={`input_box dob_input ${
                            touched.dob && errors.dob ? "error-border" : ""
                          }`}
                        />
                        <ErrorMessage
                          name="dob"
                          component="div"
                          className="error"
                        />
                      </div>
                      {/* Document Type */}
                      <div
                        className={`form_group ${
                          touched.docType && errors.docType ? "error" : ""
                        }`}
                      >
                        <Field
                          as="select"
                          id="docType"
                          name="docType"
                          className={`select ${
                            touched.docType && errors.docType
                              ? "error-border"
                              : ""
                          }`}
                        >
                          <option value="" label="Select Document Type" />
                          <option value="passport" label="Passport" />
                          <option
                            value="driver_license"
                            label="Driver's License"
                          />
                          <option value="national_id" label="National ID" />
                        </Field>
                        <ErrorMessage
                          name="docType"
                          component="div"
                          className="error"
                        />
                      </div>
                      {/* NIN Number */}
                      <div
                        className={`form_group ${
                          touched.ninNumber && errors.ninNumber ? "error" : ""
                        }`}
                      >
                        <Field
                          type="text"
                          id="ninNumber"
                          name="ninNumber"
                          placeholder="NIN Number"
                          className={`input_box ${
                            touched.ninNumber && errors.ninNumber
                              ? "error-border"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="ninNumber"
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
                            "Submit KYC"
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

export default KycVerificationMenu;
