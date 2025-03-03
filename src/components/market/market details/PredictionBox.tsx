import "./styles.scss";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useAppContext } from "../../../utilities/utils/Utils";
// import { Radio } from "antd";

function PredictionBox() {
  const { state } = useAppContext();
  const { theme } = state;
  return (
    <div
      className={`prediction_box ${
        theme === "dark" ? "prediction_box_dark" : ""
      }`}
    >
      <div className="content">
        <div className="title_icon c_flex">
          <div className="space_icon"></div>
          <h4>
            Will Nigerian Senate pass the 2024 National Budget before January?
          </h4>
        </div>
        <div className="solo_currency c_flex">
          <div className="left">
            <div className="btn a_flex">
              <button className="main_btn active">
                <small>NGN</small>
              </button>{" "}
              <button className="main_btn">
                <small>USD</small>
              </button>
            </div>
          </div>
          <div className="right">
            <div className="form_group">
              <select name="win" id="win">
                <option value="solowin">SoloWin</option>
                <option value="solowin">SoloWin</option>
              </select>
            </div>
          </div>
        </div>
        <div className="pool_part c_flex">
          <div className="pool a_flex">
            <i className="fa-solid fa-layer-group"></i>
            <small>Current Pool</small>
            <h4>N1,350,000</h4>
          </div>
          <div className="vh_divider"></div>
          <div className="participant a_flex">
            <i className="fa-solid fa-users"></i>
            <small>Current Participant</small>
            <h4>10,000</h4>
          </div>
        </div>
        <div className="prediction">
          <div className="l_flex">
            <small>Your Prediction</small>
          </div>
          <div className="prediction_list">
            {/* <div className="candidates">
              <ul className="list">
                <li className="c_flex">
                  <label htmlFor="candidateA" className="c_flex">
                    <div className="left a_flex">
                      <div className="icon"></div>
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
                      <div className="icon"></div>
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
            </div> */}
          </div>
          <div className="btn c_flex">
            <button className="main_btn yes_btn">
              <p>Yes(80%)</p>
            </button>
            <button className="main_btn no_btn">
              <p>No(20%)</p>
            </button>
          </div>
        </div>
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
        <div className="current c_flex">
          <div className="left">
            <small className="a_flex">
              <p>Current Shares (dilutable)</p>
              <InfoOutlinedIcon className="icon" />
            </small>
          </div>
          <div className="right green">10%</div>
        </div>
        <div className="returns c_flex">
          <div className="left">
            <small className="a_flex">
              <p>Floating Returns</p>
              <InfoOutlinedIcon className="icon" />
            </small>
            <small className="text">
              <p>
                {" "}
                If the <span className="green">outcome</span> resolves to your
                prediction
              </p>
            </small>
          </div>
          <div className="right green">N750,000</div>
        </div>{" "}
        <div className="profit c_flex">
          <div className="left">
            <small className="a_flex">
              <p>Platform fee on profits</p>
              <InfoOutlinedIcon className="icon" />
            </small>
          </div>
          <div className="right red">5%</div>
        </div>
        <div className="lower_btn">
          <button className="main_btn">Confirm Prediction</button>
        </div>
      </div>
    </div>
  );
}

export default PredictionBox;
