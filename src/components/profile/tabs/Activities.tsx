import { formatNumberWithCommas } from "../../../utilities/utils/Utils";

function Activities() {
  return (
    <div className="activities_comp light_shadow">
      <div className="content">
        <div className="head_text">
          <h4>Profile Achievements</h4>
        </div>
        <ul className="list">
          <li className="list_items c_flex">
            <div className="left a_flex">
              <div className="user_icon"></div>
              <div className="username_time">
                <div className="username">
                  <h5>Champions League Final</h5>
                </div>{" "}
                <div className="time">
                  <small>Traded • 8 min ago</small>
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
              <div className="user_icon"></div>
              <div className="username_time">
                <div className="username">
                  <h5>Presidential Election</h5>
                </div>{" "}
                <div className="time">
                  <small>Traded • 8 min ago</small>
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
  );
}

export default Activities;
