import "./styles.scss";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import AddIcon from "@mui/icons-material/Add";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import wc from "../../../assets/others/wc.png";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../utilities/utils/Utils";
import { FluentWalletCreditCard16Filled } from "../../../common/icons/Icons";

function WalletMenu() {
  const { state, handleCloseMenu, setMenu, showDrawer } = useAppContext();
  const { theme } = state;

  return (
    <div
      className={`wallet_menu ${theme === "dark" ? "wallet_menu_dark" : ""}`}
    >
      <div className="content">
        <div className="top">
          <div className="primary_bonus c_flex">
            <div className="left s_flex">
              <FiberManualRecordIcon className="icon" />
              <small>
                <p>Amount in USDT</p>
              </small>
              <h3>$20,000</h3>
            </div>{" "}
            <div className="divider"></div>
            <div className="right s_flex">
              <FiberManualRecordIcon className="icon" />
              <small>
                <p>Amount in Naira</p>
              </small>
              <h3>N9,000.45</h3>
            </div>
          </div>
          <div className="background_color"></div>
          <div className="img_bg">
            <img src={wc} alt="wallet_bg" />
          </div>
        </div>
        <div className="bottom">
          <div className="btn c_flex">
            <div className="withdraw">
              <button
                className="main_btn "
                onClick={() => {
                  handleCloseMenu("Wallet")();
                  setMenu("withdraw");
                  showDrawer();
                }}
              >
                <small className="a_flex">
                  <NorthEastIcon className="icon" />
                  <p>Withdraw</p>
                </small>
              </button>
            </div>
            <div className="add_fund">
              <button
                className="main_btn"
                onClick={() => {
                  handleCloseMenu("Wallet")();
                  setMenu("fund_wallet");
                  showDrawer();
                }}
              >
                <small className="a_flex">
                  <AddIcon className="icon" />
                  <p>Add Funds</p>
                </small>
              </button>
            </div>
            <div className="wallet_icon l_flex">
              <Link
                to="/wallet"
                onClick={handleCloseMenu("Wallet")}
                className="l_flex"
              >
                <FluentWalletCreditCard16Filled className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletMenu;
