import PostCards from "./PostCards";
import "./styles.scss";
import MarketFilters from "../../market/market list/MarketFilter";
import { useEffect, useReducer, useState } from "react";
import {
  eventsReducer,
  initialEventState,
} from "../../../types/events/list/eventlist";
import { eventsRequest } from "../../../base url/BaseUrl";
import { ErrorResponse, getError } from "../../../utilities/utils/Utils";
import { toast } from "react-toastify";

function Post() {
  const [state, dispatch] = useReducer(eventsReducer, initialEventState);
  const [activeTab, setActiveTab] = useState("");

  //=======================
  // Fetch events function
  //=======================
  const fetchEvents = async (page: number) => {
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const response = await fetch(`${eventsRequest}?page=${page}`);
      const result = await response.json();
      dispatch({
        type: "FETCH_SUCCESS",
        payload: {
          data: result.data,
          page: result.page,
          totalPages: result.totalPages,
        },
      });
    } catch (error) {
      dispatch({
        type: "FETCH_FAIL",
        payload: getError(error as ErrorResponse),
      });
      toast.error(getError(error as ErrorResponse));
    }
  };

  useEffect(() => {
    fetchEvents(state.page);
  }, [state.page]);

  // Load more function
  const handleLoadMore = async () => {
    const nextPage = state.page + 1;
    if (nextPage <= state.totalPages) {
      await fetchEvents(nextPage);
    }
  };

  // Toggle between "all market" and "comboblast"
  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="home_post">
      <div className="home_component_content">
        <div className="filters">
          <MarketFilters activeTab={activeTab} toggleTab={toggleTab} />
        </div>
        <div className="post_itmes">
          <div className="post_list">
            {state.data.map((item, index) => (
              <PostCards item={item} key={item.id} index={index} />
            ))}
          </div>
          {state.page < state.totalPages && (
            <div className="load_more l_flex">
              <div className="btn">
                <button className="main_btn l_flex" onClick={handleLoadMore}>
                  <p>Load More</p>
                </button>
              </div>
            </div>
          )}
          {/* {state.loading && <p>Loading...</p>}
          {state.error && <p>Error: {state.error}</p>} */}
        </div>
      </div>
    </div>
  );
}

export default Post;
