import { bankAccountSchema } from "../../../schema/Index";
import { useAppContext } from "../../../utilities/utils/Utils";
import { Formik, ErrorMessage, Form, Field } from "formik";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./styles.scss";

const initialValues = {
  bankName: "",
  account: "",
};
function BankAccountMenu() {
  const { state } = useAppContext();
  const { theme } = state;

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Submitted Values:", values);
    // Add your submission logic here
  };

  return (
    <div className="add_bank_account_modal max_width_modal modal_menu">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <div className="content">
          <div className="header">
            <div className="title">
              <h4>Add Bank Account</h4>
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
              validationSchema={bankAccountSchema}
              onSubmit={handleSubmit}
            >
              {({ touched, errors, isSubmitting, isValid, dirty }) => (
                <Form>
                  <div className="inner_form">
                    <div className="grid_form">
                      {/* Bank Name - Select Field */}
                      <div
                        className={`form_group ${
                          touched.bankName && errors.bankName ? "error" : ""
                        }`}
                      >
                        <Field
                          as="select"
                          id="bankName"
                          name="bankName"
                          className={`select ${
                            touched.bankName && errors.bankName
                              ? "error-border"
                              : ""
                          }`}
                        >
                          <option value="" disabled>
                            Select Bank
                          </option>
                          <option value="Bank A">Bank A</option>
                          <option value="Bank B">Bank B</option>
                          <option value="Bank C">Bank C</option>
                        </Field>
                        <ErrorMessage
                          name="bankName"
                          component="div"
                          className="error"
                        />
                      </div>

                      {/* Account Number - Text Field */}
                      <div
                        className={`form_group form_group_text ${
                          touched.account && errors.account ? "form_error" : ""
                        }`}
                      >
                        <Field
                          type="number"
                          id="account"
                          name="account"
                          placeholder="Enter Account Number"
                          className={`input_box ${
                            touched.account && errors.account
                              ? "error-border"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          name="account"
                          component="div"
                          className="error"
                        />
                        <small className="user_account_name a_flex">
                          <CheckCircleIcon className="icon green" />
                          <p>Akande Tunji</p>
                        </small>

                        {/* <small className="user_account_name error a_flex">
                          <CheckCircleIcon className="icon red" />
                          <p className="red">
                            Add account with your verified name
                          </p>
                        </small> */}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form_group">
                      <div className="btn l_flex">
                        <button
                          type="submit"
                          className={`main_btn add_bank_btn ${
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
                            "Save"
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

export default BankAccountMenu;
