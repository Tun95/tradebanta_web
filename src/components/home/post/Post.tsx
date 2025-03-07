import PostCards from "./PostCards";
import "./styles.scss";
import MarketFilters from "../../market/market list/MarketFilter";
import { useEffect, useReducer, useState } from "react";
import {
  eventsReducer,
  initialEventState,
  Event, // Ensure Event is imported
} from "../../../types/events/list/eventlist";
import axios from "axios";
import { ErrorResponse, getError } from "../../../utilities/utils/Utils";
import { toast } from "react-toastify";
import { eventsRequest } from "../../../base url/BaseUrl";

function Post() {
  const [state, dispatch] = useReducer(eventsReducer, initialEventState);
  const [activeTab, setActiveTab] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [allData, setAllData] = useState<Event[]>([]); 
  const [displayedData, setDisplayedData] = useState<Event[]>([]);
  const itemsPerPage = 9;

  //==========================
  // Fetch all events function
  //==========================
  const fetchAllEvents = async () => {
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const response = await axios.get(eventsRequest);
      const result = response.data;
      setAllData(result.data); 
      setDisplayedData(result.data.slice(0, itemsPerPage)); // Display first page of data
      dispatch({
        type: "FETCH_SUCCESS",
        payload: {
          data: result.data.slice(0, itemsPerPage),
          page: 1,
          totalPages: Math.ceil(result.data.length / itemsPerPage),
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
  }, []);

  // Handle category filter change
  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category === "all" ? null : category);
    const filteredData =
      category === "all"
        ? allData
        : allData.filter((item) => item.category.name === category);
    setDisplayedData(filteredData.slice(0, itemsPerPage));
    dispatch({
      type: "FETCH_SUCCESS",
      payload: {
        data: filteredData.slice(0, itemsPerPage),
        page: 1,
        totalPages: Math.ceil(filteredData.length / itemsPerPage),
      },
    });
  };

  // Load more function
  const handleLoadMore = () => {
    const nextPage = state.page + 1;
    const startIndex = nextPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newData = allData
      .filter((item) =>
        selectedCategory ? item.category.name === selectedCategory : true
      )
      .slice(startIndex, endIndex);
    setDisplayedData((prev) => [...prev, ...newData]);
    dispatch({
      type: "FETCH_SUCCESS",
      payload: {
        data: [...state.data, ...newData],
        page: nextPage,
        totalPages: Math.ceil(allData.length / itemsPerPage),
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
          <div className="post_list">
            {displayedData.map((item, index) => (
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
        </div>
      </div>
    </div>
  );
}

export default Post;
