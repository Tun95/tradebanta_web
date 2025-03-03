import "./styles.scss";
import { Helmet } from "react-helmet-async";
import NavBar from "../../../common/navbar/NavBar";
import Market from "../../../components/market/market list/Market";
import Footer from "../../../common/footer/Footer";
import ComboSelected from "../../../common/combo/combo selected/ComboSelected";

function MarketListScreen() {
  return (
    <>
      <Helmet>
        <title>Market</title>
      </Helmet>
      <NavBar />
      <div className="home_screen market_screen main_style_screen">
        <div className="container ">
          <div className="home_content">
            <Market />
          </div>
        </div>
      </div>
      <ComboSelected />
      <Footer />
    </>
  );
}

export default MarketListScreen;
