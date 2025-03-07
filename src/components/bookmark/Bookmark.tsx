import PostCards from "../home/post/PostCards";
import "./styles.scss";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ErrorResponse, getError } from "../../utilities/utils/Utils";
import LoadingBox from "../../utilities/message loading/LoadingBox";
import MessageBox from "../../utilities/message loading/MessageBox";

// Define the type for Bookmark Data
interface BookmarkItem {
  id: string;
  title: string;
  description: string;
  type: "polar" | "multichoice";
  eventImage: string;
  answer: string;
  pool: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  options: {
    id: string;
    name: string;
    imageUrl?: string;
    playerCount: number;
    bonusOdds?: number;
  }[];
  category: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  totalPlayers: number;
}

// Define the state type
interface BookmarkState {
  loading: boolean;
  data: BookmarkItem[];
  error: string | null;
}

// Define the initial state
const initialBookmarkState: BookmarkState = {
  loading: false,
  data: [],
  error: null,
};

// Define the action types
type BookmarkAction =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCCESS"; payload: BookmarkItem[] }
  | { type: "FETCH_FAIL"; payload: string };

// Define the reducer
const bookmarkReducer = (
  state: BookmarkState,
  action: BookmarkAction
): BookmarkState => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Define the API endpoint
const bookmarksRequest = "https://api.example.com/bookmarks"; // Replace with your actual API endpoint

function Bookmark() {
  const [state, dispatch] = useReducer(bookmarkReducer, initialBookmarkState);

  // Fetch bookmarks data
  const fetchBookmarks = async () => {
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const response = await axios.get(bookmarksRequest);
      const result = response.data;
      dispatch({ type: "FETCH_SUCCESS", payload: result.data });
    } catch (error) {
      dispatch({
        type: "FETCH_FAIL",
        payload: getError(error as ErrorResponse),
      });
      toast.error(getError(error as ErrorResponse));
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  return (
    <div className="home_post bookmark_component">
      <div className="home_component_content">
        <div className="post_itmes">
          {state.loading ? (
            <LoadingBox />
          ) : state.error ? (
            <MessageBox variant="danger">{state.error}</MessageBox>
          ) : state.data.length === 0 ? (
            <div className="no_review l_flex">
              <p>No Bookmarks Found</p>
            </div>
          ) : (
            <div className="post_list">
              {state.data.map((item, index) => (
                <PostCards item={item} key={item.id} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
