import { Helmet } from "react-helmet-async";
import NavBar from "../../../common/navbar/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../../../common/footer/Footer";
import LeaderboardDetails from "../../../components/leaderboard/leaderboard details/LeaderboardDetails";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./styles.scss";
import Referral from "../../../components/leaderboard/leaderboard details/Referral";
import TabPanel from "../../../components/leaderboard/leaderboard details/TabPanel";

function LeaderboardDetailScreen() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Leaderboard :: </title>
      </Helmet>
      <NavBar />
      <div className="home_screen leader_details_screen ">
        <div className="container">
          <div className="leader_details_header f_flex">
            <div className="icon_circle l_flex" onClick={() => navigate(-1)}>
              <KeyboardBackspaceIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="main_style_screen">
          <div className="container ">
            <div className="home_content f_flex">
              <div className="left_boxes">
                <LeaderboardDetails />
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

export default LeaderboardDetailScreen;
