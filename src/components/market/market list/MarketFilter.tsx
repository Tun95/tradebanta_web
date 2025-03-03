import { useEffect, useState } from "react";
import invoice from "../../../assets/icons/invoice.png";
import { useLocation, useNavigate } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useAppContext } from "../../../utilities/utils/Utils";
import { useSideDrawerMenuContext } from "../../../context/SideDrawerContext";
import { FluentSlideSearch16Regular, TablerFlameFilled } from "../../../common/icons/Icons";

const sortType = [
  { name: "Top Trending", value: "trending" },
  { name: "Currency", value: "currency" },
  { name: "Election", value: "election" },
  { name: "Crypto", value: "crypto" },
  { name: "Tech", value: "tech" },
  { name: "Sport", value: "sport" },
  { name: "Real Estate", value: "Real Estate" },
  { name: "Sort Tag", value: "sort Tag" },
];

interface MarketFiltersProps {
  activeTab: string;
  toggleTab: (tab: string) => void;
}

function MarketFilters({}: MarketFiltersProps) {
  const { showDrawer } = useSideDrawerMenuContext();
  const { state } = useAppContext();
  const { theme } = state;

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);

  const [selectedType, setSelectedType] = useState<string>(
    searchParams.get("sortType") || "trending"
  );

  useEffect(() => {
    setSelectedType(searchParams.get("sortType") || "trending");
  }, [location.search]);

  //   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setSearchQuery(event.target.value);
  //   };

  //   const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     navigate(getFilterUrl({ searchQuery }));
  //   };

  //   const handleTypeChange = (value: string) => {
  //     setSelectedType(value);
  //     navigate(
  //       getFilterUrl({
  //         searchQuery,
  //         sortType: value,
  //       })
  //     );
  //   };

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
            {/* <div className="toggle_btn">
              <div className="btn l_flex">
                <button
                  className={`main_btn l_flex ${
                    activeTab === "all_combo" ? "active" : ""
                  }`}
                  onClick={() => toggleTab("all_combo")}
                >
                  <small>All Markets</small>
                </button>
                <button
                  className={`main_btn l_flex ${
                    activeTab === "combo_blast" ? "active" : ""
                  }`}
                  onClick={() => toggleTab("combo_blast")}
                >
                  <small>ComboBlast</small>
                </button>
              </div>
            </div> */}
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
                    //onClick={() => handleTypeChange(item.value)}
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
