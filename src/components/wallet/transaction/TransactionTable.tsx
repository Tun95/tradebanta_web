import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  formatNumberWithCommas,
  useAppContext,
} from "../../../utilities/utils/Utils";
import TruncateMarkup from "react-truncate-markup";
import { Popover } from "antd";
import { Link } from "react-router-dom";
import {
  GravityUiGift,
  HugeiconsDocumentAttachment,
  HugeiconsFile01,
  HugeiconsRoad01,
  HugeiconsShare03,
  MaterialSymbolsAdd2,
  MingcuteFlag3Line,
} from "../../../common/icons/Icons";

interface Transaction {
  date: string;
  transaction_type: string;
  details: string;
  amount: number;
}

interface TransactionTableProps {
  List: Transaction[];
}

function TransactionTable({ List }: TransactionTableProps) {
  const { state, showDrawer, setMenu } = useAppContext();
  const { theme } = state;

  const actionMap: {
    [key: string]: {
      label: string;
      icon: JSX.Element;
      action: string | (() => void);
    }[];
  } = {
    deposit: [
      {
        label: "View Receipt",
        icon: <HugeiconsFile01 className="icon_popover" />,
        action: "/view-receipt",
      },
      {
        label: "Report Issue",
        icon: <MingcuteFlag3Line className="icon_popover" />,
        action: () => {
          setMenu("deposit_issue");
          showDrawer();
        },
      },
      {
        label: "Add Funds",
        icon: <MaterialSymbolsAdd2 className="icon_popover" />,
        action: () => {
          setMenu("fund_wallet");
          showDrawer();
        },
      },
    ],
    "bet placed": [
      {
        label: "View Bet Details",
        icon: <HugeiconsFile01 className="icon_popover" />,
        action: "/trades",
      },
      {
        label: "Track Event",
        icon: <HugeiconsRoad01 className="icon_popover" />,
        action: () => console.log("Track Event clicked"),
      },
    ],
    "winnings credited": [
      {
        label: "View Breakdown",
        icon: <HugeiconsFile01 className="icon_popover" />,
        action: "/view-breakdown",
      },
      {
        label: "Track Event Outcome",
        icon: <HugeiconsRoad01 className="icon_popover" />,
        action: () => console.log("Track Event Outcome clicked"),
      },
      {
        label: "Share Win",
        icon: <HugeiconsShare03 className="icon_popover" />,
        action: "/share-win",
      },
    ],
    "bonus credited": [
      {
        label: "View Details",
        icon: <HugeiconsFile01 className="icon_popover" />,
        action: "/view-details",
      },
      {
        label: "Use Bonus",
        icon: <GravityUiGift className="icon_popover" />,
        action: () => console.log("Use Bonus clicked"),
      },
      {
        label: "Claim Issue",
        icon: <HugeiconsDocumentAttachment className="icon_popover" />,
        action: () => {
          setMenu("bonus_claim_issue");
          showDrawer();
        },
      },
    ],
    withdrawal: [
      {
        label: "View Details",
        icon: <HugeiconsFile01 className="icon_popover" />,
        action: "/view-receipt",
      },

      {
        label: "Report Issue",
        icon: <MingcuteFlag3Line className="icon_popover" />,
        action: () => {
          setMenu("withdrawal_issue");
          showDrawer();
        },
      },
    ],
  };

  const backgroundColor = theme === "dark" ? "#111928" : "#ffffff";

  return (
    <div>
      {" "}
      <div
        className={`transact_list light_shadow ${
          theme === "dark" ? "transact_list_dark" : ""
        }`}
      >
        {/* <div className="no_transaction l_flex">
    <div className="icon">
      <img src={pr} alt="icon_img" className="white_image" />
    </div>
    <div className="text">No Recent Transaction</div>
  </div> */}
        <div className="window_trans_table">
          {" "}
          <TableContainer className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="tabel_head">
                <TableRow>
                  <TableCell className="tableCell">Date</TableCell>
                  <TableCell className="tableCell">Transaction Type</TableCell>
                  <TableCell className="tableCell">Details</TableCell>
                  <TableCell className="tableCell">Amount</TableCell>
                  <TableCell className="tableCell"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="tableCenter p_flex">
                {List.slice(0, 10).map((item, index) => {
                  const actions = actionMap[item.transaction_type] || [];

                  return (
                    <TableRow key={index}>
                      <TableCell className="tableCell date">
                        {item.date}
                      </TableCell>
                      <TableCell className="tableCell">
                        {item.transaction_type === "deposit" ? (
                          <span className="a_flex">
                            <span className="_icon">
                              <SouthWestIcon className="icon green" />
                            </span>
                            <span>Deposit</span>
                          </span>
                        ) : item.transaction_type === "bet placed" ? (
                          <span className="a_flex">
                            <span className="_icon">
                              <NorthEastIcon className="icon bet_icon" />
                            </span>
                            <span>Bet Placed</span>
                          </span>
                        ) : item.transaction_type === "winnings credited" ? (
                          <span className="a_flex">
                            <span className="_icon">
                              <SouthWestIcon className="icon green" />
                            </span>
                            <span>Winnings Credited</span>
                          </span>
                        ) : item.transaction_type === "bonus credited" ? (
                          <span className="a_flex">
                            <span className="_icon">
                              <SouthWestIcon className="icon bonus_icon" />
                            </span>
                            <span>Bonus Credited</span>
                          </span>
                        ) : (
                          item.transaction_type === "withdrawal" && (
                            <span className="a_flex">
                              <span className="_icon">
                                <NorthEastIcon className="icon red" />
                              </span>
                              <span>Withdrawal</span>
                            </span>
                          )
                        )}
                      </TableCell>
                      <TableCell className="tableCell">
                        <TruncateMarkup lines={1}>
                          <p>{item.details}</p>
                        </TruncateMarkup>
                      </TableCell>
                      <TableCell className="tableCell">
                        <div className="a_flex">
                          {item.transaction_type === "withdrawal" ? (
                            <span className="_icon ">
                              <AutorenewIcon className="icon auto_icon" />
                            </span>
                          ) : (
                            <span className="_icon ">
                              <CheckCircleIcon className="icon green" />
                            </span>
                          )}
                          <span>N{item.amount.toLocaleString()}</span>
                        </div>
                      </TableCell>
                      <TableCell className="tableCell popover_link_btn">
                        <Popover
                          placement="bottomRight"
                          arrow={false}
                          content={
                            <ul
                              className={`popover_list ${
                                theme === "dark" ? "popover_list_dark" : ""
                              }`}
                            >
                              {actions.map((action, i) => (
                                <li
                                  key={i}
                                  style={{
                                    margin: "5px 0",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  {typeof action.action === "string" ? (
                                    <Link
                                      className="popover_link"
                                      to={action.action}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      {action.icon}
                                      <span style={{ marginLeft: "8px" }}>
                                        {action.label}
                                      </span>
                                    </Link>
                                  ) : (
                                    <span
                                      className="popover_btn"
                                      onClick={action.action}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      {action.icon}
                                      <span style={{ marginLeft: "8px" }}>
                                        {action.label}
                                      </span>
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          }
                          trigger="click"
                          overlayInnerStyle={{
                            padding: 0,
                            backgroundColor: backgroundColor,
                            borderRadius: "10px",
                          }}
                        >
                          <MoreVertIcon className="icon menu_icon" />
                        </Popover>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="mobile_trans_table">
          <div className="boxes">
            {List.slice(0, 10).map((item, index) => {
              const actions = actionMap[item.transaction_type] || [];
              return (
                <div className="box light_shadow" key={index}>
                  <div className="header_text_icon c_flex">
                    {item.transaction_type === "deposit" ? (
                      <small className="left a_flex">
                        <SouthWestIcon className="icon green" />
                        <p>Deposit</p>
                      </small>
                    ) : item.transaction_type === "bet placed" ? (
                      <small className="left a_flex">
                        <NorthEastIcon className="icon bet_icon" />
                        <p>Bet Placed</p>
                      </small>
                    ) : item.transaction_type === "winnings credited" ? (
                      <small className="left a_flex">
                        <SouthWestIcon className="icon green" />
                        <p>Winnings Credited</p>
                      </small>
                    ) : item.transaction_type === "bonus credited" ? (
                      <small className="left a_flex">
                        <SouthWestIcon className="icon bonus_icon" />
                        <p>Bonus Credited</p>
                      </small>
                    ) : (
                      item.transaction_type === "withdrawal" && (
                        <small className="left a_flex">
                          <NorthEastIcon className="icon red" />
                          <p>Withdrawal</p>
                        </small>
                      )
                    )}
                    <div className="right">
                      {/* Popover added here */}
                      <Popover
                        placement="bottomRight"
                        arrow={false}
                        content={
                          <ul
                            className={`popover_list ${
                              theme === "dark" ? "popover_list_dark" : ""
                            }`}
                          >
                            {actions.map((action, i) => (
                              <li
                                key={i}
                                style={{
                                  margin: "5px 0",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {typeof action.action === "string" ? (
                                  <Link
                                    className="popover_link a_flex"
                                    to={action.action}
                                  >
                                    <span className="a_flex">
                                      {action.icon}
                                    </span>
                                    <span style={{ marginLeft: "8px" }}>
                                      {action.label}
                                    </span>
                                  </Link>
                                ) : (
                                  <span
                                    className="popover_btn a_flex"
                                    onClick={action.action}
                                  >
                                    <span className="a_flex">
                                      {action.icon}
                                    </span>
                                    <span style={{ marginLeft: "8px" }}>
                                      {action.label}
                                    </span>
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        }
                        trigger="click"
                        overlayInnerStyle={{
                          padding: 0,
                          backgroundColor: backgroundColor,
                          borderRadius: "10px",
                        }}
                      >
                        <MoreVertIcon className="icon menu_icon" />
                      </Popover>
                    </div>
                  </div>
                  <div className="detials c_flex">
                    <small className="left">
                      <div className="text">{item.details}</div>
                      <div className="date gray">{item.date}</div>
                    </small>
                    <small className="right a_flex">
                      <div className="amount a_flex">
                        {item.transaction_type === "withdrawal" ? (
                          <span className="_icon ">
                            <AutorenewIcon className="icon  auto_icon" />
                          </span>
                        ) : (
                          <span className="_icon ">
                            <CheckCircleIcon className="icon green" />
                          </span>
                        )}
                        <span>N{formatNumberWithCommas(item.amount)}</span>
                      </div>
                      <div className="amount_text">Amount</div>
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="show_more tarns_show_more l_flex">
        <div className="btn">
          <button className="main_btn">See More History</button>
        </div>
      </div>
    </div>
  );
}

export default TransactionTable;
