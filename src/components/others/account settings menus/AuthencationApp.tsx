import { useAppContext } from "../../../utilities/utils/Utils";
import qrCode from "../../../assets/others/qr.png";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import "./styles.scss";

function AuthencationAppMenu() {
  const { state } = useAppContext();
  const { theme } = state;
  return (
    <div className="scan_qr_code_menu  deposit_crypto_menu  modal_menu">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <div className="content">
          <div className={`header  ${theme === "dark" ? "header_dark" : ""}`}>
            <div className="title">
              <h4>Scan QR Code</h4>
            </div>
            <div className="text">
              <small>Scan this QR code in-app to verify a device</small>
            </div>
          </div>
          <div className="deposit_to_menu ">
            <div className="content">
              <div className="qr_code l_flex">
                <div className="img light_shadow l_flex">
                  <img src={qrCode} alt="qr_code" />
                </div>
              </div>
              <div className="crypto_address_icon">
                <div className="label">
                  <small>or enter the code manualy</small>
                </div>
                <div className="crypto_box_icon c_flex">
                  <div className="crypto_box">
                    <p>AGSKEH683484GHDSJDHD</p>
                  </div>
                  <div className="_icon l_flex">
                    <ContentCopyOutlinedIcon className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="btn">
            <button className="main_btn">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthencationAppMenu;
