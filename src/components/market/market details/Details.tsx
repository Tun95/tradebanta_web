import "./styles.scss";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import l1 from "../../../assets/home/l1.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { EventDetails } from "../../../types/events/details/eventDetail";

interface DetailsProps {
  event: EventDetails | null;
}

function Details({ event }: DetailsProps) {
  // Format the date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Calculate the time remaining until the event ends
  const calculateTimeRemaining = (endTime: string) => {
    const endDate = new Date(endTime);
    const now = new Date();
    const timeDiff = endDate.getTime() - now.getTime();

    if (timeDiff <= 0) {
      return "Event Ended";
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    return `Ends in ${hours} Hours`;
  };

  return (
    <div className="market_deatails">
      <div className="content">
        <div className="top light_shadow ">
          <div className="top_box_content a_flex">
            <div className="space_icon_mobile_btn c_flex">
              <div className="space_icon">
                {/* Use event image if available, otherwise fallback to static image */}
                <img src={event?.eventImage || l1} alt="post_img" />
              </div>
              <div className="mobile_btn">
                <div className="btn a_flex">
                  {/* Commented Bookmark Button */}
                  {/* <button className="main_btn bookmark_btn l_flex">
                    <small className="l_flex">
                      <BookmarkBorderIcon className="icon" />
                    </small>
                  </button> */}
                  <button className="main_btn bookmark_btn _red l_flex">
                    <small className="l_flex">
                      <BookmarkIcon className="icon red" />
                    </small>
                  </button>
                  <button className="main_btn">
                    <small className="a_flex">
                      <i className="fa-solid fa-share-from-square"></i>
                      <p>Share Game</p>
                    </small>
                  </button>
                </div>
              </div>
            </div>
            <div className="title">
              <h3>
                {event?.title ||
                  "Will Nigerian Senate pass the 2024 National Budget before January?"}
              </h3>
            </div>
          </div>

          <div className="lower_current a_flex">
            <small className="pool a_flex">
              <i className="fa-solid fa-layer-group icon"></i>
              <div className="text_count a_flex">
                <div className="text">
                  <p>Current Pool</p>
                </div>
                <FiberManualRecordIcon className="icon_circle" />
                <div className="count">N{event?.pool || "1,300,456"}</div>
              </div>
            </small>
            <small className="participant a_flex">
              <i className="fa-solid fa-users icon"></i>
              <div className="text_count a_flex">
                <div className="text">
                  <p>Current Participant</p>
                </div>
                <FiberManualRecordIcon className="icon_circle" />
                <div className="count">{event?.totalPlayers || "300"}</div>
              </div>
            </small>
          </div>
        </div>
        <div className="bottom c_flex">
          <div className="left">
            <div className="btns a_flex">
              <div className="date btn">
                <small className="a_flex">
                  <AccessTimeIcon className="icon" />
                  <p>{event ? formatDate(event.startTime) : "Nov 35, 2024"}</p>
                </small>
              </div>
              <div className="cat_end_type a_flex">
                <div className="category btn l_flex">
                  <small>{event?.category.name || "Economy"}</small>
                </div>
                <div className="ends_in btn l_flex">
                  <small>
                    {event
                      ? calculateTimeRemaining(event.endTime)
                      : "Ends in 11 Hours"}
                  </small>
                </div>
                <div className="type btn l_flex">
                  <small>
                    {event?.type === "polar" ? "Yes/No" : "MultiChoice"}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="btn a_flex">
              <button className="main_btn">
                <small className="a_flex">
                  <BookmarkBorderIcon className="icon" />
                  <p>Bookmark</p>
                </small>
              </button>{" "}
              {/* Commented Remove Bookmark Button */}
              {/* <button className="main_btn remove_btn">
                <small className="a_flex">
                  <BookmarkIcon className="icon red" />
                  <p>Remove Bookmark</p>
                </small>
              </button> */}
              <button className="main_btn">
                <small className="a_flex">
                  <i className="fa-solid fa-share-from-square"></i>
                  <p>Share Game</p>
                </small>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
