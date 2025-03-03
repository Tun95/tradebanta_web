import { Link } from "react-router-dom";
// import pr from "../../../assets/icons/pr.png";
// import od from "../../../assets/icons/od.png";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TruncateMarkup from "react-truncate-markup";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useAppContext } from "../../../utilities/utils/Utils";
// import { useState } from "react";
import { Radio } from "antd";
import { useState } from "react";

const List = [
  {
    title:
      " Will Nigerian Senate pass the 2024 National Budget before January?",
    choice: { label: "yes", value: 80 },
  },
  {
    title:
      " Will Nigerian Senate pass the 2024 National Budget before January?",
    choice: { label: "no", value: 70 },
  },
  {
    title:
      " Will Nigerian Senate pass the 2024 National Budget before January?",
    choice: { label: "no", value: 70 },
  },
  {
    title:
      " Will Nigerian Senate pass the 2024 National Budget before January?",
    choice: { label: "yes", value: 80 },
  },
];

function ComboBlast() {
  const { state, setMenu, showDrawer } = useAppContext();
  const { theme } = state;

  // State to manage candidates list visibility
  // const [isOpen, setIsOpen] = useState(false);

  // // Function to toggle the  list
  // const toggleList = () => {
  //   setIsOpen((prevState) => !prevState);
  // };

  //TOOGLE
  const [activeTab, setActiveTab] = useState("solo");

  // Toggle between "login" and "register"
  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };

  // RADIO BTN
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleCurrencyChange = (e: any) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div
      className={`combo_blast ${theme === "dark" ? "combo_blast_dark" : ""}`}
    >
      <div className="combo_content">
        <div className="toggle_btn">
          <div className="btn l_flex">
            <button
              className={`main_btn l_flex ${
                activeTab === "solo" ? "active" : ""
              }`}
              onClick={() => toggleTab("solo")}
            >
              <small>Solo Win</small>
            </button>
            <button
              className={`main_btn l_flex ${
                activeTab === "combo" ? "active" : ""
              }`}
              onClick={() => toggleTab("combo")}
            >
              <small>Combo Blast</small>
            </button>
          </div>
        </div>
        {activeTab === "combo" && (
          <div className="combo_header">
            <div className="head_text">
              <h4>Your ComboBlast Games</h4>
            </div>
            <div className="text">
              <small>
                <p>
                  ComboBlast offers high rewards but comes with significant
                  risks. Play responsibly.
                </p>
              </small>
            </div>
            <Link
              to=""
              onClick={() => {
                setMenu("comboblast_info");
                showDrawer();
              }}
            >
              <small>See how it works</small>
            </Link>
          </div>
        )}
        {activeTab === "solo" && (
          <>
            <div className="title_icon c_flex">
              <div className="space_icon"></div>
              <h4>
                Will Nigerian Senate pass the 2024 National Budget before
                January?
              </h4>
            </div>

            <div className="solo_prediction">
              <div className="l_flex">
                <small>Your Prediction</small>
              </div>
              <div className="candidates c_flex">
                <div className="left">
                  <div className="img_name a_flex">
                    <div className="img">{/* <img src="" alt="" /> */}</div>
                    <div className="name">
                      <small>Candidate A</small>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="percentage l_flex">
                    <small className="">80%</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="select_wallet">
              <div className="l_flex">
                <small>Select Wallet</small>
              </div>
              <div className="usd_ngn_btn c_flex">
                <Radio.Group
                  onChange={handleCurrencyChange}
                  value={selectedCurrency}
                  className="radio_group c_flex"
                >
                  <button
                    className={`main_btn l_flex ${
                      selectedCurrency === "USD" ? "active" : ""
                    }`}
                    onClick={() => setSelectedCurrency("USD")}
                  >
                    <Radio value="USD" />
                    <p>Yes/No</p>
                  </button>
                  <button
                    className={`main_btn l_flex ${
                      selectedCurrency === "NGN" ? "active" : ""
                    }`}
                    onClick={() => setSelectedCurrency("NGN")}
                  >
                    <Radio value="NGN" />
                    <p>Multiple Choice</p>
                  </button>
                </Radio.Group>
              </div>
            </div>
          </>
        )}
        {activeTab === "combo" && (
          <div className="combo_predictions">
            {/* <div className="no_predictions not_found_space l_flex">
            <div className="img">
              <img src={pr} alt="no_predictions" className="white_image" />
            </div>
            <div className="text">
              <small>
                <p>Selected prediction appears here</p>
              </small>
            </div>
          </div> */}
            <div className="predictions_list">
              <ul className="list">
                {List.map((item, index) => (
                  <li className="list_item a_flex" key={index}>
                    <div className="space_icon"></div>
                    <div className="title_choice">
                      <div className="title c_flex">
                        <TruncateMarkup lines={1}>
                          <h5>{item.title}</h5>
                        </TruncateMarkup>
                        <CloseOutlinedIcon className="icon" />
                      </div>
                      <div className="choice">
                        <small className="a_flex">
                          Choice •
                          {item.choice.label === "yes" ? (
                            <h4 className="green">
                              Yes ({item.choice.value})%
                            </h4>
                          ) : (
                            item.choice.label === "no" && (
                              <h4 className="red a_flex">
                                Candidate A({item.choice.value})%
                              </h4>
                            )
                          )}
                        </small>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="add_more_game">
              <small>
                <p>
                  Add more 3 games to calculate your Combo Blast game and win
                  higher.
                </p>
              </small>
            </div>
          </div>
        )}
        <div className="lower_combo">
          {" "}
          {activeTab === "combo" && (
            <>
              {" "}
              <div className="profit c_flex">
                <div className="left">
                  <small className="a_flex">
                    <p>Base Odds</p>
                    <InfoOutlinedIcon className="icon" />
                  </small>
                </div>
                <div className="right green">2.5 Odds</div>
              </div>{" "}
              <div className="profit c_flex">
                <div className="left">
                  <small className="a_flex">
                    <p>Bonus Odds</p>
                    <InfoOutlinedIcon className="icon" />
                  </small>
                </div>
                <div className="right green">+23 Odds</div>
              </div>
            </>
          )}
          <div className="stake">
            <div className="l_flex">
              <small>Your Stake</small>
            </div>
            <div className="form_group c_flex">
              <button className="main_btn l_flex">
                <RemoveIcon className="icon" />
              </button>
              <div className="count">N500,000</div>{" "}
              <button className="main_btn l_flex">
                <AddIcon className="icon" />
              </button>
            </div>
          </div>
          {activeTab === "solo" && (
            <>
              <div className="returns d_flex">
                <div className="left">
                  <small className="a_flex">
                    <p>Amount in USD</p>
                    <InfoOutlinedIcon className="icon" />
                  </small>
                  <small className="text">
                    <p>
                      {" "}
                      Checkout <span className="yellow">FX Rate</span> to see
                      Tradebanta Rate
                    </p>
                  </small>
                </div>
                <div className="right green">$250</div>
              </div>
              <div className="returns d_flex">
                <div className="left">
                  <small className="a_flex">
                    <p>Current Shares (dilutable)</p>
                    <InfoOutlinedIcon className="icon" />
                  </small>
                </div>
                <div className="right green">10%</div>
              </div>
              <div className="returns d_flex">
                <div className="left">
                  <small className="a_flex">
                    <p>Floating Returns</p>
                    <InfoOutlinedIcon className="icon" />
                  </small>
                  <small className="text">
                    <p>
                      {" "}
                      If the <span className="yellow">outcome</span> resolves to
                      your prediction
                    </p>
                  </small>
                </div>
                <div className="right green">N750,000</div>
              </div>
              <div className="returns d_flex">
                <div className="left">
                  <small className="a_flex">
                    <p>Platform fee on profits</p>
                    <InfoOutlinedIcon className="icon" />
                  </small>
                </div>
                <div className="right green">5%</div>
              </div>
            </>
          )}
          {activeTab === "combo" && (
            <>
              {" "}
              <div className="current c_flex">
                <div className="left">
                  <small className="a_flex">
                    <h4>Total Odds</h4>
                  </small>
                </div>
                <div className="right green">2.5 Odds</div>
              </div>
              <div className="returns d_flex">
                <div className="left">
                  <small className="a_flex">
                    <p>Potential Returns</p>
                    <InfoOutlinedIcon className="icon" />
                  </small>
                  <small className="text">
                    <p>
                      {" "}
                      If all the <span className="yellow">outcome</span>{" "}
                      resolves to your prediction
                    </p>
                  </small>
                </div>
                <div className="right green">N750,000</div>
              </div>
            </>
          )}
          <div className="lower_btn">
            <div className="btn">
              <button className="main_btn">Confirm Prediction</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComboBlast;
