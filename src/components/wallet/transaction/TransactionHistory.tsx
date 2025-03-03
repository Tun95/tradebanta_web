// import pr from "../../../assets/icons/pr.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Select } from "antd";
import TransactionTable from "./TransactionTable";
import {
  FluentArrowSort20Filled,
  FluentSlideSearch16Regular,
} from "../../../common/icons/Icons";

const List = [
  {
    date: "10:34 PM • Nov 15, 2024",
    transaction_type: "deposit",
    details: "Funded wallet via bank transfer",
    amount: 10000,
  },
  {
    date: "10:34 PM • Nov 15, 2024",
    transaction_type: "bet placed",
    details: "Funded wallet via bank transfer",
    amount: 10000,
  },
  {
    date: "10:34 PM • Nov 15, 2024",
    transaction_type: "winnings credited",
    details: "Funded wallet via bank transfer",
    amount: 10000,
  },
  {
    date: "10:34 PM • Nov 15, 2024",
    transaction_type: "bonus credited",
    details: "Funded wallet via bank transfer",
    amount: 1000000,
  },
  {
    date: "10:34 PM • Nov 15, 2024",
    transaction_type: "withdrawal",
    details: "Funded wallet via bank transfer",
    amount: 10000,
  },
];

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

function TransactionHistory() {
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="transaction_history">
      <div className="content">
        <div className="head_text">
          <h4>Transaction History</h4>
        </div>
        <div className="trans_filter_box c_flex">
          <div className="left">
            {" "}
            <form action="" className="form_box">
              <div className="form_group form_input a_flex">
                <span className="icon a_flex">
                  <FluentSlideSearch16Regular className="icon" />
                </span>
                <input type="serach" placeholder="Search for Transaction" />
              </div>
            </form>
          </div>
          <div className="right ">
            <div className="form_group form_select a_flex">
              <FluentArrowSort20Filled className="icon" />
              {/* <select name="trades" id="trades">
                <option disabled selected>
                  Sort Transaction
                </option>
                <option value="deposit" className="a_flex">
                  <FiberManualRecordIcon className="icon" />
                  <p>Deposit</p>
                </option>
                <option value="bet placed" className="a_flex">
                  <FiberManualRecordIcon className="icon" />
                  <p>Bet Placed</p>
                </option>
                <option value="winnings credited" className="a_flex">
                  <FiberManualRecordIcon className="icon" />
                  <p> Winnings Credited</p>
                </option>
                <option value="bonus credited" className="a_flex">
                  <FiberManualRecordIcon className="icon" />
                  <p>Bonus Credited</p>
                </option>{" "}
                <option value="withdrawal" className="a_flex">
                  <FiberManualRecordIcon className="icon" />
                  <p>Withdrawal</p>
                </option>
              </select> */}
              <Select
                className="custom-select"
                placeholder="Sort Transaction"
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
        <div className="transaction_table">
          <TransactionTable List={List} />
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
