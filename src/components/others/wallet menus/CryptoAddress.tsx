import { cryptoAddressSchema } from "../../../schema/Index";
import { useAppContext } from "../../../utilities/utils/Utils";
import { Formik, ErrorMessage, Form, Field } from "formik";

const initialValues = {
  cryptoType: "",
  walletAddress: "",
  addressLabel: "",
};

function CryptoAddressMenu() {
  const { state } = useAppContext();
  const { theme } = state;

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Submitted Values:", values);
    // Add your submission logic here
  };

  return (
    <div className="add_crypto_address max_width_modal modal_menu">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <div className="content">
          <div className="header">
            <div className="title">
              <h4>Add Crypto Address</h4>
            </div>
            <div className="text">
              <small>Add a new cryptocurrency address to your account</small>
            </div>
          </div>
          <div className="form_box">
            <Formik
              initialValues={initialValues}
              validationSchema={cryptoAddressSchema}
              onSubmit={handleSubmit}
            >
              {({ touched, errors, isSubmitting, isValid, dirty }) => (
                <Form>
                  <div className="inner_form">
                    <div className="grid_form">
                      {/* Crypto Type */}
                      <div
                        className={`form_group ${
                          touched.cryptoType && errors.cryptoType ? "error" : ""
                        }`}
                      >
                        <Field
                          type="text"
                          id="cryptoType"
                          name="cryptoType"
                          placeholder="USDT"
                          className={`input_box ${
                            touched.cryptoType && errors.cryptoType
                              ? "error-border"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="cryptoType"
                          component="div"
                          className="error"
                        />
                      </div>

                      {/* Wallet Address */}
                      <div
                        className={`form_group ${
                          touched.walletAddress && errors.walletAddress
                            ? "error"
                            : ""
                        }`}
                      >
                        <Field
                          type="text"
                          id="walletAddress"
                          name="walletAddress"
                          placeholder="Wallet Address (BEP20)"
                          className={`input_box ${
                            touched.walletAddress && errors.walletAddress
                              ? "error-border"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="walletAddress"
                          component="div"
                          className="error"
                        />
                      </div>

                      {/* Address Label */}
                      <div
                        className={`form_group ${
                          touched.addressLabel && errors.addressLabel
                            ? "error"
                            : ""
                        }`}
                      >
                        <Field
                          type="text"
                          id="addressLabel"
                          name="addressLabel"
                          placeholder="Address Label (e.g., My Wallet)"
                          className={`input_box ${
                            touched.addressLabel && errors.addressLabel
                              ? "error-border"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="addressLabel"
                          component="div"
                          className="error"
                        />
                      </div>
                    </div>
                    <div className="forgot_text mt10 l_flex">
                      <label className="check_box _flex">
                        <input type="checkbox" className="checkbox_input" />
                        <small className="checkbox_text">
                          I hereby confirm that the wallet address provided is
                          accurate and contains no errors.
                        </small>
                      </label>
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
                              Saving...
                            </span>
                          ) : (
                            "Save Address"
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

export default CryptoAddressMenu;
