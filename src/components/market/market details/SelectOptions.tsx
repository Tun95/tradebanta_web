import { Radio } from "antd";
import { useAppContext } from "../../../utilities/utils/Utils";
import c1 from "../../../assets/home/c1.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function SelectOptions() {
  const { state } = useAppContext();
  const { theme } = state;

  const [isCandidatesOpen, setIsCandidatesOpen] = useState(false);

  useEffect(() => {
    // Check screen size on initial render
    const mediaQuery = window.matchMedia("(max-width: 450px)");

    // Update the state based on screen size
    const handleScreenChange = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        setIsCandidatesOpen(true);
      } else {
        setIsCandidatesOpen(false);
      }
    };

    // Add the listener and check the initial state
    mediaQuery.addEventListener("change", handleScreenChange);
    handleScreenChange(mediaQuery as unknown as MediaQueryListEvent);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  const toggleCandidatesList = () => {
    if (window.matchMedia("(max-width: 450px)").matches) {
      setIsCandidatesOpen((prevState) => !prevState);
    }
  };

  return (
    <div
      className={`select_options_component ${
        theme === "dark" ? "select_options_component_dark" : ""
      }`}
    >
      {/* OPEN CANDIDATES LIST */}
      <div className="select_btn">
        <button className="main_btn" onClick={toggleCandidatesList}>
          <small className="c_flex">
            <p>Choose your Prediction</p>
            {isCandidatesOpen ? (
              <KeyboardArrowDownIcon className="icon" />
            ) : (
              <KeyboardArrowUpIcon className="icon" />
            )}
          </small>
        </button>

        {isCandidatesOpen && (
          <div className="candidates">
            <ul className="list">
              <li className="c_flex">
                <label htmlFor="candidateA" className="c_flex">
                  <div className="left a_flex">
                    <div className="icon">
                      <img src={c1} alt="candidate_img" />
                    </div>
                    <small>Candidate A</small>
                  </div>
                  <div className="right a_flex">
                    <small>
                      <p className="percentage">80%</p>
                    </small>
                    <Radio className="radio" id="candidateA"></Radio>
                  </div>
                </label>
              </li>
              <li className="c_flex">
                <label htmlFor="candidateB" className="c_flex">
                  <div className="left a_flex">
                    <div className="icon">
                      <img src={c1} alt="candidate_img" />
                    </div>
                    <small>Candidate B</small>
                  </div>
                  <div className="right a_flex">
                    <small>
                      <p className="percentage">70%</p>
                    </small>
                    <Radio className="radio" id="candidateB"></Radio>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectOptions;
