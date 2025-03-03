import "./styles.scss";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import userIcon from "../../../assets/icons/user.png";
import ngimg from "../../../assets/icons/ng.png";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useAppContext } from "../../../utilities/utils/Utils";

function LeaderboardDetails() {
  const { state } = useAppContext();
  const { theme } = state;

  return (
    <div
      className={`leader__deatils ${
        theme === "dark" ? "leader__deatils_dark" : ""
      }`}
    >
      <div className="content">
        <div className="top_box light_shadow a_flex">
          <div className="img_icon">
            <img src={userIcon} alt="user_icon" />
          </div>
          <div className="name_country_date">
            <div className="name a_flex">
              <h4>m_johnson</h4>
              <VerifiedIcon className="icon" />
            </div>
            <div className="country_date">
              <small className="btn a_flex">
                <div className="country a_flex">
                  <img src={ngimg} alt="country_flag" />
                  <p>Nigeria</p>
                </div>
                <div className="date a_flex">
                  <CalendarMonthOutlinedIcon className="icon" />
                  <p>Joined: January 2024</p>
                </div>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardDetails;
