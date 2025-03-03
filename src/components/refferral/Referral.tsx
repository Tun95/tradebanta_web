import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ref from "../../assets/leaderboard/ref.png";
import TruncateMarkup from "react-truncate-markup";

function Referral() {
  return (
    <>
      <div className="referral_box">
        <div className="content">
          <div className="img">
            <img src={ref} alt="user_icon" />
          </div>
          <div className="head_text">
            <h4>Referral program</h4>
          </div>
          <div className="text">
            <p>Share your referral code and earn bonuses</p>
          </div>
          <div className="refer_code_box">
            <div className="refer_text">
              <p>Referral Code</p>
            </div>
            <div className="code_box c_flex">
              <div className="code">AAD56F</div>
              <ContentCopyIcon className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="referral_link_box">
        <div className="head_text">
          <small>
            <p>Copy Referral Link</p>
          </small>
        </div>
        <div className="link_box_icon c_flex">
          <div className="link_box">
            <small>
              <TruncateMarkup lines={1}>
                <p>https://www.TradeBanta.com/abc123</p>
              </TruncateMarkup>
            </small>
          </div>
          <div className="_icon l_flex">
            <ContentCopyIcon className="icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Referral;
