import "./styles.scss";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import AddIcon from "@mui/icons-material/Add";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
//import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import wc from "../../../assets/others/wc.png";
import CircleIcon from "@mui/icons-material/Circle";
import { useAppContext } from "../../../utilities/utils/Utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TruncateMarkup from "react-truncate-markup";
import cp from "../../../assets/icons/cp.png";
import TransactionTable from "../transaction/TransactionTable";
//import cpr from "../../../assets/icons/cpr.png";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Select } from "antd";

import cpy from "../../../assets/icons/cpy.png";
import {
  FluentArrowSort20Filled,
  FluentSlideSearch16Regular,
  FluentWalletCreditCard16Filled,
  HugeiconsQrCode,
} from "../../../common/icons/Icons";

const List = [
  {
    date: "10:34 PM • Nov 15, 2024",
    transaction_type: "deposit",
    details: "Funded wallet via bank transfer",
    amount: 10000,
  },
  {
    date: "10:34 PM • Nov 15, 2024",
    transaction_type: "bet placed",
    details: "Funded wallet via bank transfer",
    amount: 10000,
  },
  {
    date: "10:34 PM • Nov 15, 2024",
    transaction_type: "winnings credited",
    details: "Funded wallet via bank transfer",
    amount: 10000,
  },
  {
    date: "10:34 PM • Nov 15, 2024",
    transaction_type: "bonus credited",
    details: "Funded wallet via bank transfer",
    amount: 1000000,
  },
  {
    date: "10:34 PM • Nov 15, 2024",
    transaction_type: "withdrawal",
    details: "Funded wallet via bank transfer",
    amount: 10000,
  },
];

// ANTD SELECT OPTIONS
const options = [
  {
    value: "deposit",
    label: "Deposit",
    icon: <FiberManualRecordIcon className="icon green deposit_icon" />,
  },
  {
    value: "bet placed",
    label: "Bet Placed",
    icon: <FiberManualRecordIcon className="icon purple bet_icon" />,
  },
  {
    value: "winnings credited",
    label: "Winnings Credited",
    icon: <FiberManualRecordIcon className="icon green winning_icon" />,
  },
  {
    value: "bonus credited",
    label: "Bonus Credited",
    icon: <FiberManualRecordIcon className="icon blue bonus_icon" />,
  },
  {
    value: "withdrawal",
    label: "Withdrawal",
    icon: <FiberManualRecordIcon className="icon red withdraw_icon" />,
  },
];

function Wallet() {
  const navigate = useNavigate();

  const { state, setMenu, showDrawer } = useAppContext();
  const { theme } = state;

  //TOOGLE MODE
  const [activeTypeTab, setActiveTypeTab] = useState("wallet");
  // Toggle between "all market" and "comboblast"
  const toggleTypeTab = (tab: string) => {
    setActiveTypeTab(tab);
  };

  //TOOGLE MODE
  const [activeAddressTab, setActiveAddressTab] = useState("usdc");
  // Toggle between "all market" and "comboblast"
  const toggleAddressTab = (tab: string) => {
    setActiveAddressTab(tab);
  };

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return (
    <div
      className={`wallet_page  ${theme === "dark" ? "wallet_page_dark" : ""}`}
    >
      <div className="content">
        <div className="head_btn">
          {" "}
          <div className="toggle_btn">
            <div className="btn l_flex">
              <button
                className={`main_btn l_flex ${
                  activeTypeTab === "wallet" ? "active" : ""
                }`}
                onClick={() => toggleTypeTab("wallet")}
              >
                <small>Wallet</small>
              </button>
              <button
                className={`main_btn l_flex ${
                  activeTypeTab === "virtual_acctount" ? "active" : ""
                }`}
                onClick={() => toggleTypeTab("virtual_acctount")}
              >
                <small>Virtual Acct.</small>
              </button>
              <button
                className={`main_btn l_flex ${
                  activeTypeTab === "crypto_wallet" ? "active" : ""
                }`}
                onClick={() => toggleTypeTab("crypto_wallet")}
              >
                <small>Crypto Wallet</small>
              </button>
            </div>
          </div>
        </div>
        <div className="widgets">
          {/* BOXES HERE */}

          <div
            className={`box light_shadow ${
              activeTypeTab === "wallet" ? "visible" : "hidden"
            }`}
          >
            <div className="add_withdraw">
              <div className="top">
                {" "}
                <div className="span_top_bottom">
                  {" "}
                  <div className="top_list">
                    <div className="list">
                      <div className="list_items c_flex">
                        <small className="left a_flex">
                          <div className="_icon l_flex">
                            <CircleIcon className="icon" />
                          </div>
                          <p>Amount in USDT</p>
                        </small>
                        <small className="right">$0.00</small>
                      </div>
                      <div className="list_items c_flex">
                        <small className="left a_flex">
                          <div className="_icon l_flex">
                            <CircleIcon className="icon" />
                          </div>
                          <p>Amount in Naira</p>
                        </small>
                        <small className="right">N0.00</small>
                      </div>
                    </div>
                  </div>
                  <div className="bottom_box c_flex">
                    <div className="text_icon a_flex">
                      <div className="_icon l_flex">
                        <FluentWalletCreditCard16Filled className="icon" />
                      </div>
                      <small className="text">Wallet Bal.</small>
                    </div>
                    <small className="balance">$0.00 (N0.00)</small>
                  </div>
                </div>
                <div className="background_color"></div>
                <div className="img_bg">
                  <img src={wc} alt="wc_bg" />
                </div>
              </div>
              <div className="bottom_btn">
                <div className="btn c_flex">
                  <button
                    onClick={() => {
                      setMenu("withdraw");
                      showDrawer();
                    }}
                    className="main_btn withdraw_btn l_flex"
                  >
                    <small className="a_flex">
                      <NorthEastIcon className="icon" />
                      <p>Withdraw</p>
                    </small>
                  </button>{" "}
                  <button
                    onClick={() => {
                      setMenu("fund_wallet");
                      showDrawer();
                    }}
                    className="main_btn l_flex"
                  >
                    <small className="a_flex">
                      <AddIcon className="icon" />
                      <p>Add Funds</p>
                    </small>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`box light_shadow ${
              activeTypeTab === "virtual_acctount" ? "visible" : "hidden"
            }`}
          >
            <div className="add_virtual_account">
              <div className="top a_flex">
                <div className="_icon l_flex">
                  <AddIcon className="icon" />
                </div>
                <div className="v_name_desc">
                  <div className="name">
                    <h4>Virtual Account</h4>
                  </div>
                  <div className="text">
                    <small>
                      <p>Fund wallet with assigned virtual account</p>
                    </small>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="_icon">
                  <ErrorOutlineOutlinedIcon className="icon" />
                </div>
                <small className="text">
                  <p>
                    Funding your account via a virtual account is unavailable in
                    your country. Please connect your crypto wallet to place
                    predictions using cryptocurrency.
                  </p>
                </small>
              </div>
            </div>
          </div>
          <div
            className={`box light_shadow ${
              activeTypeTab === "crypto_wallet" ? "visible" : "hidden"
            }`}
          >
            <div className="add_virtual_account deposit_crypto">
              <div className="top a_flex">
                <div className="_icon l_flex">
                  <img
                    src={cp}
                    alt="cp_icon"
                    className="img_icon white_image"
                  />
                </div>
                <div className="v_name_desc">
                  <div className="name">
                    <h4>Deposit With Crypto</h4>
                  </div>
                  <div className="text">
                    <small>
                      <p>Lorem ipsum dolor sit amet, consectetur </p>
                    </small>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="toggle_qr_code c_flex">
                  <div className="toggle_btn">
                    <div className="btn l_flex">
                      <button
                        className={`main_btn l_flex ${
                          activeAddressTab === "usdc" ? "active" : ""
                        }`}
                        onClick={() => toggleAddressTab("usdc")}
                      >
                        <small>USDC Address</small>
                      </button>
                      <button
                        className={`main_btn l_flex ${
                          activeAddressTab === "usdt" ? "active" : ""
                        }`}
                        onClick={() => toggleAddressTab("usdt")}
                      >
                        <small>USDT Address</small>
                      </button>
                    </div>
                  </div>{" "}
                  <div
                    onClick={() => {
                      setMenu("deposit_crypto");
                      showDrawer();
                    }}
                    className="qr_code_icon l_flex"
                  >
                    <HugeiconsQrCode className="icon" />
                  </div>
                </div>
                {activeAddressTab === "usdc" && (
                  <div className="wallet_address">
                    <div className="label_link_address c_flex">
                      <div className="label">
                        <small>USDC Wallet Address</small>
                      </div>
                      <span
                        onClick={() => {
                          setMenu("deposit_crypto");
                          showDrawer();
                        }}
                        className="link_add"
                      >
                        <small>See Full Address Details</small>
                      </span>
                    </div>
                    <div className="address_box c_flex">
                      <div className="crypto_address">
                        <TruncateMarkup lines={1}>
                          <p>0x742d35Cc6634C0532925a3b844Bc</p>
                        </TruncateMarkup>
                      </div>
                      <div className="_icon l_flex">
                        <img src={cpy} alt="icon_img" className="white_image" />
                      </div>
                    </div>
                  </div>
                )}
                {activeAddressTab === "usdt" && (
                  <div className="wallet_address">
                    <div className="label_link_address c_flex">
                      <div className="label">
                        <small>USDT Wallet Address</small>
                      </div>
                      <span
                        onClick={() => {
                          setMenu("deposit_crypto");
                          showDrawer();
                        }}
                        className="link_add"
                      >
                        <small>See Full Address Details</small>
                      </span>
                    </div>
                    <div className="address_box c_flex">
                      <div className="crypto_address">
                        <TruncateMarkup lines={1}>
                          <p>0x742d35Cc6634C0532925a3b844Bc</p>
                        </TruncateMarkup>
                      </div>
                      <div className="_icon l_flex">
                        <img src={cpy} alt="icon_img" className="white_image" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <div
            className={`box light_shadow ${
              activeTypeTab === "crypto_wallet" ? "visible" : "hidden"
            }`}
          >
            <div className="verify_account l_flex">
              <div className="_icon l_flex">
                <VerifiedUserOutlinedIcon className="icon" />
              </div>
              <div className="name_text_btn">
                <div className="name">
                  <h4>Verify Account</h4>
                </div>
                <small className="text">
                  <p>
                    Verify your account to view the crypto address for
                    depositing into your account.
                  </p>
                </small>
                <div className="btn">
                  <button
                    onClick={() => {
                      setMenu("verifyKyc");
                      showDrawer();
                    }}
                    className="main_btn"
                  >
                    Verify Now
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div
            className={`box light_shadow ${
              activeTypeTab === "crypto_wallet" ? "visible" : "hidden"
            }`}
          >
            <div className="verify_account l_flex">
              <div className="_icon l_flex">
                <img src={cpr} alt="cp_icon" className="img_icon white_image" />
              </div>
              <div className="name_text_btn">
                <div className="name">
                  <h4>Connect Crypto Account</h4>
                </div>
                <small className="text">
                  <p>Connect your crypto wallet for easy transaction</p>
                </small>
                <div className="btn">
                  <button
                    onClick={() => {
                      setMenu("add_crypto_address");
                      showDrawer();
                    }}
                    className="main_btn"
                  >
                    Connect Now
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="transaction_box">
          <div className="trans_filter_box c_flex">
            <div className="left">
              {" "}
              <form action="" className="form_box">
                <div className="form_group form_input a_flex">
                  <span className="icon a_flex">
                    <FluentSlideSearch16Regular className="icon" />
                  </span>
                  <input type="serach" placeholder="Search for Transaction" />
                </div>
              </form>
            </div>
            <div className="right ">
              <div className="form_group form_select a_flex">
                <FluentArrowSort20Filled className="icon" />
                <Select
                  className="custom-select"
                  placeholder="Sort Transaction"
                  onChange={handleChange}
                  options={options.map((option) => ({
                    value: option.value,
                    label: (
                      <span className="select_span a_flex">
                        <span className="icon"> {option.icon}</span>
                        <span>{option.label}</span>
                      </span>
                    ),
                  }))}
                />
              </div>
            </div>
          </div>
          <div className="transaction_table">
            <TransactionTable List={List} />
          </div>
          <div className="show_more l_flex">
            <div className="btn">
              <button
                className="main_btn"
                onClick={() => navigate("/transaction-history")}
              >
                See Full History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
