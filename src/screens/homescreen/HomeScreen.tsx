import { Helmet } from "react-helmet-async";
import Footer from "../../common/footer/Footer";
import NavBar from "../../common/navbar/NavBar";
import Post from "../../components/home/post/Post";
import SliderComponent from "../../components/home/slider/Slider";
import "./styles.scss";

function HomeScreen() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <NavBar />
      <div className="home_screen main_style_screen">
        <div className="container ">
          <div className="home_content">
            <SliderComponent />
            <Post />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeScreen;
