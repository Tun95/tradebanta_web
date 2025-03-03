import { Helmet } from "react-helmet-async";
import NavBar from "../../../common/navbar/NavBar";
import Footer from "../../../common/footer/Footer";
import "./styles.scss";
import Details from "../../../components/market/market details/Details";
import PredictionProgress from "../../../components/market/market details/PredictionProgress";
import TabPanel from "../../../components/market/market details/TabPanel";
import { useAppContext } from "../../../utilities/utils/Utils";
import YesAndNoBtn from "../../../components/market/market details/YesAndNoBtn";
import ComboBlast from "../../../components/market/market list/ComboBlast";
import SelectOptions from "../../../components/market/market details/SelectOptions";

function MarketDetailScreen() {
  const { state } = useAppContext();
  const { theme } = state;

  return (
    <>
      <Helmet>
        <title>Market :: </title>
      </Helmet>
      <NavBar />
      <div className="market_details_screen main_style_screen">
        <div className="container ">
          <div className="market_content f_flex">
            <div className="left_boxes">
              <Details />

              <PredictionProgress />

              <TabPanel />
            </div>
            <div className="right_boxes">
              <div className="pred_box">
                {/* <SelectOptions /> */}
                <YesAndNoBtn />
                <ComboBlast />
              </div>

              <div
                className={`combo_mobile_btn ${
                  theme === "dark" ? "combo_mobile_btn_dark" : ""
                }`}
              >
                <div className="btn selection_drawer ">
                  <SelectOptions />
                  {/* <YesAndNoBtn /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MarketDetailScreen;
