import { useState } from "react";
import "./styles.scss";
import Comment from "./tabs/Comment";
import RecentTrades from "./tabs/RecentTrades";
import RulesTab from "./tabs/Rules";

function TabPanel() {
  //TOOGLE MODE
  const [activeTypeTab, setActiveTypeTab] = useState("comment");
  // Toggle between "all market" and "comboblast"
  const toggleTypeTab = (tab: string) => {
    setActiveTypeTab(tab);
  };
  return (
    <div className="tab_panel">
      <div className="content">
        <div className="toggle_btn">
          <div className="btn l_flex">
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "comment" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("comment")}
            >
              <small>Comment</small>
            </button>
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "recent_trades" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("recent_trades")}
            >
              <small>Recent Trades</small>
            </button>
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "rules" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("rules")}
            >
              <small>Rules</small>
            </button>
          </div>
        </div>
        {/* Tab Content */}
        <div className="tabs">
          {activeTypeTab === "comment" && (
            <div className="tab_box">
              <Comment />
            </div>
          )}
          {activeTypeTab === "recent_trades" && (
            <div className="tab_box">
              <RecentTrades />
            </div>
          )}
          {activeTypeTab === "rules" && (
            <div className="tab_box">
              <RulesTab />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabPanel;
