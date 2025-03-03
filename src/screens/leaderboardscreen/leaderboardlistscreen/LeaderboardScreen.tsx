import { Helmet } from "react-helmet-async";
import NavBar from "../../../common/navbar/NavBar";
import Leaderboard from "../../../components/leaderboard/leaderboard list/Leaderboard";
import Footer from "../../../common/footer/Footer";

function LeaderboardScreen() {
  return (
    <>
      <Helmet>
        <title>Leaderboard</title>
      </Helmet>
      <NavBar />
      <div className="leader_board_screen main_style_screen">
        <div className="container ">
          <div className="home_content">
            <Leaderboard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LeaderboardScreen;
