import { Helmet } from "react-helmet-async";
import NavBar from "../../common/navbar/NavBar";
import Referral from "../../components/profile/Referral";
import Footer from "../../common/footer/Footer";
import TabPanel from "../../components/profile/TabPanel";

function ProfileScreen() {
  return (
    <>
      <Helmet>
        <title>Profile :: </title>
      </Helmet>
      <NavBar />
      <div className="home_screen leader_details_screen ">
        <div className="main_style_screen">
          <div className="container ">
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

export default ProfileScreen;
