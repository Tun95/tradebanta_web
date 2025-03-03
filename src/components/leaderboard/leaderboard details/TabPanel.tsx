import { useState } from "react";
import "./styles.scss";
import Overview from "./tabs/Overview";
import Activities from "./tabs/Activities";

function TabPanel() {
  //TOOGLE MODE
  const [activeTypeTab, setActiveTypeTab] = useState("overview");
  // Toggle between "all market" and "comboblast"
  const toggleTypeTab = (tab: string) => {
    setActiveTypeTab(tab);
  };
  return (
    <div className="tab_panel leader_profile_tab">
      <div className="content">
        <div className="toggle_btn">
          <div className="btn l_flex">
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "overview" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("overview")}
            >
              <small>Overview</small>
            </button>
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "activities" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("activities")}
            >
              <small>Activitiess</small>
            </button>
          </div>
        </div>
        {/* Tab Content */}
        <div className="tabs">
          {activeTypeTab === "overview" && (
            <div className="tab_box">
              <Overview />
            </div>
          )}
          {activeTypeTab === "activities" && (
            <div className="tab_box">
              <Activities />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabPanel;
