import { useState } from "react";
import { useAppContext } from "../../../utilities/utils/Utils";
import { Formik, ErrorMessage, Form, Field } from "formik";
import {
  withdrawToBankSchema,
  withdrawToCryptoSchema,
} from "../../../schema/Index";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import CircleIcon from "@mui/icons-material/Circle";
//import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export function WithdrawFundMenu() {
  const { state } = useAppContext();
  const { theme } = state;

  //TOOGLE
  const [activeTab, setActiveTab] = useState("bank");

  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="withdraw_funds_menu max_width_modal_big  modal_menu">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <div className="content">
          <div className={`header  ${theme === "dark" ? "header_dark" : ""}`}>
            <div className="title">
              <h4>Withdraw Funds</h4>
            </div>
            <div className="text">
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </small>
            </div>
          </div>
          <div className="toggle_btn">
            <div className="btn l_flex">
              <button
                className={`main_btn l_flex ${
                  activeTab === "bank" ? "active" : ""
                }`}
                onClick={() => toggleTab("bank")}
              >
                <small>Withdraw to bank</small>
              </button>
              <button
                className={`main_btn l_flex ${
                  activeTab === "crypto" ? "active" : ""
                }`}
                onClick={() => toggleTab("crypto")}
              >
                <small>Withdraw to Crypto</small>
              </button>
            </div>
          </div>
          <div className="modal_toggled">
            <div className={`bank ${activeTab === "bank" ? "active" : ""}`}>
              <WithdrawToBank />
            </div>
            <div className={`crypto ${activeTab === "crypto" ? "active" : ""}`}>
              <WithdrawToCrypto />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const initialBankValues = {
  bankAccount: "",
  amount: "",
  currency: "",
  accountPin: "",
};
export function WithdrawToBank() {
  const { showDrawer, setMenu } = useAppContext();
  // Navigate Menu
  const navigateTo = () => {
    setMenu("add_bank_account");
    showDrawer();
  };

  const handleSubmit = async (values: typeof initialBankValues) => {
    console.log("Submitted Values:", values);
    // Add your submission logic here
  };

  return (
    <div className="form_box">
      {/* <div className="none_availaibility">
        <span className="_icon">
          <ErrorOutlineIcon className="icon" />
        </span>
        <small>
          <p>
            Bank withdrawal is unavailable in your country. Please connect your
            crypto wallet to withdraw directly into your cryptocurrency account.
          </p>
        </small>
      </div> */}
      <Formik
        initialValues={initialBankValues}
        validationSchema={withdrawToBankSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, isSubmitting, isValid, dirty }) => (
          <Form>
            <div className="inner_form">
              <div className="grid_form">
                {/* Bank Account */}
                <div
                  className={`form_group ${
                    touched.bankAccount && errors.bankAccount ? "error" : ""
                  }`}
                >
                  <Field
                    type="text"
                    id="bankAccount"
                    name="bankAccount"
                    placeholder="Bank Account"
                    className={`input_box ${
                      touched.bankAccount && errors.bankAccount
                        ? "error-border"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="bankAccount"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form_group_text l_flex">
                  <button className="main_btn" onClick={navigateTo}>
                    <small className="text_link ">
                      <p>ADD A NEW BANK ACCOUNT</p>
                    </small>
                  </button>
                </div>

                {/* Amount */}
                <div className="span_grid f_flex">
                  {" "}
                  <div
                    className={`form_group ${
                      touched.amount && errors.amount ? "error" : ""
                    }`}
                  >
                    <Field
                      type="text"
                      id="amount"
                      name="amount"
                      placeholder="Amount"
                      className={`input_box ${
                        touched.amount && errors.amount ? "error-border" : ""
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

                {/* Account PIN */}
                <div
                  className={`form_group ${
                    touched.accountPin && errors.accountPin ? "error" : ""
                  }`}
                >
                  <Field
                    type="password"
                    id="accountPin"
                    name="accountPin"
                    placeholder="Confirm your account password"
                    className={`input_box ${
                      touched.accountPin && errors.accountPin
                        ? "error-border"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="accountPin"
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
                        Withdrawing...
                      </span>
                    ) : (
                      "Withdraw"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const initialCryptoValues = {
  walletAddress: "",
  amount: "",
  currency: "",
  accountPin: "",
};
export function WithdrawToCrypto() {
  const { showDrawer, setMenu } = useAppContext();
  // Navigate Menu
  const navigateTo = () => {
    setMenu("add_crypto_address");
    showDrawer();
  };

  const handleSubmit = async (values: typeof initialCryptoValues) => {
    console.log("Submitted Values:", values);
    // Add your submission logic here
  };

  return (
    <div className="form_box crypto_form_box_comp">
      <Formik
        initialValues={initialCryptoValues}
        validationSchema={withdrawToCryptoSchema}
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
                      type="text"
                      id="amount"
                      name="amount"
                      placeholder="Amount"
                      className={`input_box ${
                        touched.amount && errors.amount ? "error-border" : ""
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

                <div className="form_group_icon l_flex">
                  <div className="_icon l_flex">
                    <SyncAltIcon className="icon" />
                  </div>
                </div>
                {/* Wallet Address */}
                <div
                  className={`form_group ${
                    touched.walletAddress && errors.walletAddress ? "error" : ""
                  }`}
                >
                  <Field
                    type="text"
                    id="walletAddress"
                    name="walletAddress"
                    placeholder="Wallet Address"
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
                <div className="form_group_text l_flex">
                  <button className="main_btn" onClick={navigateTo}>
                    <small className="text_link ">
                      <p>ADD A NEW ADDRESS</p>
                    </small>
                  </button>
                </div>

                <div className="wallet_list_box">
                  <div className="list">
                    <div className="list_items c_flex">
                      <small className="left a_flex">
                        <div className="_icon l_flex">
                          <CircleIcon className="icon" />
                        </div>
                        <p>Amount</p>
                      </small>
                      <small className="right green">0.00000000 USDT</small>
                    </div>
                    <div className="list_items c_flex">
                      <small className="left a_flex">
                        <div className="_icon l_flex">
                          <CircleIcon className="icon" />
                        </div>
                        <p>Network Fee</p>
                      </small>
                      <small className="right gray">0.00000000 USDT</small>
                    </div>{" "}
                    <div className="list_items c_flex">
                      <small className="left a_flex">
                        <div className="_icon l_flex">
                          <CircleIcon className="icon" />
                        </div>
                        <p>Total Amount</p>
                      </small>
                      <small className="right green">0.00000000 USDT</small>
                    </div>
                  </div>
                </div>
                {/* Account PIN */}
                <div
                  className={`form_group ${
                    touched.accountPin && errors.accountPin ? "error" : ""
                  }`}
                >
                  <Field
                    type="password"
                    id="accountPin"
                    name="accountPin"
                    placeholder="Confirm your account password"
                    className={`input_box ${
                      touched.accountPin && errors.accountPin
                        ? "error-border"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="accountPin"
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
                        Withdrawing...
                      </span>
                    ) : (
                      "Withdraw"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
