import { Switch } from "antd";

function Notification() {
  return (
    <div className="notification_component account_tab_component mt">
      <div className="content light_shadow">
        <div className="header">
          <div className="head">
            <h4>Notification Settings</h4>
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
                <h4>Email Notifications</h4>
              </div>
              <div className="text">
                <small>Receive notifications via email</small>
              </div>
            </div>
            <div className="right">
              <Switch />
            </div>
          </div>
          <div className="list_items light_shadow c_flex">
            <div className="left">
              <div className="head">
                <h4>Push Notifications</h4>
              </div>
              <div className="text">
                <small>Receive notifications on your device</small>
              </div>
            </div>
            <div className="right">
              <Switch />
            </div>
          </div>
          <div className="list_items light_shadow c_flex">
            <div className="left">
              <div className="head">
                <h4>SMS Notifications</h4>
              </div>
              <div className="text">
                <small>Receive notifications via SMS</small>
              </div>
            </div>
            <div className="right">
              <Switch />
            </div>
          </div>
          <div className="btn">
            <button className="main_btn">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
