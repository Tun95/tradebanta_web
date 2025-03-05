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
import { Checkbox as MyCheckbox } from "@mui/material";
import TruncateMarkup from "react-truncate-markup";
import {
  HugeiconsBookmark02,
  HugeiconsBubbleChat,
  HugeiconsInvoice,
  HugeiconsShare03,
} from "../../../common/icons/Icons";
import { BpCheckedIcon, BpIcon } from "../../../utilities/component/component";

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

interface PostCardsProps {
  item: PostItem;
  index: number;
}

const PostCards: FC<PostCardsProps> = ({ item, index }) => {
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
                  <button className="main_btn l_flex">
                    Yes ({item.yesPercentage}%)
                  </button>
                </div>
                <div className="no_btn">
                  <button className="main_btn l_flex">
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

export default PostCards;
