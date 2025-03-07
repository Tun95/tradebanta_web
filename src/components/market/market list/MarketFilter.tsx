import { useEffect, useState } from "react";
import invoice from "../../../assets/icons/invoice.png";
import { useLocation, useNavigate } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useAppContext } from "../../../utilities/utils/Utils";
import { useSideDrawerMenuContext } from "../../../context/SideDrawerContext";
import {
  FluentSlideSearch16Regular,
  TablerFlameFilled,
} from "../../../common/icons/Icons";

const sortType = [
  { name: "All", value: "all" }, // Add "All" option
  { name: "Top Trending", value: "trending" },
  { name: "Currency", value: "currency" },
  { name: "Election", value: "election" },
  { name: "Crypto", value: "crypto" },
  { name: "Tech", value: "tech" },
  { name: "Sport", value: "sport" },
  { name: "Real Estate", value: "real-estate" },
];

interface MarketFiltersProps {
  activeTab: string;
  toggleTab: (tab: string) => void;
  onCategoryFilter: (category: string) => void;
}

function MarketFilters({
  // activeTab,
  // toggleTab,
  onCategoryFilter,
}: MarketFiltersProps) {
  const { showDrawer } = useSideDrawerMenuContext();
  const { state } = useAppContext();
  const { theme } = state;

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);

  const [selectedType, setSelectedType] = useState<string>(
    searchParams.get("sortType") || "all"
  );

  useEffect(() => {
    setSelectedType(searchParams.get("sortType") || "all");
  }, [location.search]);

  // Handle category filter change
  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    onCategoryFilter(value); // Call the parent's filter handler
  };

  // NAVIGATE
  const navigateTo = () => {
    showDrawer("bookmark");
  };

  return (
    <>
      <div
        className={`filters_component ${
          theme === "dark" ? "filters_component_dark" : ""
        }`}
      >
        <div className="content">
          <div className="top a_flex">
            <div className="left">
              <form action="" className="form_box">
                <div className="form_group market_form_group a_flex">
                  <span className="_icon l_flex">
                    <FluentSlideSearch16Regular className="icon" />
                  </span>
                  <input type="serach" placeholder="Search..." />
                </div>
              </form>
            </div>
            <div className="right a_flex">
              <div className="btn window_icon">
                <button
                  className="main_btn"
                  onClick={() => navigate("/bookmarks")}
                >
                  <small className="a_flex">
                    <span className="icon a_flex">
                      <img src={invoice} alt="invoice_icon" />
                    </span>
                    <p>Saved Predictions</p>
                  </small>
                </button>
              </div>

              <div
                onClick={navigateTo}
                className="bookmark_icon mobile_icon l_flex"
              >
                <BookmarkIcon className="icon" />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="sort">
              <div className="sort_type window sort_border c_flex">
                {sortType.map((item, index) => (
                  <button
                    className={`main_btn a_flex ${
                      selectedType === item.value ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handleTypeChange(item.value)} // Add onClick handler
                  >
                    {item.value === "trending" && (
                      <TablerFlameFilled className="icon" />
                    )}{" "}
                    <small> {item.name}</small>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketFilters;
