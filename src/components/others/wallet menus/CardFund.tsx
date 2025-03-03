import { Formik, ErrorMessage, Form, Field } from "formik";
import { useAppContext } from "../../../utilities/utils/Utils";
import { cardFundSchema } from "../../../schema/Index";

const initialValues = {
  amount: "",
  currency: "",
};
function CardFundMenu() {
  const { state } = useAppContext();
  const { theme } = state;

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Submitted Values:", values);
    // Add your submission logic here
  };
  return (
    <div className="fund_with_card max_width_modal modal_menu">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <div className="content">
          <div className="header">
            <div className="title">
              <h4>Fund with Card</h4>
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
              validationSchema={cardFundSchema}
              onSubmit={handleSubmit}
            >
              {({ touched, errors, isSubmitting, isValid, dirty }) => (
                <Form>
                  <div className="inner_form">
                    <div className="grid_form">
                      {/* Amount & Currency */}
                      <div className="span_grid f_flex">
                        {" "}
                        <div
                          className={`form_group ${
                            touched.amount && errors.amount ? "error" : ""
                          }`}
                        >
                          <Field
                            type="number"
                            id="amount"
                            name="amount"
                            placeholder="Amount to deposit"
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
                              Proceeding...
                            </span>
                          ) : (
                            "Proceed"
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

export default CardFundMenu;
