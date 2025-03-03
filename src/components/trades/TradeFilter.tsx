import { Select } from "antd";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  FluentArrowSort20Filled,
  FluentSlideSearch16Regular,
} from "../../common/icons/Icons";

// ANTD SELECT OPTIONS
const options = [
  {
    value: "deposit",
    label: "Deposit",
    icon: <FiberManualRecordIcon className="icon green deposit_icon" />,
  },
  {
    value: "bet placed",
    label: "Bet Placed",
    icon: <FiberManualRecordIcon className="icon purple bet_icon" />,
  },
  {
    value: "winnings credited",
    label: "Winnings Credited",
    icon: <FiberManualRecordIcon className="icon green winning_icon" />,
  },
  {
    value: "bonus credited",
    label: "Bonus Credited",
    icon: <FiberManualRecordIcon className="icon blue bonus_icon" />,
  },
  {
    value: "withdrawal",
    label: "Withdrawal",
    icon: <FiberManualRecordIcon className="icon red withdraw_icon" />,
  },
];
function TradeFilter() {
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="trade_filter_box">
      {" "}
      <div className="trans_filter_box a_flex">
        <div className="left">
          {" "}
          <form action="" className="form_box">
            <div className="form_group form_input a_flex">
              <span className="icon a_flex">
                <FluentSlideSearch16Regular className="icon" />
              </span>
              <input type="serach" placeholder="Search for Prediction" />
            </div>
          </form>
        </div>
        <div className="right ">
          <div className="form_group form_select a_flex">
            <FluentArrowSort20Filled className="icon" />
            <Select
              className="custom-select"
              placeholder="All Trades"
              onChange={handleChange}
              options={options.map((option) => ({
                value: option.value,
                label: (
                  <span className="select_span a_flex">
                    <span className="icon"> {option.icon}</span>
                    <span>{option.label}</span>
                  </span>
                ),
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeFilter;
