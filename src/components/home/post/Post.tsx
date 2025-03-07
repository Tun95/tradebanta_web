import PostCards from "./PostCards";
import "./styles.scss";
import MarketFilters from "../../market/market list/MarketFilter";
import { useEffect, useReducer, useState } from "react";
import {
  eventsReducer,
  initialEventState,
  Event,
} from "../../../types/events/list/eventlist";
import axios from "axios";
import { ErrorResponse, getError } from "../../../utilities/utils/Utils";
import { toast } from "react-toastify";
import { eventsRequest } from "../../../base url/BaseUrl";
import LoadingBox from "../../../utilities/message loading/LoadingBox";
import MessageBox from "../../../utilities/message loading/MessageBox";

function Post() {
  const [state, dispatch] = useReducer(eventsReducer, initialEventState);
  const [activeTab, setActiveTab] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [allData, setAllData] = useState<Event[]>([]);
  const itemsPerPage = 10;

  // Fetch all events
  const fetchAllEvents = async () => {
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const response = await axios.get(eventsRequest);
      const result = response.data;
      setAllData(result.data); // Store all data

      const filteredData = selectedCategory
        ? result.data.filter(
            (item: Event) => item.category.name === selectedCategory
          )
        : result.data;

      console.log("Filtered Data Length:", filteredData.length);
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);
      console.log("Total Pages:", totalPages);

      dispatch({
        type: "FETCH_SUCCESS",
        payload: {
          data: filteredData.slice(0, itemsPerPage), // Only the first page of data
          page: 1, // Reset page to 1
          totalPages: totalPages,
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
    fetchAllEvents();
  }, [selectedCategory]); // Refetch when category changes

  // Handle category filter change
  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category === "all" ? null : category);
    dispatch({
      type: "FETCH_SUCCESS",
      payload: {
        data: [], // Clear existing data
        page: 1, // Reset page to 1
        totalPages: 1, // Reset totalPages to 1
      },
    });
    fetchAllEvents(); // Refetch data
  };

  // Load more function
  const handleLoadMore = () => {
    const nextPage = state.page + 1;
    const startIndex = nextPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredData = selectedCategory
      ? allData.filter((item: Event) => item.category.name === selectedCategory)
      : allData;

    console.log("Filtered Data Length:", filteredData.length);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    console.log("Total Pages:", totalPages);

    const newData = filteredData.slice(startIndex, endIndex);
    dispatch({
      type: "FETCH_SUCCESS",
      payload: {
        data: newData,
        page: nextPage,
        totalPages: totalPages,
      },
    });
  };

  // Toggle between "all market" and "comboblast"
  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="home_post">
      <div className="home_component_content">
        <div className="filters">
          <MarketFilters
            activeTab={activeTab}
            toggleTab={toggleTab}
            onCategoryFilter={handleCategoryFilter}
          />
        </div>
        <div className="post_itmes">
          {state.loading ? (
            <LoadingBox />
          ) : state.error ? (
            <MessageBox variant="danger">{state.error}</MessageBox>
          ) : state.data.length === 0 ? (
            <div className="no_review l_flex">
              <p>No Events Found</p>
            </div>
          ) : (
            <>
              <div className="post_list">
                {state.data.map((item, index) => (
                  <PostCards item={item} key={item.id} index={index} />
                ))}
              </div>
              {state.totalPages > 0 && (
                <div className="load_more l_flex">
                  <div className="btn">
                    <button
                      className="main_btn l_flex"
                      onClick={handleLoadMore}
                    >
                      <p>Load More</p>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
