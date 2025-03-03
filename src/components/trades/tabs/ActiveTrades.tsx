import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  formatNumberWithCommas,
  useAppContext,
} from "../../../utilities/utils/Utils";
import TruncateMarkup from "react-truncate-markup";
import { useState } from "react";
import { FluentSlideTextSparkle32Regular } from "../../../common/icons/Icons";

const List = [
  {
    title:
      " Will Nigerian Senate pass the 2024 National Budget before January?",
    choice: { label: "yes", value: 80 },
  },
  {
    title:
      " Will Nigerian Senate pass the 2024 National Budget before January?",
    choice: { label: "no", value: 70 },
  },
  {
    title:
      " Will Nigerian Senate pass the 2024 National Budget before January?",
    choice: { label: "no", value: 70 },
  },
  {
    title:
      " Will Nigerian Senate pass the 2024 National Budget before January?",
    choice: { label: "yes", value: 80 },
  },
];

function ActiveTrades() {
  const { state } = useAppContext();
  const { theme } = state;

  // State to track the visibility of children for each parent
  const [visibleChildren, setVisibleChildren] = useState<{
    [key: number]: boolean;
  }>({});

  // Function to toggle visibility
  const toggleChildren = (index: number) => {
    setVisibleChildren((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className={`trade_list active_trades ${
        theme === "dark" ? "trade_list_dark" : ""
      }`}
    >
      <div className="content">
        <div className="list">
          {[...Array(2)].map(
            (
              _,
              parentIndex // Adjust to match the number of parent items
            ) => (
              <div className="list_items light_shadow" key={parentIndex}>
                <div
                  className="parent"
                  onClick={() => toggleChildren(parentIndex)}
                >
                  <div className="top c_flex">
                    <div className="left a_flex">
                      <div className="icon_img l_flex">
                        <FluentSlideTextSparkle32Regular className="icon" />
                      </div>
                      <div className="title">
                        <TruncateMarkup lines={1}>
                          <h5>
                            Will Nigeria qualify for the 2026 FIFA World Cup?
                          </h5>
                        </TruncateMarkup>
                      </div>
                      <div className="type">
                        <small>SoloWin</small>
                        {/* <small>ComboBlast</small> */}
                      </div>
                    </div>
                    <div className="right a_flex">
                      <div className="active_type active">
                        <small>Live</small>
                      </div>
                      <div
                        className="_icon a_flex"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreVertIcon className="icon" />
                      </div>
                    </div>
                  </div>
                  <div className="bottom ">
                    <div className="span_type_active_state c_flex">
                      <div className="type">
                        <small>SoloWin</small>
                      </div>
                      <div className="active_type active">
                        <small>Live</small>
                      </div>
                    </div>
                    <div className="span_bottom c_flex">
                      <div className="event a_flex">
                        <small className="label">Events</small>
                        <small className="text">5 Events</small>
                      </div>
                      <div className="stake a_flex">
                        <small className="label">Your Stake</small>
                        <small className="text">
                          N{formatNumberWithCommas(200000)}
                        </small>
                      </div>
                      <div className="odds a_flex">
                        <small className="label">Odds</small>
                        <small className="text count green">2.5</small>
                      </div>
                      <div className="time_until a_flex">
                        <small className="label">Time Remaining</small>
                        <small className="text">2023-06-30 15:00:00</small>
                      </div>
                      <div className="pot_earning a_flex">
                        <small className="label">Potential Earnings</small>
                        <small className="text count green">
                          ${formatNumberWithCommas(3000)}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                {visibleChildren[parentIndex] && (
                  <div className="children">
                    <div className="combo_predictions">
                      <div className="predictions_list">
                        <ul className="list">
                          {List.map((item, index) => (
                            <li className="list_item a_flex" key={index}>
                              <div className="space_icon"></div>
                              <div className="title_choice">
                                <div className="title c_flex">
                                  <TruncateMarkup lines={1}>
                                    <h5>{item?.title}</h5>
                                  </TruncateMarkup>
                                </div>
                                <div className="choice a_flex">
                                  <small>
                                    Choice •{" "}
                                    {item.choice.label === "yes" ? (
                                      <span className="green">
                                        Yes ({item.choice.value})%
                                      </span>
                                    ) : (
                                      item.choice.label === "no" && (
                                        <span className="red">
                                          Candidate A ({item.choice.value})%
                                        </span>
                                      )
                                    )}
                                  </small>
                                  <div className="vh_divider"></div>
                                  <small className="gray">
                                    Ends in • 10:00:00
                                  </small>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ActiveTrades;
