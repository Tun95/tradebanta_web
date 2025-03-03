import "../styles.scss";
import FilterListIcon from "@mui/icons-material/FilterList";
import userIcon from "../../../../assets/icons/user.png";
import { formatNumberWithCommas } from "../../../../utilities/utils/Utils";
import { FluentArrowSort20Filled } from "../../../../common/icons/Icons";

function RecentTrades() {
  return (
    <div className="recent_trades">
      <div className="content">
        <div className="recent_trade_head a_flex">
          {" "}
          <div className="form_box a_flex">
            <div className="form_group form_select a_flex">
              <FilterListIcon className="icon" />
              <select name="amount" id="amount">
                <option value="min_amount">Min Amount</option>
                <option value="random2">Random Option 2</option>
                <option value="random3">Random Option 3</option>
                <option value="random4">Random Option 4</option>
              </select>
            </div>
            <div className="form_group form_select a_flex">
              <FluentArrowSort20Filled className="icon" />
              <select name="trades" id="trades">
                <option value="all">All Trades</option>
                <option value="random2">Random Option 2</option>
                <option value="random3">Random Option 3</option>
                <option value="random4">Random Option 4</option>
              </select>
            </div>
          </div>{" "}
        </div>
        <div className="trades_box light_shadow">
          <ul className="list">
            <li className="list_items c_flex">
              <div className="left a_flex">
                <div className="user_icon">
                  <img src={userIcon} alt="user_icon" />
                </div>
                <div className="username_time">
                  <div className="username">
                    <h5>hey_olivia</h5>
                  </div>{" "}
                  <div className="time">
                    <small>Posted • 8 min ago</small>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="amount">
                  <h5>N{formatNumberWithCommas(500000)}</h5>
                </div>
                <div className="prediction">
                  <small>
                    Prediction • <span className="green">Yes</span>
                    {/* <span className="red">No</span> */}
                  </small>
                </div>
              </div>
            </li>{" "}
            <li className="list_items c_flex">
              <div className="left f_flex">
                <div className="user_icon">
                  <img src={userIcon} alt="user_icon" />
                </div>
                <div className="username_time">
                  <div className="username">
                    <h5>hey_olivia</h5>
                  </div>{" "}
                  <div className="time">
                    <small>Posted • 8 min ago</small>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="amount">
                  <h5>N{formatNumberWithCommas(500000)}</h5>
                </div>
                <div className="prediction">
                  <small>
                    Prediction • <span className="red">No</span>
                  </small>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecentTrades;
