import { Helmet } from "react-helmet-async";
import NavBar from "../../common/navbar/NavBar";
import Footer from "../../common/footer/Footer";
import Bookmark from "../../components/bookmark/Bookmark";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

function BookmarkScreen() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Bookmark</title>
      </Helmet>
      <NavBar />
      <div className="home_screen bookmark_screen">
        <div className="container">
          <div className="bookmark_header f_flex">
            <div className="icon_circle l_flex" onClick={() => navigate(-1)}>
              <KeyboardBackspaceIcon className="icon" />
            </div>
            <div className="head_text">
              <h4>Bookmarks</h4>
              <small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </small>
            </div>
          </div>
        </div>
        <div className="main_style_screen">
          <div className="container ">
            <div className="home_content">
              <Bookmark />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookmarkScreen;
