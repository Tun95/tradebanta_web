import { useState } from "react";
import "./styles.scss";
import ReferralComponent from "./ReferralComponent";
import Referral from "./Referral";

function TabPanel() {
  //TOOGLE MODE
  const [activeTypeTab, setActiveTypeTab] = useState("overview");
  // Toggle between "all market" and "comboblast"
  const toggleTypeTab = (tab: string) => {
    setActiveTypeTab(tab);
  };
  return (
    <div className="tab_panel leader_profile_tab profile_tab_panel">
      <div className="content">
        <div className="toggle_btn">
          <div className="btn l_flex">
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "overview" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("overview")}
            >
              <small>Referred Account</small>
            </button>
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "referral" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("referral")}
            >
              <small>My Link</small>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="tabs">
          {activeTypeTab === "overview" && (
            <div className="tab_box">
              <ReferralComponent />
            </div>
          )}
          {activeTypeTab === "referral" && (
            <div className="tab_box">
              <Referral />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabPanel;
