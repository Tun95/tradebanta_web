import "./styles.scss";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import l1 from "../../../assets/home/l1.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Details() {
  return (
    <div className="market_deatails">
      <div className="content">
        <div className="top light_shadow ">
          <div className="top_box_content a_flex">
            <div className="space_icon_mobile_btn c_flex">
              <div className="space_icon">
                <img src={l1} alt="post_img" />
              </div>
              <div className="mobile_btn">
                <div className="btn a_flex">
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
                {" "}
                Will Nigerian Senate pass the 2024 National Budget before
                January?
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
                <div className="count">N1,300,456</div>
              </div>
            </small>
            <small className="participant a_flex">
              <i className="fa-solid fa-users icon"></i>
              <div className="text_count a_flex">
                <div className="text">
                  <p>Current Participant</p>
                </div>
                <FiberManualRecordIcon className="icon_circle" />
                <div className="count">300</div>
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
                  <p>Nov 35, 2024</p>
                </small>
              </div>
              <div className="cat_end_type a_flex">
                <div className="category btn l_flex">
                  <small>Economy</small>
                </div>
                <div className="ends_in btn l_flex">
                  <small>Ends in 11 Hours</small>
                </div>
                <div className="type btn l_flex">
                  <small>Yes/No</small>
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
