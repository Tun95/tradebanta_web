import { FC, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  formatNairaNoDecimalShort,
  // formatNumberNoDecimalShort,
  useAppContext,
} from "../../../utilities/utils/Utils";
import { Link } from "react-router-dom";
import { pageURL } from "../../../base url/BaseUrl";
import { RWebShare } from "react-web-share";
import { useSideDrawerMenuContext } from "../../../context/SideDrawerContext";
import { Checkbox as MyCheckbox } from "@mui/material";
import TruncateMarkup from "react-truncate-markup";
import {
  HugeiconsBookmark02,
  // HugeiconsBubbleChat,
  HugeiconsInvoice,
  HugeiconsShare03,
} from "../../../common/icons/Icons";
import { Event } from "../../../types/events/list/eventlist"; // Import the correct Event type
import { BpCheckedIcon, BpIcon } from "../../../utilities/component/component";

interface MarketCardsProps {
  item: Event; // Use the correct Event type
  index: number;
  activeTab: string;
  toggleTab: (tab: string) => void;
}

const MarketCards: FC<MarketCardsProps> = ({ item, index, toggleTab }) => {
  const { onClose } = useSideDrawerMenuContext();
  const { state } = useAppContext();
  const { theme } = state;

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleOptionsList = () => {
    setIsOptionsOpen((prevState) => !prevState);
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption((prev) => (prev === optionId ? null : optionId));
  };

  // Calculate time remaining until the event ends
  const calculateTimeRemaining = (endTime: string) => {
    const endDate = new Date(endTime);
    const now = new Date();
    const diff = endDate.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    return `${hours} hours`;
  };

  return (
    <div
      className={`post_cards ${theme === "dark" ? "post_cards_dark" : ""}`}
      key={index}
    >
      <div className="post_card_content">
        <div className="avater_catgory_end_in a_flex">
          <div className="avater bg_item">
            <img src={item.eventImage} alt={item.title} />
          </div>
          <div className="category">
            <small className="bg_item">{item.category.name}</small>
          </div>
          <div className="end_in">
            <small className="bg_item">
              Ends in {calculateTimeRemaining(item.endTime)}
            </small>
          </div>
        </div>
        <div className="title">
          <TruncateMarkup lines={2}>
            <h4>
              <Link to={`/market/${item.id}`} onClick={onClose}>
                {item.title}
              </Link>
            </h4>
          </TruncateMarkup>
        </div>
        <div className="action_section c_flex">
          <small className="left a_flex">
            <div className="pool a_flex">
              <HugeiconsInvoice className="icon" />
              <p>Pool: {formatNairaNoDecimalShort(parseFloat(item.pool))}</p>
            </div>
            {/* Comments are not present in the data */}
            {/* <div className="comment a_flex">
              <HugeiconsBubbleChat className="icon" />
              <p>{formatNumberNoDecimalShort(item.comments)}</p>
            </div> */}
          </small>
          <small className="right a_flex">
            <div className="save a_flex">
              <HugeiconsBookmark02 className="icon" />
              <p>save</p>
            </div>
            <div className="re_share">
              <RWebShare
                data={{
                  text: `${item.title}`,
                  url: `${pageURL}/market/${item.id}`,
                  title: item.title,
                }}
              >
                <div className="share a_flex">
                  <HugeiconsShare03 className="icon" />
                  <p>share</p>
                </div>
              </RWebShare>
            </div>
          </small>
        </div>

        {/* Conditional Rendering */}
        <div className="conditional_redering">
          <div className="vote_btn">
            {item.type === "multichoice" ? (
              <div className="select_btn">
                <button
                  className={isOptionsOpen ? "main_btn p_bottom" : "main_btn "}
                  onClick={toggleOptionsList}
                >
                  <small className="c_flex">
                    <p>Select Prediction</p>
                    {isOptionsOpen ? (
                      <KeyboardArrowUpIcon className="icon" />
                    ) : (
                      <KeyboardArrowDownIcon className="icon" />
                    )}
                  </small>
                </button>
                {isOptionsOpen && (
                  <div className="candidates">
                    <ul className="list">
                      {item.options.map((option) => (
                        <li
                          key={option.id}
                          className="c_flex"
                          onClick={() => handleOptionSelect(option.id)}
                        >
                          <label htmlFor={option.id} className="c_flex">
                            <div className="left a_flex">
                              {option.imageUrl && (
                                <div className="icon">
                                  <img
                                    src={option.imageUrl}
                                    alt={option.name}
                                  />
                                </div>
                              )}
                              <small>{option.name}</small>
                            </div>
                            <div className="right a_flex">
                              {option.bonusOdds && (
                                <small>
                                  <p className="bonusOdds">
                                    {option.bonusOdds}x
                                  </p>
                                </small>
                              )}
                              <span
                                onClick={(event) => event.stopPropagation()}
                              >
                                <MyCheckbox
                                  sx={{
                                    padding: 0,
                                    marginRight: 1,
                                    "&:hover": { bgcolor: "transparent" },
                                  }}
                                  disableRipple
                                  color="default"
                                  checkedIcon={<BpCheckedIcon />} // Checked state
                                  icon={<BpIcon />}
                                  checked={selectedOption === option.id}
                                  onChange={() => handleOptionSelect(option.id)}
                                />
                              </span>
                            </div>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="yes_no_btn c_flex">
                <div className="yes_btn">
                  <button
                    className="main_btn l_flex"
                    onClick={() => toggleTab("combo_blast")}
                  >
                    Yes {/* Percentage not available in the data */}
                  </button>
                </div>
                <div className="no_btn">
                  <button
                    className="main_btn l_flex"
                    onClick={() => toggleTab("combo_blast")}
                  >
                    No {/* Percentage not available in the data */}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCards;
