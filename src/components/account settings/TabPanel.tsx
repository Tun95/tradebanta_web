import { useState } from "react";
import "./styles.scss";
import Profile from "./tabs/Profile";
import Security from "./tabs/Security";
import Notification from "./tabs/Notification";
import Verification from "./tabs/Verification";
import CryptoAddress from "./tabs/CryptoAddress";
import { useAppContext } from "../../utilities/utils/Utils";
import Payment from "./tabs/Payment";

function TabPanel() {
  const { state } = useAppContext();
  const { theme } = state;

  //TOOGLE MODE
  const [activeTypeTab, setActiveTypeTab] = useState("profile");
  // Toggle between "all market" and "comboblast"
  const toggleTypeTab = (tab: string) => {
    setActiveTypeTab(tab);
  };
  return (
    <div
      className={`tab_panel leader_profile_tab account_settings_tab ${
        theme === "dark" ? "account_settings_tab_dark" : ""
      }`}
    >
      <div className="content">
        <div className="toggle_btn">
          <div className="btn l_flex">
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "profile" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("profile")}
            >
              <small>Profile</small>
            </button>
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "security" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("security")}
            >
              <small>Security</small>
            </button>
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "notifications" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("notifications")}
            >
              <small>Notifications</small>
            </button>{" "}
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "payments" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("payments")}
            >
              <small>Payments</small>
            </button>
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "verification" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("verification")}
            >
              <small>Verification</small>
            </button>{" "}
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "crypto_address" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("crypto_address")}
            >
              <small>Crypto Address</small>
            </button>
          </div>
        </div>
        {/* Tab Content */}
        <div className="tabs">
          {activeTypeTab === "profile" && (
            <div className="tab_box">
              <Profile />
            </div>
          )}
          {activeTypeTab === "security" && (
            <div className="tab_box">
              <Security />
            </div>
          )}
          {activeTypeTab === "notifications" && (
            <div className="tab_box">
              <Notification />
            </div>
          )}

          {activeTypeTab === "payments" && (
            <div className="tab_box">
              <Payment />
            </div>
          )}

          {activeTypeTab === "verification" && (
            <div className="tab_box">
              <Verification />
            </div>
          )}
          {activeTypeTab === "crypto_address" && (
            <div className="tab_box">
              <CryptoAddress />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabPanel;
