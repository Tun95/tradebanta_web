import { Helmet } from "react-helmet-async";
import NavBar from "../../common/navbar/NavBar";
import Footer from "../../common/footer/Footer";
import "./styles.scss";
import ReferralComponent from "../../components/refferral/ReferralComponent";
import Referral from "../../components/refferral/Referral";
import TabPanel from "../../components/refferral/TabPanel";

function ReferralScreen() {
  return (
    <>
      <Helmet>
        <title>Referrals</title>
      </Helmet>
      <NavBar />
      <div className="account_settings_screen referral_screen leader_details_screen ">
        <div className="main_style_screen">
          <div className="container ">
            <div className="header">
              <div className="head">
                <h4>Your Referrals</h4>
              </div>
              <div className="text">
                <small>
                  Track the friends you've invited and the rewards you've earned
                </small>
              </div>
            </div>
            <div className="ref_tab">
              <TabPanel />
            </div>
            <div className="home_content f_flex">
              <div className="left_boxes">
                <ReferralComponent />
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

export default ReferralScreen;
