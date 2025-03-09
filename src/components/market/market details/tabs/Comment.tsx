import "../styles.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FilterListIcon from "@mui/icons-material/FilterList";
import userIcon from "../../../../assets/icons/user.png";
import { useAppContext } from "../../../../utilities/utils/Utils";
import Tooltip from "@mui/material/Tooltip";
import { EventDetails } from "../../../../types/events/details/eventDetail";
import { useState, useEffect } from "react";
import axios from "axios";
import { commentRequest } from "../../../../base url/BaseUrl";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

interface TabPanelProps {
  event: EventDetails | null;
}

interface Comment {
  id: string;
  content: string;
  userId: string;
  eventId: string;
  parentCommentId: string | null;
  replies: Comment[];
  likes: number;
  createdAt: string;
}

function Comment({ event }: TabPanelProps) {
  const { state: appState, setMenu, showDrawer } = useAppContext();
  const { theme, userInfo } = appState;

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [replyContent, setReplyContent] = useState<{ [key: string]: string }>(
    {}
  );

  // Fetch comments for the event
  useEffect(() => {
    if (event?.id) {
      fetchComments(event.id);
    }
  }, [event]);

  // FETCH COMMENTS
  const fetchComments = async (eventId: string) => {
    try {
      const response = await axios.get(`${commentRequest}/event/${eventId}`);
      // Ensure comments is an array
      setComments(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching comments:", error);
      setComments([]); // Fallback to empty array on error
    }
  };

  // Create a new comment
  const handleCreateComment = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (!newComment.trim() || !event?.id) return;

    try {
      const response = await axios.post(
        `${commentRequest}`,
        { content: newComment, eventId: event.id },
        { headers: { Authorization: `Bearer ${userInfo?.token}` } }
      );
      setComments((prevComments) => [...prevComments, response.data]);
      setNewComment("");
      fetchComments(event.id); // Refresh comments
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  // Delete a comment
  const handleDeleteComment = async (commentId: string) => {
    try {
      await axios.delete(`${commentRequest}/${commentId}`, {
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      });
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  // Post a reply to a comment
  const handleReplyComment = async (commentId: string, e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (!replyContent[commentId]?.trim()) return;

    try {
      const response = await axios.post(
        `${commentRequest}/${commentId}/reply`,
        { content: replyContent[commentId] },
        { headers: { Authorization: `Bearer ${userInfo?.token}` } }
      );
      const updatedComments = comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, response.data] }
          : comment
      );
      setComments(updatedComments);
      setReplyContent({ ...replyContent, [commentId]: "" });
    } catch (error) {
      console.error("Error replying to comment:", error);
    }
  };

  // Like a comment
  const handleLikeComment = async (commentId: string) => {
    try {
      await axios.patch(
        `${commentRequest}/${commentId}/like`,
        {},
        { headers: { Authorization: `Bearer ${userInfo?.token}` } }
      );
      const updatedComments = comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      );
      setComments(updatedComments);
    } catch (error) {
      console.error("Error liking comment:", error);
    }
  };

  return (
    <div
      className={`comments_component ${
        theme === "dark" ? "comments_component_dark" : ""
      }`}
    >
      <div className="comment_content">
        <div className="comment_head">
          <div className="form_box a_flex">
            <form
              onSubmit={handleCreateComment}
              className="form_group form_input a_flex"
            >
              <input
                type="text"
                placeholder="Add a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <div className="btn a_flex">
                <button type="submit" className="main_btn post_btn">
                  Post Comment
                </button>
              </div>
            </form>
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
            {comments?.length === 0 && (
              <div className="no_review l_flex">
                <p>No Comments Found</p>
              </div>
            )}
            {comments?.map((comment) => (
              <div className="parent_reply" key={comment.id}>
                <div className="parent details_">
                  <div className="left f_flex">
                    <div className="user_icon">
                      <img src={userIcon} alt="user_icon" />
                    </div>
                    <div className="username_time_desc_others">
                      <div className="name_date">
                        <div className="username">
                          <h5>User {comment.userId}</h5>
                        </div>
                        <div className="time">
                          <small>
                            Posted •{" "}
                            {new Date(comment.createdAt).toLocaleString()}
                          </small>
                        </div>
                      </div>
                      {userInfo && userInfo?._id === comment.userId && (
                        <div className="icons a_flex">
                          <span
                            className="l_flex delete_icon"
                            onClick={() => handleDeleteComment(comment.id)}
                          >
                            <DeleteForeverOutlinedIcon className="icon mui_icon" />
                          </span>
                        </div>
                      )}
                      <div className="description_icon d_flex">
                        <small className="description">
                          <p>{comment.content}</p>
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
                          <small
                            className="a_flex"
                            onClick={() => handleLikeComment(comment.id)}
                          >
                            <FavoriteBorderIcon className="icon" />
                            <p>Like • {comment.likes}</p>
                          </small>
                        </div>
                        <div className="replies">
                          <small className="a_flex">
                            <i className="fa-regular fa-comment-dots"></i>
                            <p>Hide Replies • {comment.replies.length}</p>
                          </small>
                        </div>
                        <div className="add_reply_btn">
                          <span className="main_btn">
                            <small>ADD REPLY</small>
                          </span>
                        </div>
                      </div>
                      <form
                        onSubmit={(e) => handleReplyComment(comment.id, e)}
                        className="form_box a_flex"
                      >
                        <div className="form_group form_input a_flex">
                          <input
                            type="text"
                            placeholder={`@User ${comment.userId}`}
                            value={replyContent[comment.id] || ""}
                            onChange={(e) =>
                              setReplyContent({
                                ...replyContent,
                                [comment.id]: e.target.value,
                              })
                            }
                          />
                          <div className="btn a_flex">
                            <button
                              type="submit"
                              className="main_btn reply_btn"
                            >
                              Add Reply
                            </button>
                          </div>
                        </div>
                        <div className="form_group">
                          <button
                            type="button"
                            className="main_btn cancel_btn"
                            onClick={() =>
                              setReplyContent({
                                ...replyContent,
                                [comment.id]: "",
                              })
                            }
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {comment.replies.map((reply) => (
                  <div className="reply" key={reply.id}>
                    <div className="left f_flex">
                      <div className="user_icon">
                        <img src={userIcon} alt="user_icon" />
                      </div>
                      <div className="username_time_desc_others">
                        <div className="username">
                          <h5>User {reply.userId}</h5>
                        </div>
                        <div className="time">
                          <small>
                            Posted •{" "}
                            {new Date(reply.createdAt).toLocaleString()}
                          </small>
                        </div>
                        <div className="description_icon d_flex">
                          <small className="description">
                            <p>{reply.content}</p>
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
                            <small
                              className="a_flex"
                              onClick={() => handleLikeComment(reply.id)}
                            >
                              <FavoriteBorderIcon className="icon" />
                              <p>Like • {reply.likes}</p>
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            {comments?.length > 0 && (
              <div className="load_more_btn l_flex">
                <div className="btn">
                  <button className="main_btn">Load More Comments</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
