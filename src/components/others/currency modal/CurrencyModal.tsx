import Box from "@mui/material/Box";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { currencyValidationSchema } from "../../../schema/Index";
import { useAppContext } from "../../../utilities/utils/Utils";

// Initial values for the form
const initialCurrencyValues = {
  currency: "",
};

// Currency list
const currencyList = [
  { code: "USD", name: "United States Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "NGN", name: "Nigerian Naira" },
];

interface CurrencyModalProps {
  onClose: () => void;
  setMenu: (menu: "currency") => void;
}
function CurrencyModal({}: CurrencyModalProps) {
  const { state } = useAppContext();
  const { theme } = state; 
  //=============
  // HANDLE SUBMIT
  //=============
  const handleChangeCurrency = async () => {};

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
              <h4>Trade Currency</h4>
            </div>
            <div className="text">
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </small>
            </div>
          </div>
          <div className="form_box edit_form_box">
            <Formik
              initialValues={initialCurrencyValues}
              validationSchema={currencyValidationSchema}
              onSubmit={handleChangeCurrency}
            >
              {({ touched, errors, isSubmitting, isValid, dirty }) => (
                <Form>
                  <div className="inner_form">
                    <div className="grid_form">
                      <div
                        className={`form_group ${
                          touched.currency && errors.currency ? "error" : ""
                        }`}
                      >
                        <Field
                          as="select"
                          name="currency"
                          className={`input_box select ${
                            touched.currency && errors.currency
                              ? "error-border"
                              : ""
                          }`}
                        >
                          <option value="" disabled>
                            Select Trade Currency
                          </option>
                          {currencyList.map((currency) => (
                            <option key={currency.code} value={currency.code}>
                              {currency.name} ({currency.code})
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="currency"
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
        </Box>
      </div>
    </div>
  );
}

export default CurrencyModal;
