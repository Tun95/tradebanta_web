import { useState } from "react";
import "./styles.scss";
import ActiveTrades from "./tabs/ActiveTrades";
import CloseTrades from "./tabs/CloseTrades";
import TradeFilter from "./TradeFilter";

function TabPanel() {
  //TOOGLE MODE
  const [activeTypeTab, setActiveTypeTab] = useState("active_trade");
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
                activeTypeTab === "active_trade" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("active_trade")}
            >
              <small>Active Trades</small>
            </button>
            <button
              className={`main_btn l_flex ${
                activeTypeTab === "close_trade" ? "active" : ""
              }`}
              onClick={() => toggleTypeTab("close_trade")}
            >
              <small>Closed Trades</small>
            </button>
          </div>
        </div>
        <div className="trade_filter_box">
          <TradeFilter />
        </div>
        {/* Tab Content */}
        <div className="tabs">
          {activeTypeTab === "active_trade" && (
            <div className="tab_box">
              <ActiveTrades />
            </div>
          )}
          {activeTypeTab === "close_trade" && (
            <div className="tab_box">
              <CloseTrades />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabPanel;
