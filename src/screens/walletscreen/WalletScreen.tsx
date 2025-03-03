import { Helmet } from "react-helmet-async";
import NavBar from "../../common/navbar/NavBar";
import Wallet from "../../components/wallet/wallet/Wallet";
import Footer from "../../common/footer/Footer";
import "./styles.scss";

function WalletScreen() {
  return (
    <>
      <Helmet>
        <title>Wallet</title>
      </Helmet>
      <NavBar />
      <div className="wallet_screen  main_style_screen">
        <div className="container ">
          <div className="home_content">
            <Wallet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WalletScreen;
