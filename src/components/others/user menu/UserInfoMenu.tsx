import "./styles.scss";
import userIcon from "../../../assets/icons/user.png";
import { Link } from "react-router-dom";
import { Switch } from "antd";
import { useAppContext } from "../../../utilities/utils/Utils";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import {
  FluentAlert16Regular,
  HugeiconsCrown,
  HugeiconsInvoice01,
  HugeiconsLicenseThirdParty,
  HugeiconsLogout03,
  HugeiconsMessageQuestion,
  HugeiconsUserIdVerification,
} from "../../../common/icons/Icons";

function UserInfoMenu() {
  const {
    state,
    dispatch: ctxDispatch,
    toggleTheme,
    handleClickMenu,
    handleCloseMenu,
  } = useAppContext();
  const { theme } = state;

  //========
  // SIGN OUT
  //========
  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };
  return (
    <>
      {" "}
      <div
        className={`menu_content global_user_menu ${
          theme === "dark" ? "global_user_menu_dark" : ""
        }`}
      >
        <div className="user_menu_head a_flex">
          {" "}
          <div className="user_icon_img l_flex">
            <img src={userIcon} alt="user_default_icon" />
          </div>
          <div className="name_id">
            <div className="name">
              <h5>Akande J. Tunji</h5>
            </div>
            <div className="id">
              <small>Account ID: 536TYUH68970</small>
            </div>
          </div>
        </div>
        <div className="hr_divider"></div>
        <ul className="list">
          <li>
            <Link
              onClick={handleCloseMenu("User")}
              to="/account-settings/:id"
              className="a_flex"
            >
              <span className="icon a_flex">
                <HugeiconsLicenseThirdParty />
              </span>
              <span className="text">Account Settings</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={handleCloseMenu("User")}
              to="/trades"
              className="a_flex"
            >
              <span className="icon a_flex">
                <HugeiconsInvoice01 />
              </span>
              <span className="text">Trades</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={handleCloseMenu("User")}
              to="/referrals"
              className="a_flex"
            >
              <span className="icon a_flex">
                <HugeiconsCrown />
              </span>
              <span className="text">Referrals</span>
            </Link>
          </li>{" "}
          <li>
            <Link
              onClick={handleCloseMenu("User")}
              to="/support"
              className="a_flex"
            >
              <span className="icon a_flex">
                <HugeiconsMessageQuestion />{" "}
              </span>
              <span className="text">Help & Support</span>
            </Link>
          </li>
        </ul>
        <div className="hr_divider"></div>
        {/* THEME SWITCH */}
        <div className="menu_item dark_mode c_flex" onClick={toggleTheme}>
          <span className="list_item">
            {state.theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
          <span
            onClick={(event) => event.stopPropagation()} // Prevent parent onClick
          >
            <Switch
              size="small"
              checked={state.theme === "dark"}
              className="switch"
              onChange={toggleTheme}
            />
          </span>
        </div>
        <div className="hr_divider"></div>
        <ul className="list log_out">
          <li>
            <Link onClick={signoutHandler} to="" className="a_flex">
              <span className="icon a_flex">
                <HugeiconsLogout03 />
              </span>
              <span className="text red">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`user_menu_drawer ${
          theme === "dark" ? "user_menu_drawer" : ""
        }`}
      >
        <div className="user_menu_head a_flex">
          {" "}
          <div className="user_icon_img l_flex">
            <img src={userIcon} alt="user_default_icon" />
          </div>
          <div className="name_id">
            <div className="name">
              <h4>Akande J. Tunji</h4>
            </div>
            <div className="id">
              <small>Account ID: 536TYUH68970</small>
            </div>
          </div>
        </div>
        <ul className="list">
          <li>
            <Link
              onClick={handleCloseMenu("User")}
              to="/profile"
              className="c_flex"
            >
              <span className="drawer_details a_flex">
                <span className="icon a_flex">
                  <HugeiconsUserIdVerification />
                </span>
                <span className="text">Profile Details</span>
              </span>
              <KeyboardArrowRightIcon className="icon" />
            </Link>
          </li>
          <li>
            <Link
              onClick={handleCloseMenu("User")}
              to="/account-settings/:id"
              className="c_flex"
            >
              <span className="drawer_details a_flex">
                <span className="icon a_flex">
                  <HugeiconsLicenseThirdParty />
                </span>
                <span className="text">Account Settings</span>
              </span>
              <KeyboardArrowRightIcon className="icon" />
            </Link>
          </li>{" "}
          <li>
            <span
              onClick={handleClickMenu("Notification")}
              className="link c_flex"
            >
              <span className="drawer_details a_flex">
                <span className="icon a_flex">
                  <FluentAlert16Regular className="noti_icon" />
                </span>
                <span className="text">Notifications</span>
              </span>
              <KeyboardArrowRightIcon className="icon" />
            </span>
          </li>
          <li>
            <Link
              onClick={handleCloseMenu("User")}
              to="/trades"
              className="c_flex"
            >
              <span className="drawer_details a_flex">
                <span className="icon a_flex">
                  <HugeiconsInvoice01 />
                </span>
                <span className="text">Trades</span>
              </span>
              <KeyboardArrowRightIcon className="icon" />
            </Link>
          </li>
          <li>
            <Link
              onClick={handleCloseMenu("User")}
              to="/referrals"
              className="c_flex"
            >
              <span className="drawer_details a_flex">
                <span className="icon a_flex">
                  <HugeiconsCrown />
                </span>
                <span className="text">Referrals</span>
              </span>
              <KeyboardArrowRightIcon className="icon" />
            </Link>
          </li>{" "}
          <li>
            <Link
              onClick={handleCloseMenu("User")}
              to="/support"
              className="c_flex"
            >
              <span className="drawer_details a_flex">
                <span className="icon a_flex">
                  <HugeiconsMessageQuestion />
                </span>
                <span className="text">Help & Support</span>
              </span>
              <KeyboardArrowRightIcon className="icon" />
            </Link>
          </li>{" "}
          <li>
            <span onClick={toggleTheme} className="link c_flex">
              <span className="drawer_details a_flex">
                <span className="icon a_flex">
                  {state.theme === "dark" ? (
                    <WbSunnyOutlinedIcon className="icon" />
                  ) : (
                    <BedtimeOutlinedIcon className="icon" />
                  )}
                </span>
                <span className="text">
                  {state.theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              </span>
              <span
                onClick={(event) => event.stopPropagation()} // Prevent parent onClick
              >
                <Switch
                  size="small"
                  checked={state.theme === "dark"}
                  className="switch"
                  onChange={toggleTheme}
                />
              </span>
            </span>
          </li>
          <li>
            <Link onClick={signoutHandler} to="" className="logout_btn c_flex">
              <span className="drawer_details a_flex">
                <span className="icon a_flex">
                  <HugeiconsLogout03 className="red" />
                </span>
                <span className="text red">Logout</span>
              </span>
              <KeyboardArrowRightIcon className="icon" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default UserInfoMenu;
