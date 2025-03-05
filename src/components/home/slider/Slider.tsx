import "./styles.scss";
import banner from "../../../assets/home/banner.png";
import Slider from "react-slick";
import SliderCards from "./SliderCards";
import { useAppContext } from "../../../utilities/utils/Utils";

type SlideItem = {
  name: string;
  img: string;
};

const list: SlideItem[] = [
  {
    name: "slide one",
    img: banner,
  },
  {
    name: "slide two",
    img: banner,
  },
  {
    name: "slide three",
    img: banner,
  },
];

function SliderComponent() {
  const { state } = useAppContext();
  const { theme } = state;
  //=============
  // REACT SLICK
  //=============
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <div
      className={`slider_component ${
        theme === "dark" ? "slider_component_dark" : ""
      }`}
    >
      <div className="content">
        <div className="slider">
          <Slider {...settings} className="slick_slider">
            {list?.map((item, index) => (
              <SliderCards item={item} index={index} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;
