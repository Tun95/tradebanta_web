import { useAppContext } from "../../../utilities/utils/Utils";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Checkbox as MyCheckbox } from "@mui/material";
import { BpCheckedIcon, BpIcon } from "../../../utilities/component/component";

interface Option {
  id: string;
  name: string;
  imageUrl?: string;
  playerCount: number;
  bonusOdds?: number;
}

interface SelectOptionsProps {
  options: Option[]; // Accept options as a prop
}

function SelectOptions({ options }: SelectOptionsProps) {
  const { state } = useAppContext();
  const { theme } = state;

  const [isCandidatesOpen, setIsCandidatesOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

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

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption((prev) => (prev === optionId ? null : optionId));
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
              {options.map((option) => (
                <li
                  key={option.id}
                  className="c_flex"
                  onClick={() => handleOptionSelect(option.id)}
                >
                  <label htmlFor={`candidate-${option.id}`} className="c_flex">
                    <div className="left a_flex">
                      <div className="icon">
                        <img
                          src={
                            option.imageUrl || "https://via.placeholder.com/50"
                          }
                          alt={option.name}
                        />
                      </div>
                      <small>{option.name}</small>
                    </div>
                    <div className="right a_flex">
                      <small>
                        <p className="percentage">{option.playerCount}%</p>
                      </small>
                      <span onClick={(event) => event.stopPropagation()}>
                        <MyCheckbox
                          sx={{
                            padding: 0,
                            marginRight: 1,
                            "&:hover": { bgcolor: "transparent" },
                          }}
                          disableRipple
                          color="default"
                          checkedIcon={<BpCheckedIcon />} // Checked state
                          icon={<BpIcon />} // Default state
                          checked={selectedOption === option.id}
                          onChange={() => handleOptionSelect(option.id)}
                          inputProps={{
                            "aria-label": `Select ${option.name}`,
                          }}
                        />
                      </span>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectOptions;
