import { Helmet } from "react-helmet-async";
import NavBar from "../../common/navbar/NavBar";
import Footer from "../../common/footer/Footer";
import TransactionHistory from "../../components/wallet/transaction/TransactionHistory";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

function TransactionScreen() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Transactions</title>
      </Helmet>
      <NavBar />
      <div className="tarnsaction_screen  leader_details_screen">
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
              <TransactionHistory />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TransactionScreen;
