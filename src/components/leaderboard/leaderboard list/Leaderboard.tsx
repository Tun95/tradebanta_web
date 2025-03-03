import { useState } from "react";
import "./styles.scss";
import userIcon from "../../../assets/icons/user.png";
import { useAppContext } from "../../../utilities/utils/Utils";
import { Link } from "react-router-dom";

function Leaderboard() {
  const { state } = useAppContext();
  const { theme } = state;

  //TOOGLE MODE
  const [activeTypeTab, setActiveTypeTab] = useState("all");
  // Toggle between "all market" and "comboblast"
  const toggleTypeTab = (tab: string) => {
    setActiveTypeTab(tab);
  };

  //TOOGLE MODE
  const [activeFilterTab, setActiveFilterTab] = useState("pool");
  // Toggle between "all market" and "comboblast"
  const toggleFilterTab = (tab: string) => {
    setActiveFilterTab(tab);
  };
  return (
    <div
      className={`leaderborad_comp ${
        theme === "dark" ? "leaderborad_comp_dark" : ""
      }`}
    >
      <div className="content">
        <div className="lead_filter c_flex">
          <div className="left">
            <div className="toggle_btn">
              <div className="btn l_flex">
                <button
                  className={`main_btn l_flex ${
                    activeFilterTab === "pool" ? "active" : ""
                  }`}
                  onClick={() => toggleFilterTab("pool")}
                >
                  <small>Pool</small>
                </button>
                <button
                  className={`main_btn l_flex ${
                    activeFilterTab === "profit" ? "active" : ""
                  }`}
                  onClick={() => toggleFilterTab("profit")}
                >
                  <small>Profit</small>
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="toggle_btn">
              <div className="btn l_flex">
                <button
                  className={`main_btn l_flex ${
                    activeTypeTab === "all" ? "active" : ""
                  }`}
                  onClick={() => toggleTypeTab("all")}
                >
                  <small>All</small>
                </button>
                <button
                  className={`main_btn l_flex ${
                    activeTypeTab === "day" ? "active" : ""
                  }`}
                  onClick={() => toggleTypeTab("day")}
                >
                  <small>Day</small>
                </button>
                <button
                  className={`main_btn l_flex ${
                    activeTypeTab === "week" ? "active" : ""
                  }`}
                  onClick={() => toggleTypeTab("week")}
                >
                  <small>Week</small>
                </button>
                <button
                  className={`main_btn l_flex ${
                    activeTypeTab === "month" ? "active" : ""
                  }`}
                  onClick={() => toggleTypeTab("month")}
                >
                  <small>Month</small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="widgets_table light_shadow">
          <div className="widgets ">
            <Link to={`/leaderboard/:slug`} className="box light_shadow">
              <div className="top l_flex">
                <div className="icon_img">
                  <img src={userIcon} alt="user_icon" />
                  <div className="icon first_icon l_flex">1</div>
                </div>
              </div>
              <div className="bottom c_flex">
                <div className="left">
                  <div className="username_pred">
                    <div className="username">
                      <h4>m_johnson</h4>
                    </div>
                    <div className="pred">
                      <small>Prediction Won • 55</small>
                    </div>
                  </div>
                </div>{" "}
                <div className="right">
                  <div className="username_pred">
                    <div className="username">
                      <h4>N2,100,000</h4>
                    </div>
                    <div className="pred">
                      <small>Total Winning</small>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={`/leaderboard/:slug`} className="box light_shadow">
              <div className="top l_flex">
                <div className="icon_img">
                  <img src={userIcon} alt="user_icon" />
                  <div className="icon second_icon l_flex">2</div>
                </div>
              </div>
              <div className="bottom c_flex">
                <div className="left">
                  <div className="username_pred">
                    <div className="username">
                      <h4>m_johnson</h4>
                    </div>
                    <div className="pred">
                      <small>Prediction Won • 55</small>
                    </div>
                  </div>
                </div>{" "}
                <div className="right">
                  <div className="username_pred">
                    <div className="username">
                      <h4>N2,100,000</h4>
                    </div>
                    <div className="pred">
                      <small>Total Winning</small>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={`/leaderboard/:slug`} className="box light_shadow">
              <div className="top l_flex">
                <div className="icon_img">
                  <img src={userIcon} alt="user_icon" />
                  <div className="icon third_icon l_flex">3</div>
                </div>
              </div>
              <div className="bottom c_flex">
                <div className="left">
                  <div className="username_pred">
                    <div className="username">
                      <h4>m_johnson</h4>
                    </div>
                    <div className="pred">
                      <small>Prediction Won • 55</small>
                    </div>
                  </div>
                </div>{" "}
                <div className="right">
                  <div className="username_pred">
                    <div className="username">
                      <h4>N2,100,000</h4>
                    </div>
                    <div className="pred">
                      <small>Total Winning</small>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="leader_table">
            <ul className="list">
              <Link
                to={`/leaderboard/:slug`}
                className="list_item light_shadow c_flex"
              >
                <div className="left a_flex">
                  <div className="top l_flex">
                    <div className="icon_img">
                      <img src={userIcon} alt="user_icon" />
                      <div className="icon first_icon l_flex">1</div>
                    </div>
                  </div>
                  <div className="username_pred">
                    <div className="username">
                      <h4>m_johnson</h4>
                    </div>
                    <div className="pred">
                      <small>Prediction Won • 55</small>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="username_pred">
                    <div className="username">
                      <h4>N2,100,000</h4>
                    </div>
                    <div className="pred">
                      <small>Total Winning</small>
                    </div>
                  </div>
                </div>
              </Link>{" "}
              <Link
                to={`/leaderboard/:slug`}
                className="list_item light_shadow c_flex"
              >
                <div className="left a_flex">
                  <div className="top l_flex">
                    <div className="icon_img">
                      <img src={userIcon} alt="user_icon" />
                      <div className="icon second_icon l_flex">2</div>
                    </div>
                  </div>
                  <div className="username_pred">
                    <div className="username">
                      <h4>m_johnson</h4>
                    </div>
                    <div className="pred">
                      <small>Prediction Won • 55</small>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="username_pred">
                    <div className="username">
                      <h4>N2,100,000</h4>
                    </div>
                    <div className="pred">
                      <small>Total Winning</small>
                    </div>
                  </div>
                </div>
              </Link>{" "}
              <Link
                to={`/leaderboard/:slug`}
                className="list_item light_shadow c_flex"
              >
                <div className="left a_flex">
                  <div className="top l_flex">
                    <div className="icon_img">
                      <img src={userIcon} alt="user_icon" />
                      <div className="icon third_icon l_flex">3</div>
                    </div>
                  </div>
                  <div className="username_pred">
                    <div className="username">
                      <h4>m_johnson</h4>
                    </div>
                    <div className="pred">
                      <small>Prediction Won • 55</small>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="username_pred">
                    <div className="username">
                      <h4>N2,100,000</h4>
                    </div>
                    <div className="pred">
                      <small>Total Winning</small>
                    </div>
                  </div>
                </div>
              </Link>{" "}
              <Link
                to={`/leaderboard/:slug`}
                className="list_item light_shadow c_flex"
              >
                <div className="left a_flex">
                  <div className="top l_flex">
                    <div className="icon_img">
                      <img src={userIcon} alt="user_icon" />
                      <div className="icon l_flex">4</div>
                    </div>
                  </div>
                  <div className="username_pred">
                    <div className="username">
                      <h4>m_johnson</h4>
                    </div>
                    <div className="pred">
                      <small>Prediction Won • 55</small>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="username_pred">
                    <div className="username">
                      <h4>N2,100,000</h4>
                    </div>
                    <div className="pred">
                      <small>Total Winning</small>
                    </div>
                  </div>
                </div>
              </Link>{" "}
              <Link
                to={`/leaderboard/:slug`}
                className="list_item light_shadow c_flex"
              >
                <div className="left a_flex">
                  <div className="top l_flex">
                    <div className="icon_img">
                      <img src={userIcon} alt="user_icon" />
                      <div className="icon l_flex">5</div>
                    </div>
                  </div>
                  <div className="username_pred">
                    <div className="username">
                      <h4>m_johnson</h4>
                    </div>
                    <div className="pred">
                      <small>Prediction Won • 55</small>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="username_pred">
                    <div className="username">
                      <h4>N2,100,000</h4>
                    </div>
                    <div className="pred">
                      <small>Total Winning</small>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to={`/leaderboard/:slug`}
                className="list_item light_shadow c_flex"
              >
                <div className="left a_flex">
                  <div className="top l_flex">
                    <div className="icon_img">
                      <img src={userIcon} alt="user_icon" />
                      <div className="icon l_flex">5</div>
                    </div>
                  </div>
                  <div className="username_pred">
                    <div className="username">
                      <h4>m_johnson</h4>
                    </div>
                    <div className="pred">
                      <small>Prediction Won • 55</small>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="username_pred">
                    <div className="username">
                      <h4>N2,100,000</h4>
                    </div>
                    <div className="pred">
                      <small>Total Winning</small>
                    </div>
                  </div>
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
