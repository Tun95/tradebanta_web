import { FC } from "react";

type SlideItem = {
  name: string;
  img: string;
};

interface SliderCardsProps {
  item: SlideItem;
  index: number;
}
const SliderCards: FC<SliderCardsProps> = ({ item, index }) => {
  return (
    <div className="slider_content">
      <div className="slide_list">
        <div className="list" key={index}>
          <div className="img">
            <img src={item.img} alt={item.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCards;
