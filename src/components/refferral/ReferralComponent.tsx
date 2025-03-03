import "./styles.scss";
// import pr from "../../assets/icons/pr.png";
import userIcon from "../../assets/icons/user.png";

function ReferralComponent() {
  return (
    <div className="referral_component">
      <div className="content light_shadow">
        {/* <div className="not_found_space l_flex">
          <div className="img">
            <img src={pr} alt="no_predictions" className="white_image" />
          </div>
          <div className="text">
            <small>
              <p>
                You haven't referred anyone yet. Share your referral code to
                start earning rewards!
              </p>
            </small>
          </div>
        </div> */}
        <div className="widgets_table">
          <div className="widgets ">
            <div className="leader_table">
              <ul className="list">
                <li className="list_item light_shadow c_flex">
                  <div className="left a_flex">
                    <div className="top l_flex">
                      <div className="icon_img">
                        <img src={userIcon} alt="user_icon" />
                      </div>
                    </div>
                    <div className="username_pred">
                      <div className="username">
                        <h4>m_johnson</h4>
                      </div>
                      <div className="pred">
                        <small>Joined • Jan. 2024</small>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="username_pred a_flex">
                      <div className="active">
                        <h4>Active</h4>
                      </div>
                      <div className="pred">
                        <small>Status</small>
                      </div>
                    </div>
                  </div>
                </li>{" "}
                <li className="list_item light_shadow c_flex">
                  <div className="left a_flex">
                    <div className="top l_flex">
                      <div className="icon_img">
                        <img src={userIcon} alt="user_icon" />
                      </div>
                    </div>
                    <div className="username_pred">
                      <div className="username">
                        <h4>m_johnson</h4>
                      </div>
                      <div className="pred">
                        <small>Joined • Jan. 2024</small>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="username_pred a_flex">
                      <div className="active">
                        <h4>Active</h4>
                      </div>
                      <div className="pred">
                        <small>Status</small>
                      </div>
                    </div>
                  </div>
                </li>{" "}
                <li className="list_item light_shadow c_flex">
                  <div className="left a_flex">
                    <div className="top l_flex">
                      <div className="icon_img">
                        <img src={userIcon} alt="user_icon" />
                      </div>
                    </div>
                    <div className="username_pred">
                      <div className="username">
                        <h4>m_johnson</h4>
                      </div>
                      <div className="pred">
                        <small>Joined • Jan. 2024</small>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="username_pred a_flex">
                      <div className="in_active">
                        <h4>Inactive</h4>
                      </div>
                      <div className="pred">
                        <small>Status</small>
                      </div>
                    </div>
                  </div>
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferralComponent;
