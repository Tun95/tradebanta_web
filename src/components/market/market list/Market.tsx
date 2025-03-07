import { useState, useEffect, useReducer } from "react";
import MarketFilters from "./MarketFilter";
import "./styles.scss";
import ComboBlast from "./ComboBlast";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useAppContext } from "../../../utilities/utils/Utils";
import { useDropDownMenuContext } from "../../../context/DrawerContext";
import MarketCards from "./MarketCards";
import axios from "axios";
import { ErrorResponse, getError } from "../../../utilities/utils/Utils";
import { toast } from "react-toastify";
import { eventsRequest } from "../../../base url/BaseUrl";
import {
  eventsReducer,
  initialEventState,
  Event,
} from "../../../types/events/list/eventlist";

function Market() {
  const { state: appState } = useAppContext();
  const { theme } = appState;

  const { setMenu, showDrawer } = useDropDownMenuContext();

  // State for events
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
      setDisplayedData(result.data.slice(0, itemsPerPage));
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

  // Navigate Menu
  const navigateTo = () => {
    setMenu("combo_blast");
    showDrawer();
  };

  return (
    <div className="home_post market_post">
      <div className="home_component_content">
        <div className="filters">
          <MarketFilters
            activeTab={activeTab}
            toggleTab={toggleTab}
            onCategoryFilter={handleCategoryFilter} // Pass filter handler
          />
        </div>
        <div className="post_itmes">
          <span className="all_combo f_flex">
            {/* ALL COMBO */}
            <span className="_combo">
              <div
                className={`post_list  ${
                  activeTab === "combo_blast" && "grid_2"
                }`}
              >
                {displayedData.map((item, index) => (
                  <MarketCards
                    item={item}
                    key={item.id}
                    index={index}
                    activeTab={activeTab}
                    toggleTab={toggleTab}
                  />
                ))}
              </div>
              {state.page < state.totalPages && (
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
            </span>

            {/* COMBO BLAST */}
            {activeTab === "combo_blast" && (
              <>
                <div className="combo">
                  <ComboBlast />
                </div>
                <div
                  onClick={navigateTo}
                  className={`combo_mobile_btn ${
                    theme === "dark" ? "combo_mobile_btn_dark" : ""
                  }`}
                >
                  <div className="btn f_flex">
                    <span className="counter_text a_flex">
                      <div className="counter l_flex">0</div>
                      <div className="text">
                        <p>Prediction Selected</p>
                      </div>
                    </span>
                    <div className="_icon l_flex">
                      <KeyboardArrowUpIcon className="icon" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Market;
