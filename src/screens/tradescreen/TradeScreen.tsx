import { Helmet } from "react-helmet-async";
import NavBar from "../../common/navbar/NavBar";
import Footer from "../../common/footer/Footer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import TabPanel from "../../components/trades/TabPanel";
import "./styles.scss";

function TradeScreen() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Trades</title>
      </Helmet>
      <NavBar />
      <div className="home_screen trades_screen leader_details_screen ">
        <div className="container">
          <div className="leader_details_header f_flex">
            <div className="icon_circle l_flex" onClick={() => navigate(-1)}>
              <KeyboardBackspaceIcon className="icon" />
            </div>
          </div>
        </div>
        <div className="main_style_screen">
          <div className="container ">
            <div className="home_content">
              <div className="left_boxes">
                <TabPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TradeScreen;
