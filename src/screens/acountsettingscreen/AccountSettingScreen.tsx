import { Helmet } from "react-helmet-async";
import NavBar from "../../common/navbar/NavBar";
import TabPanel from "../../components/account settings/TabPanel";
import Referral from "../../components/account settings/Referral";
import Footer from "../../common/footer/Footer";
import "./styles.scss";

function AccountSettingScreen() {
  return (
    <>
      <Helmet>
        <title>Account Settings</title>
      </Helmet>
      <NavBar />
      <div className="account_settings_screen leader_details_screen ">
        <div className="main_style_screen">
          <div className="container ">
            <div className="header">
              <div className="head">
                <h4>Account Settings</h4>
              </div>
              <div className="text">
                <small>Manage your account settings and set preferences</small>
              </div>
            </div>
            <div className="home_content f_flex">
              <div className="left_boxes">
                <TabPanel />
              </div>
              <div className="right_boxes">
                <Referral />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AccountSettingScreen;
