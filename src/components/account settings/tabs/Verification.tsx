import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

function Verification() {
  return (
    <div className="notification_component verification_component account_tab_component mt">
      <div className="content light_shadow">
        <div className="header">
          <div className="head">
            <h4>Account Verification</h4>
          </div>
          <div className="text">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </small>
          </div>
        </div>
        <div className="list">
          <div className="list_items light_shadow c_flex">
            <div className="left">
              <div className="head">
                <h4>Email Verification</h4>
              </div>
              <div className="text">
                <small>Verify your email address</small>
              </div>
            </div>
            <div className="right">
              <small className="verify a_flex">
                <CheckCircleIcon className="icon" />
                <p>Verified</p>
              </small>
            </div>
          </div>
          <div className="list_items light_shadow c_flex">
            <div className="left">
              <div className="head">
                <h4>Phone Verification</h4>
              </div>
              <div className="text">
                <small>Verify your phone number</small>
              </div>
            </div>
            <div className="right">
              <small className="pending a_flex">
                <ErrorIcon className="icon" />
                <p>Pending</p>
              </small>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="content light_shadow mt">
        <div className="header">
          <div className="head">
            <h4>Identity Verification</h4>
          </div>
          <div className="text">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </small>
          </div>
        </div>
        <div className="list">
          <div className="list_items light_shadow c_flex">
            <div className="left">
              <div className="head">
                <h4>Full Name</h4>
              </div>
              <div className="text">
                <small>Emmanuel A. Priesley</small>
              </div>
            </div>
            <div className="right">
              {" "}
              <small className="verify a_flex">
                <CheckCircleIcon className="icon" />
                <p>Verified</p>
              </small>
            </div>
          </div>
          <div className="list_items light_shadow c_flex">
            <div className="left">
              <div className="head">
                <h4>Date of Birth</h4>
              </div>
              <div className="text">
                <small>Nov 16, 1996</small>
              </div>
            </div>
            <div className="right">
              <small className="pending a_flex">
                <ErrorIcon className="icon" />
                <p>Pending</p>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
