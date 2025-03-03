import { FC, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  formatNairaNoDecimalShort,
  formatNumberNoDecimalShort,
  useAppContext,
} from "../../../utilities/utils/Utils";
import { Link } from "react-router-dom";
import { pageURL } from "../../../base url/BaseUrl";
import { RWebShare } from "react-web-share";

import { useSideDrawerMenuContext } from "../../../context/SideDrawerContext";
import { styled } from "@mui/system";
import { Checkbox as MyCheckbox } from "@mui/material";
import TruncateMarkup from "react-truncate-markup";
import { HugeiconsBookmark02, HugeiconsBubbleChat, HugeiconsInvoice, HugeiconsShare03 } from "../../../common/icons/Icons";

// Styled components for the custom checkbox
const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 20,
  width: 25,
  height: 25,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent", // Transparent by default
  border: "2px solid #ccc", // Optional border for better visibility
  transition: "background-color 0.3s ease", // Smooth transition
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(73, 189, 19, 0.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: "rgba(73, 189, 19, 0.5)",
  },
  "input:disabled ~ &": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)(() => ({
  backgroundColor: "var(--color-green, #0e9f6e)", // Checked background color
  border: "2px solid var(--color-green, #0e9f6e)", // Optional border
  "&:before": {
    display: "block",
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
}));

type Candidate = {
  id: string;
  name: string;
  image: string;
  percentage: number;
};

type PostItem = {
  id: number;
  title: string;
  image: string;
  slug: string;
  endsIn: string;
  category: string;
  pool: number;
  comments: number;
  type: "election" | "event";
  yesPercentage?: number;
  noPercentage?: number;
  candidates?: Candidate[];
};

interface MarketCardsProps {
  item: PostItem;
  index: number;
  activeTab: string;
  toggleTab: (tab: string) => void;
}

const MarketCards: FC<MarketCardsProps> = ({ item, index, toggleTab }) => {
  const { onClose } = useSideDrawerMenuContext();
  const { state } = useAppContext();
  const { theme } = state;

  const [isCandidatesOpen, setIsCandidatesOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(
    null
  );

  const toggleCandidatesList = () => {
    setIsCandidatesOpen((prevState) => !prevState);
  };

  const handleCandidateSelect = (candidateId: string) => {
    setSelectedCandidate((prev) => (prev === candidateId ? null : candidateId));
  };

  return (
    <div
      className={`post_cards ${theme === "dark" ? "post_cards_dark" : ""}`}
      key={index}
    >
      <div className="post_card_content">
        <div className="avater_catgory_end_in a_flex">
          <div className="avater bg_item">
            <img src={item?.image} alt="" />
          </div>
          <div className="category">
            <small className="bg_item">{item.category}</small>
          </div>
          <div className="end_in">
            <small className="bg_item">Ends in 11 hours</small>
          </div>
        </div>
        <div className="title">
          <TruncateMarkup lines={2}>
            <h4>
              <Link to={`/market/${item.slug}`} onClick={onClose}>
                {item.title}
              </Link>
            </h4>
          </TruncateMarkup>
        </div>
        <div className="action_section c_flex">
          <small className="left a_flex">
            <div className="pool a_flex">
              <HugeiconsInvoice className="icon" />
              <p>Pool: {formatNairaNoDecimalShort(item.pool)}</p>
            </div>
            <div className="comment a_flex">
              <HugeiconsBubbleChat className="icon" />
              <p>{formatNumberNoDecimalShort(item.comments)}</p>
            </div>
          </small>
          <small className="right a_flex">
            <div className="save a_flex">
              <HugeiconsBookmark02 className="icon" />
              <p>save</p>
            </div>
            <div className="re_share">
              <RWebShare
                data={{
                  text: `${item?.title}`,
                  url: `${pageURL}/bills/${item?.slug}`,
                  title: item?.title,
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
          {" "}
          <div className="vote_btn">
            {item.type === "election" ? (
              <div className="select_btn">
                <button className="main_btn" onClick={toggleCandidatesList}>
                  <small className="c_flex">
                    <p>Select Prediction</p>
                    {isCandidatesOpen ? (
                      <KeyboardArrowUpIcon className="icon" />
                    ) : (
                      <KeyboardArrowDownIcon className="icon" />
                    )}
                  </small>
                </button>
                {isCandidatesOpen && (
                  <div className="candidates">
                    <ul className="list">
                      {item.candidates?.map((candidate) => (
                        <li
                          key={candidate.id}
                          className="c_flex"
                          onClick={() => handleCandidateSelect(candidate.id)}
                        >
                          <label htmlFor={candidate.id} className="c_flex">
                            <div className="left a_flex">
                              <div className="icon">
                                <img
                                  src={candidate.image}
                                  alt="candidate_img"
                                />
                              </div>
                              <small>{candidate.name}</small>
                            </div>
                            <div className="right a_flex">
                              <small>
                                <p className="percentage">
                                  {candidate.percentage}%
                                </p>
                              </small>
                              <span
                                onClick={(event) => event.stopPropagation()} // Prevent parent onClick
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
                                  icon={<BpIcon />} // Default state
                                  checked={selectedCandidate === candidate.id}
                                  onChange={() =>
                                    handleCandidateSelect(candidate.id)
                                  }
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
                    Yes ({item.yesPercentage}%)
                  </button>
                </div>
                <div className="no_btn">
                  <button
                    className="main_btn l_flex"
                    onClick={() => toggleTab("combo_blast")}
                  >
                    No ({item.noPercentage}%)
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
