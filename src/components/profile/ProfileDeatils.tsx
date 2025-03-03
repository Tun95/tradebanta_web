import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import userIcon from "../../assets/icons/user.png";
import ngimg from "../../assets/icons/ng.png";
import VerifiedIcon from "@mui/icons-material/Verified";
import MailIcon from "@mui/icons-material/Mail";
import DialpadIcon from "@mui/icons-material/Dialpad";
import EditNoteIcon from "@mui/icons-material/EditNote";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import wc from "../../assets/others/wc.png";
import { useAppContext } from "../../utilities/utils/Utils";
import { useNavigate } from "react-router-dom";

function ProfileDetails() {
  const navigate = useNavigate();

  const { state } = useAppContext();
  const { theme } = state;

  return (
    <div
      className={`leader__deatils profile_deatils ${
        theme === "dark" ? "profile_deatils_dark" : ""
      }`}
    >
      <div className="content">
        <div className="top_box light_shadow a_flex">
          <div className="img_icon">
            <img src={userIcon} alt="user_icon" />
          </div>
          <div className="name_country_date">
            <div className="name a_flex">
              <h4>Emmanuel A. Priestley</h4>
              <VerifiedIcon className="icon" />
            </div>
            <div className="country_date">
              <small className="btn a_flex">
                <div className="country a_flex">
                  <img src={ngimg} alt="country_flag" />
                  <p>Nigeria</p>
                </div>
                <div className="country user_name a_flex">
                  <BadgeOutlinedIcon className="icon" />
                  <p>m_johnson</p>
                  <ContentCopyIcon className="icon" />
                </div>
                <div className="date a_flex">
                  <CalendarMonthOutlinedIcon className="icon" />
                  <p>Joined: January 2024</p>
                </div>
              </small>
            </div>
          </div>
        </div>
        <div className="emai_phone_box c_flex">
          <div className="email_phone c_flex">
            <div className="email a_flex">
              <MailIcon className="icon" />
              <span>emmanuel@example.com</span>
            </div>
            <div className="vh_divider"></div>
            <div className="hr_divider"></div>
            <div className="phone a_flex">
              <DialpadIcon className="icon" />
              <span>+234 123 456 7890</span>
            </div>
          </div>
          <div className="btn">
            <button
              onClick={() => navigate("/account-settings/:id")}
              className="main_btn l_flex"
            >
              <EditNoteIcon className="icon" />
              <span>Edit Profile</span>
            </button>
          </div>
          <div className="bg_img">
            <img src={wc} alt="bg_img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
