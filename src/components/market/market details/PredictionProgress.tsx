import "./styles.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  formatNumberNoDecimalShort,
  formatNumberWithTwoDecimalsNoSuffix,
  useAppContext,
} from "../../../utilities/utils/Utils";
import { Line } from "rc-progress";
import wc from "../../../assets/others/wc.png";
import SquareIcon from "@mui/icons-material/Square";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import c1 from "../../../assets/home/c1.png";
import { EventDetails } from "../../../types/events/details/eventDetail";

const List = [
  {
    id: 1,
    img: c1,
    name: "Candidate A",
    percentage: 60,
    participants: 600,
  },
  {
    id: 2,
    img: c1,
    name: "Candidate B",
    percentage: 20,
    participants: 200,
  },
  {
    id: 3,
    img: c1,
    name: "Candidate C",
    percentage: 15,
    participants: 150,
  },
  {
    id: 4,
    img: c1,
    name: "Candidate D",
    percentage: 5,
    participants: 50,
  },
];

interface PredictionProgressProps {
  event: EventDetails | null;
}

function PredictionProgress({}: PredictionProgressProps) {
  const { state } = useAppContext();
  const { theme } = state;

  const getStrokeColor = (index: number): string => {
    switch (index) {
      case 0:
        return "var(--color-green)";
      case 1:
        return "var(--color-purple)";
      case 2:
        return "var(--color-dark-blue)";
      case 3:
        return "var(--color-pink)";
      case 4:
        return "var(--color-dark-pink)";
      case 5:
        return "var(--color-orange)";
      default:
        return "var(--color-green)";
    }
  };

  const getBeforeElementClass = (index: number): string => {
    switch (index) {
      case 0:
        return "before-element-1";
      case 1:
        return "before-element-2";
      case 2:
        return "before-element-3";
      case 3:
        return "before-element-4";
      case 4:
        return "before-element-5";
      case 5:
        return "before-element-6";
      default:
        return "before-element-default"; // Optional default class
    }
  };

  return (
    <div
      className={`prediction_progress  ${
        theme === "dark" ? "prediction_progress_dark" : ""
      }`}
    >
      <div className="content">
        <div className="top_box">
          <div className="btn c_flex">
            <div className="left">
              <small className="a_flex">
                <AccessTimeIcon className="icon" />
                <p>Result Time • Nov 29, 2024 - 10:45PM</p>
              </small>
            </div>
            <div className="vh_divider"></div>
            <div className="hr_divider"></div>
            <div className="right">
              <small className="a_flex">
                <AccessTimeIcon className="icon" />
                <p>Payout Time • Nov 29, 2024 - 10:45PM</p>
                <InfoOutlinedIcon className="icon info_icon" />
              </small>
            </div>
            <div className="bg_img">
              <img src={wc} alt="bg_img" />
            </div>
          </div>
        </div>
        {/* YES/NO LINE BAR */}
        <div className="bottom_box">
          <div className="upper_text_bar">
            <div className="combined_content">
              <div className="c_flex">
                <small className="left a_flex">
                  <SquareIcon className="icon green" />
                  <span className="a_flex">
                    <p className="label"> Participants: </p>
                    <p className="small_count">
                      {formatNumberNoDecimalShort(800)}
                    </p>{" "}
                    <FiberManualRecordIcon className="icon_circle" />
                    <p className="small_percent">
                      {formatNumberWithTwoDecimalsNoSuffix(89)}%
                    </p>
                  </span>
                </small>
                <small className="right a_flex">
                  <SquareIcon className="icon red" />
                  <span className="a_flex">
                    <p className="label"> Participants: </p>
                    <p className="small_count">
                      {formatNumberNoDecimalShort(100)}
                    </p>{" "}
                    <FiberManualRecordIcon className="icon_circle" />
                    <p className="small_percent">
                      {formatNumberWithTwoDecimalsNoSuffix(11)}%
                    </p>
                  </span>
                </small>
              </div>
            </div>
          </div>
          <svg width="0" height="0">
            <defs>
              <pattern
                id="stripedPatternGreen"
                width="2"
                height="10"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(20)"
              >
                <rect width="10" height="10" fill="var(--color-green)" />
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="10"
                  stroke="var(--color-border)"
                  strokeWidth="0.3"
                />
              </pattern>

              <pattern
                id="stripedPatternRed"
                width="2"
                height="10"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(160)"
              >
                <rect width="10" height="10" fill="var(--color-red)" />
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="10"
                  stroke="var(--color-border)"
                  strokeWidth="0.3"
                />
              </pattern>
            </defs>
          </svg>
          <div className="progress_bar">
            {/* Yes and No bars overlaid */}
            <div className="combined_bar">
              {/* Yes Bar */}
              <Line
                percent={89}
                strokeWidth={15}
                strokeLinecap="butt"
                trailWidth={15}
                trailColor="transparent"
                strokeColor="url(#stripedPatternGreen)"
                className="line_bar yes_line"
              />
              {/* No Bar (flipped to extend from right) */}
              <Line
                percent={11}
                strokeWidth={15}
                strokeLinecap="butt"
                trailWidth={15}
                trailColor="transparent"
                strokeColor="url(#stripedPatternRed)"
                className="line_bar no_line"
                style={{ transform: "rotateY(180deg)" }} // Flip horizontally
              />
            </div>

            {/* Combined content */}
            <div className="combined_content">
              <div className="c_flex">
                <div className="left">
                  <p>Yes</p>
                </div>
                <div className="right">
                  <p>No</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CANDIDATES LINE BAR */}
        <div className="candidates_progress">
          {" "}
          <div className="svg_bar">
            {" "}
            <svg width="0" height="0" className="svg_style">
              <defs>
                {List.map((_, index) => (
                  <pattern
                    key={`stripedPattern-${index}`}
                    id={`stripedPattern-${index}`}
                    width="2"
                    height="10"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(20)"
                  >
                    <rect width="10" height="10" fill={getStrokeColor(index)} />
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="10"
                      stroke="var(--color-border)"
                      strokeWidth="0.3"
                    />
                  </pattern>
                ))}
              </defs>
            </svg>
            {List.map((item, index) => (
              <div className="status_progress_bars" key={index}>
                <div className="upper_text_bar">
                  <div className="combined_content">
                    <div className="c_flex">
                      <small className="left a_flex">
                        <SquareIcon
                          className="icon"
                          style={{ color: getStrokeColor(index) }}
                        />
                        <span className="a_flex">
                          <p className="label"> {item.name} </p>
                        </span>
                      </small>
                      <small className="right a_flex">
                        <SquareIcon
                          className="icon"
                          style={{ color: getStrokeColor(index) }}
                        />
                        <span className="a_flex">
                          <p className="label"> Participants: </p>
                          <p className="small_count">
                            {formatNumberNoDecimalShort(item?.participants)}
                          </p>
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="progress_bar">
                  <div className="candidate_bar">
                    <div className="bar_candidate_img a_flex">
                      <div className="candidate_img">
                        <img src={c1} alt="user_img" />
                      </div>
                      <div
                        className={`bar ${getBeforeElementClass(index)}`}
                        key={item?.id}
                      >
                        <Line
                          percent={item.percentage}
                          strokeWidth={15}
                          strokeLinecap="butt"
                          trailWidth={15}
                          trailColor="transparent"
                          className="line_bar"
                          strokeColor={`url(#stripedPattern-${index})`} // Apply the pattern
                        />
                      </div>
                    </div>
                    <div className="candidate_content a_flex">
                      <div className="left ">
                        <div className="percent">
                          <p>
                            {formatNumberWithTwoDecimalsNoSuffix(
                              item.percentage
                            )}
                            %
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PredictionProgress;
