import { useState } from "react";
import { useAppContext } from "../../../utilities/utils/Utils";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import qrCode from "../../../assets/others/qr.png";

export function DepositWithCryptoMenu() {
  const { state } = useAppContext();
  const { theme } = state;

  //TOOGLE
  const [activeTab, setActiveTab] = useState("usdc");

  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="deposit_crypto_menu   modal_menu">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <div className="content">
          <div className={`header  ${theme === "dark" ? "header_dark" : ""}`}>
            <div className="title">
              <h4>Deposit With Crypto</h4>
            </div>
            <div className="text">
              <small>
                Send your digital assets to the displayed address or scan the QR
                code to convert and deposit them into your wallet as NGN{" "}
              </small>
            </div>
          </div>
          <div className="toggle_btn">
            <div className="btn l_flex">
              <button
                className={`main_btn l_flex ${
                  activeTab === "usdc" ? "active" : ""
                }`}
                onClick={() => toggleTab("usdc")}
              >
                <small>USDC Address</small>
              </button>
              <button
                className={`main_btn l_flex ${
                  activeTab === "usdt" ? "active" : ""
                }`}
                onClick={() => toggleTab("usdt")}
              >
                <small>USDT Address</small>
              </button>
            </div>
          </div>
          <div className="modal_toggled">
            <div className={`usdc ${activeTab === "usdc" ? "active" : ""}`}>
              <DepositWithUSDC />
            </div>
            <div className={`usdt ${activeTab === "usdt" ? "active" : ""}`}>
              <DepositWithUSDT />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DepositWithUSDC() {
  return (
    <div className="deposit_to_menu ">
      <div className="content">
        <div className="qr_code l_flex">
          <div className="img light_shadow l_flex">
            <img src={qrCode} alt="qr_code" />
          </div>
        </div>
        <div className="crypto_address_icon">
          <div className="label">
            <small>Copy Address Below</small>
          </div>
          <div className="crypto_box_icon c_flex">
            <div className="crypto_box">
              <p>0x742d35Cc6634C0532925a3b844Bc</p>
            </div>
            <div className="_icon l_flex">
              <ContentCopyOutlinedIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="wallet_list_box">
          <div className="list">
            <div className="list_items c_flex">
              <small className="left a_flex">
                <div className="_icon l_flex">
                  <CircleIcon className="icon" />
                </div>
                <p>Minimum Deposit</p>
              </small>
              <small className="right green">0.00000000 USDC</small>
            </div>
            <div className="list_items c_flex">
              <small className="left a_flex">
                <div className="_icon l_flex">
                  <CircleIcon className="icon" />
                </div>
                <p>Expected Arrival</p>
              </small>
              <small className="right gray a_flex">
                <p>10 - 15 min</p>
              </small>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export function DepositWithUSDT() {
  return (
    <div className="deposit_to_menu ">
      <div className="content">
        <div className="qr_code l_flex">
          <div className="img light_shadow l_flex">
            <img src={qrCode} alt="qr_code" />
          </div>
        </div>
        <div className="crypto_address_icon">
          <div className="label">
            <small>Copy Address Below</small>
          </div>
          <div className="crypto_box_icon c_flex">
            <div className="crypto_box">
              <p>0x742d35Cc6634C0532925a3b844Bc</p>
            </div>
            <div className="_icon l_flex">
              <ContentCopyOutlinedIcon className="icon" />
            </div>
          </div>
        </div>{" "}
        <div className="crypto_address_icon">
          <div className="label">
            <small>Network</small>
          </div>
          <div className="crypto_box_icon second_box c_flex">
            <div className="crypto_box">
              <p>Ethereum (ERC20)</p>
            </div>
          </div>
        </div>
        <div className="wallet_list_box">
          <div className="list">
            <div className="list_items c_flex">
              <small className="left a_flex">
                <div className="_icon l_flex">
                  <CircleIcon className="icon" />
                </div>
                <p>Minimum Deposit</p>
              </small>
              <small className="right green">0.00000000 USDT</small>
            </div>
            <div className="list_items c_flex">
              <small className="left a_flex">
                <div className="_icon l_flex">
                  <CircleIcon className="icon" />
                </div>
                <p>Expected Arrival</p>
              </small>
              <small className="right gray a_flex">
                <p>10 - 15 min</p>
              </small>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
