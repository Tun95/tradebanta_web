import CircleIcon from "@mui/icons-material/Circle";
import tp from "../../../assets/leaderboard/tp.png";
import ac from "../../../assets/leaderboard/ac.png";
import bg from "../../../assets/leaderboard/bg.png";
import of from "../../../assets/leaderboard/of.png";

import backBg from "../../../assets/leaderboard/back.png";

function Overview() {
  return (
    <div className="leaderboard_overview">
      <div className="content">
        <div className="profile_stat light_shadow">
          <div className="head_text">
            <h4>Profile Statistics</h4>
          </div>
          <div className="boxes a_flex">
            <div className="box ">
              <div className="top l_flex">
                <div className="icon_circle l_flex">
                  <CircleIcon className="icon" />
                </div>
                <div className="text">
                  <p>Total Predictions</p>
                </div>
              </div>
              <div className="dash"></div>
              <div className="bottom">
                <div className="count l_flex">230</div>
                <div className="img">
                  <img src={backBg} alt="bg" />
                </div>
              </div>
            </div>{" "}
            <div className="box">
              <div className="top l_flex">
                <div className="icon_circle l_flex">
                  <CircleIcon className="icon" />
                </div>
                <div className="text">
                  <p>Total Winning</p>
                </div>
              </div>
              <div className="dash"></div>
              <div className="bottom">
                <div className="count l_flex">N300,000</div>
                <div className="img">
                  <img src={backBg} alt="bg" />
                </div>
              </div>
            </div>{" "}
            <div className="box">
              <div className="top l_flex">
                <div className="icon_circle l_flex">
                  <CircleIcon className="icon" />
                </div>
                <div className="text">
                  <p>Win Rate</p>
                </div>
              </div>
              <div className="dash"></div>
              <div className="bottom">
                <div className="count l_flex">45%</div>
                <div className="img">
                  <img src={backBg} alt="bg" />
                </div>
              </div>
            </div>
            <div className="box">
              <div className="top l_flex">
                <div className="icon_circle l_flex">
                  <CircleIcon className="icon" />
                </div>
                <div className="text">
                  <p>Top Category</p>
                </div>
              </div>
              <div className="dash"></div>
              <div className="bottom">
                <div className="count l_flex">Politics</div>
                <div className="img">
                  <img src={backBg} alt="bg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile_achievements light_shadow">
          <div className="head_text">
            <h4>Profile Achievements</h4>
          </div>
          <div className="badges a_flex">
            <div className="badge_img l_flex">
              <div className="img">
                <img src={tp} alt="badge_img" />
              </div>
              <div className="text l_flex">
                <small className="l_flex">
                  <p>Top Predictor</p>
                </small>
              </div>
            </div>
            <div className="badge_img l_flex">
              <div className="img">
                <img src={bg} alt="badge_img" />
              </div>
              <div className="text l_flex">
                <small className="l_flex">
                  <p>Big Winner</p>
                </small>
              </div>
            </div>
            <div className="badge_img l_flex">
              <div className="img">
                <img src={of} alt="badge_img" />
              </div>
              <div className="text l_flex">
                <small className="l_flex">
                  <p>On Fire</p>
                </small>
              </div>
            </div>
            <div className="badge_img l_flex">
              <div className="img">
                <img src={ac} alt="badge_img" />
              </div>
              <div className="text l_flex">
                <small className="l_flex">
                  <p>Accuracy King</p>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
