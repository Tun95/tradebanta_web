import { useState } from "react";
import MarketFilters from "./MarketFilter";
import "./styles.scss";
import ComboBlast from "./ComboBlast";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useAppContext } from "../../../utilities/utils/Utils";
import { useDropDownMenuContext } from "../../../context/DrawerContext";
import l1 from "../../../assets/home/l1.png";
import l2 from "../../../assets/home/l2.png";
import c1 from "../../../assets/home/c1.png";
import MarketCards from "./MarketCards";

const List = [
  {
    id: 1,
    title: "Who will win the Ondo State Gubernatorial Election?",
    image: l1,
    slug: "ondo-election",
    endsIn: "2021-06-01",
    category: "Election",
    type: "election" as const, // Explicitly typed as "election"
    pool: 2000000,
    comments: 100,
    candidates: [
      { image: c1, name: "Candidate A", percentage: 80, id: "candidateA" },
      { image: c1, name: "Candidate B", percentage: 20, id: "candidateB" },
    ],
  },
  {
    id: 2,
    title: "Will Manchester United win against Arsenal?",
    image: l2,
    slug: "manu-vs-arsenal",
    endsIn: "2021-06-01",
    category: "Football",
    type: "event" as const, // Explicitly typed as "event"
    pool: 1500000,
    comments: 50,
    yesPercentage: 60,
    noPercentage: 40,
  },
  {
    id: 3,
    title: "Will there be a draw in the upcoming Chess tournament?",
    image: l2,
    slug: "chess-tournament",
    endsIn: "2021-06-01",
    category: "Chess",
    type: "event" as const, // Explicitly typed as "event"
    pool: 1000000,
    comments: 25,
    yesPercentage: 30,
    noPercentage: 70,
  },
  {
    id: 4,
    title: "Who will win the Lagos State Gubernatorial Election?",
    image: l1,
    slug: "lagos-election",
    endsIn: "2021-06-01",
    category: "Election",
    type: "election" as const, // Explicitly typed as "election"
    pool: 2500000,
    comments: 150,
    candidates: [
      { image: c1, name: "Candidate X", percentage: 60, id: "candidateX" },
      { image: c1, name: "Candidate Y", percentage: 40, id: "candidateY" },
    ],
  },
  {
    id: 5,
    title: "Who will win the Ondo State Gubernatorial Election?",
    image: l1,
    slug: "ondo-election",
    endsIn: "2021-06-01",
    category: "Election",
    type: "election" as const, // Explicitly typed as "election"
    pool: 2000000,
    comments: 100,
    candidates: [
      { image: c1, name: "Candidate A", percentage: 80, id: "candidateA" },
      { image: c1, name: "Candidate B", percentage: 20, id: "candidateB" },
    ],
  },
  {
    id: 6,
    title: "Will Manchester United win against Arsenal?",
    image: l2,
    slug: "manu-vs-arsenal",
    endsIn: "2021-06-01",
    category: "Football",
    type: "event" as const, // Explicitly typed as "event"
    pool: 1500000,
    comments: 50,
    yesPercentage: 60,
    noPercentage: 40,
  },
];

function Market() {
  const { state } = useAppContext();
  const { theme } = state;

  const { setMenu, showDrawer } = useDropDownMenuContext();

  // Navigate Menu
  const navigateTo = () => {
    setMenu("combo_blast");
    showDrawer();
  };

  //TOOGLE MODE
  const [activeTab, setActiveTab] = useState("");
  // Toggle between "all market" and "comboblast"
  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="home_post market_post">
      <div className="home_component_content">
        <div className="filters">
          <MarketFilters activeTab={activeTab} toggleTab={toggleTab} />
        </div>
        <div className="post_itmes ">
          <span className="all_combo f_flex">
            {/* ALL COMBO */}
            <span className="_combo">
              <div
                className={`post_list  ${
                  activeTab === "combo_blast" && "grid_2"
                }`}
              >
                {List.map((item, index) => (
                  <MarketCards
                    item={item}
                    key={index}
                    index={index}
                    activeTab={activeTab}
                    toggleTab={toggleTab}
                  />
                ))}
              </div>
              <div className="load_more l_flex">
                <div className="btn">
                  <button className="main_btn l_fex">
                    <p>Load More</p>
                  </button>
                </div>
              </div>
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
