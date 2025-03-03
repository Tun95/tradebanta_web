import "../styles.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FilterListIcon from "@mui/icons-material/FilterList";
import userIcon from "../../../../assets/icons/user.png";
import { useAppContext } from "../../../../utilities/utils/Utils";
import Tooltip from "@mui/material/Tooltip";

function Comment() {
  const { state, setMenu, showDrawer } = useAppContext();
  const { theme } = state;
  return (
    <div
      className={`comments_component ${
        theme === "dark" ? "comments_component_dark" : ""
      }`}
    >
      <div className="comment_content">
        <div className="comment_head">
          <div className="form_box a_flex">
            <div className="form_group form_input a_flex">
              <input type="text" placeholder="Add a comment" />
              <div className="btn a_flex">
                <button className="main_btn post_btn">Post Comment</button>
              </div>
            </div>
            <div className="form_group form_select a_flex">
              <FilterListIcon className="icon" />
              <select name="filter" id="filter">
                <option value="" disabled selected>
                  Filter
                </option>
                <option value="random1">Random Option 1</option>
                <option value="random2">Random Option 2</option>
                <option value="random3">Random Option 3</option>
                <option value="random4">Random Option 4</option>
              </select>
            </div>
          </div>
        </div>
        <div className="comment_body light_shadow">
          <div className="comment_list">
            <div className="parent_reply">
              <div className="parent details_">
                <div className="left f_flex">
                  <div className="user_icon">
                    <img src={userIcon} alt="user_icon" />
                  </div>
                  <div className="username_time_desc_others">
                    <div className="username">
                      <h5>hey_olivia</h5>
                    </div>
                    <div className="time">
                      <small>Posted • 8 min ago</small>
                    </div>
                    <div className="description_icon d_flex">
                      <small className="description">
                        <p>
                          The executive and legislative branches need to work
                          closely to meet this deadline.
                        </p>
                      </small>
                      <div className="_icon">
                        <Tooltip title="Report Comment">
                          <MoreVertIcon
                            onClick={() => {
                              setMenu("comment_report");
                              showDrawer();
                            }}
                            className="icon"
                          />
                        </Tooltip>{" "}
                      </div>
                    </div>
                    <div className="others a_flex">
                      <div className="like">
                        <small className="a_flex">
                          <FavoriteBorderIcon className="icon" />
                          <p>Like • 0</p>
                        </small>
                      </div>
                      <div className="replies">
                        <small className="a_flex">
                          <i className="fa-regular fa-comment-dots"></i>
                          <p>Hide Replies • 100</p>
                        </small>
                      </div>
                      <div className="add_reply_btn">
                        <span className="main_btn">
                          <small>ADD REPLY</small>
                        </span>
                      </div>
                    </div>
                    <div className="form_box a_flex">
                      <div className="form_group form_input a_flex">
                        <input type="text" placeholder="@isabella" />
                        <div className="btn a_flex">
                          <button className="main_btn reply_btn">
                            Add Reply
                          </button>
                        </div>
                      </div>
                      <div className="form_group">
                        <button className="main_btn cancel_btn">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reply">
                  {" "}
                  <div className="left f_flex">
                    <div className="user_icon">
                      <img src={userIcon} alt="user_icon" />
                    </div>
                    <div className="username_time_desc_others">
                      <div className="username">
                        <h5>hey_olivia</h5>
                      </div>
                      <div className="time">
                        <small>Posted • 8 min ago</small>
                      </div>
                      <div className="description_icon d_flex">
                        <small className="description">
                          <p>
                            The executive and legislative branches need to work
                            closely to meet this deadline.
                          </p>
                        </small>
                        <div className="_icon">
                          <Tooltip title="Report Comment">
                            <MoreVertIcon
                              onClick={() => {
                                setMenu("comment_report");
                                showDrawer();
                              }}
                              className="icon"
                            />
                          </Tooltip>
                        </div>
                      </div>
                      <div className="others a_flex">
                        <div className="like">
                          <small className="a_flex">
                            <FavoriteBorderIcon className="icon" />
                            <p>Like • 0</p>
                          </small>
                        </div>
                        <div className="replies">
                          <small className="a_flex">
                            <i className="fa-regular fa-comment-dots"></i>
                            <p>Show Reply • 0</p>
                          </small>
                        </div>
                        <div className="add_reply_btn">
                          <span className="main_btn">
                            <small>ADD REPLY</small>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="load_more_btn l_flex">
              <div className="btn">
                <button className="main_btn">Load More Comments</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
