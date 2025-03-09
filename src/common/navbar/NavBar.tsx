import { Link, useLocation } from "react-router-dom";
import "./styles.scss";
import logo from "../../assets/nav/logo.png";
import { useAppContext } from "../../utilities/utils/Utils";
import userIcon from "../../assets/icons/user.png";
import {
  NotificationDropDownMenu,
  UserDropDownMenu,
  WalletDropDownMenu,
} from "../menus/Menus";
import WalletAddress from "../wallet address/WalletAddress";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Tooltip from "@mui/material/Tooltip";
import { FluentCopy16Filled, MaterialSymbolsTrophy } from "../icons/Icons";

function NavBar() {
  const {
    state,
    handleClickMenu,
    // showDrawer, setMenu
  } = useAppContext();
  const { theme } = state;

  const location = useLocation();

  // Navigate Menu
  // const navigateTo = () => {
  //   setMenu("webthree_email");
  //   showDrawer();
  // };

  //===========
  // Function to check if a link is active
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <>
      <div className={`nav_bar ${theme === "dark" ? "border" : ""}`}>
        <div className="container">
          <div className="content c_flex">
            <div className="left a_flex">
              <div className="logo">
                <div className="img">
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="vh_divider"></div>
              <div className="nav_list">
                <ul className="list a_flex">
                  <li>
                    <Link to="/" className={isActive("/") ? "active" : ""}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/market"
                      className={isActive("/market") ? "active" : ""}
                    >
                      Market
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/wallet"
                      className={isActive("/wallet") ? "active" : ""}
                    >
                      Wallet
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/trades"
                      className={isActive("/trades") ? "active" : ""}
                    >
                      My Trades
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/leaderboard"
                      className={isActive("/leaderboard") ? "active" : ""}
                    >
                      Leaderboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className={isActive("/profile") ? "active" : ""}
                    >
                      Profile
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="right">
              {/* {userInfo ? ( */}
              <div className="user_info a_flex">
                <div className="left a_flex">
                  <WalletDropDownMenu />
                  <span className="notification_nav">
                    <NotificationDropDownMenu />
                  </span>
                </div>
                <div className="vh_divider"></div>
                <div className="right a_flex">
                  <Link to="/leaderboard" className="trophy l_flex">
                    <MaterialSymbolsTrophy className="icon" />
                  </Link>
                  <div className="user_icon_img l_flex">
                    <img src={userIcon} alt="user_default_icon" />
                  </div>
                  <span className="user_drop_menu_wallet a_flex">
                    <span
                      className="name_drop_icon a_flex"
                      onClick={handleClickMenu("User")}
                    >
                      <Tooltip title="Open User Menu">
                        <small className="username_drop_icon a_flex">
                          <h4>Tun951_TJ7</h4>
                          <div className="drop_icon a_flex">
                            <KeyboardArrowDownIcon className="icon" />
                          </div>
                        </small>
                      </Tooltip>
                    </span>
                    <span className="w_address_icon a_flex">
                      <WalletAddress wallet="T9xJ4q38KbZyrUT9xJ4q38KbZyrUT9xJ4q" />
                      <FluentCopy16Filled className="icon" />
                    </span>
                  </span>
                </div>
              </div>

              {/* <div className="btn">
                <button className="main_btn l_flex" onClick={navigateTo}>
                  Login/Register
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* MENUS */}
      <UserDropDownMenu />
    </>
  );
}

export default NavBar;
