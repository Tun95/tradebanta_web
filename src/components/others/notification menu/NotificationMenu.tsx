import { useState } from "react";
import "./styles.scss";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useAppContext } from "../../../utilities/utils/Utils";
import { HugeiconsSettings01 } from "../../../common/icons/Icons";

const List = [
  {
    id: "1",
    title: "Game Update",
    status: ["unread"],
    description:
      "Your prediction for Team A vs. Team B has been recorded. Track the pool now!",
  },
  {
    id: "1",
    title: "Game Update",
    status: ["unread"],
    description:
      "Your prediction for Team A vs. Team B has been recorded. Track the pool now!",
  },
  {
    id: "2",
    title: "Game Update",
    status: ["unread"],
    description:
      "Your prediction for Team A vs. Team B has been recorded. Track the pool now!",
  },
  {
    id: "3",
    title: "Game Update",
    status: ["unread"],
    description:
      "Your prediction for Team A vs. Team B has been recorded. Track the pool now!",
  },
  {
    id: "4",
    title: "Game Update",
    status: ["read"],
    description:
      "Your prediction for Team A vs. Team B has been recorded. Track the pool now!",
  },
  {
    id: "5",
    title: "Game Update",
    status: ["read"],
    description:
      "Your prediction for Team A vs. Team B has been recorded. Track the pool now!",
  },
  {
    id: "6",
    title: "Game Update",
    status: ["read"],
    description:
      "Your prediction for Team A vs. Team B has been recorded. Track the pool now!",
  },
  {
    id: "6",
    title: "Game Update",
    status: ["read"],
    description:
      "Your prediction for Team A vs. Team B has been recorded. Track the pool now!",
  },
  {
    id: "6",
    title: "Game Update",
    status: ["read"],
    description:
      "Your prediction for Team A vs. Team B has been recorded. Track the pool now!",
  },
];

// COLORS
const colors = [
  "var(--color-light-light-pink)",
  "var(--color-light-light-blue)",
  "var(--color-light-light-gray-bg)",
];

function NotificationMenu() {
  const { state, handleCloseMenu } = useAppContext();
  const { theme } = state;

  const [activeTab, setActiveTab] = useState<"General" | "Inbox" | "Archived">(
    "General"
  );

  // Function to switch tabs
  const switchTab = (tab: "General" | "Inbox" | "Archived") => {
    setActiveTab(tab);
  };

  // Filter messages based on active tab
  const filteredMessages = List.filter((message) => {
    if (activeTab === "General") return true; // Show all messages
    if (activeTab === "Inbox") return message.status.includes("unread");
    if (activeTab === "Archived") return message.status.includes("read");
    return true;
  });

  return (
    <div
      className={`notification_menu ${
        theme === "dark" ? "notification_menu_dark" : ""
      }`}
    >
      <div className="content">
        <div className="close_head_text c_flex">
          <div className="close_arrow">
            <KeyboardBackspaceIcon
              onClick={handleCloseMenu("Notification")}
              className="icon"
            />
          </div>
          <div className="head_text">
            <h5>Notifications</h5>
          </div>
          <div className="space"></div>
        </div>
        <div className="noti_header">
          <div className="top c_flex">
            <div className="left">
              <h5>Notifications</h5>
            </div>
            <div className="right a_flex">
              <div className="mark_all">
                <small>
                  <p>Mark all as read</p>
                </small>
              </div>
              <div className="settings_icon a_flex">
                <HugeiconsSettings01 className="icon" />
              </div>
            </div>
          </div>
          <div className="bottom">
            {/* Tabs */}
            <div className="tabs">
              <div className="btn c_flex">
                <button
                  className={`main_btn l_flex ${
                    activeTab === "General" ? "active" : ""
                  }`}
                  onClick={() => switchTab("General")}
                >
                  <small className="a_flex">
                    <p>General</p>
                    <span className="count l_flex">{List.length}</span>
                  </small>
                </button>
                <button
                  className={`main_btn l_flex ${
                    activeTab === "Inbox" ? "active" : ""
                  }`}
                  onClick={() => switchTab("Inbox")}
                >
                  <small className="a_flex">
                    <p>Inbox</p>
                    <span className="count l_flex">
                      {
                        List.filter((msg) => msg.status.includes("unread"))
                          .length
                      }
                    </span>
                  </small>
                </button>
                <button
                  className={`main_btn l_flex ${
                    activeTab === "Archived" ? "active" : ""
                  }`}
                  onClick={() => switchTab("Archived")}
                >
                  <small className="a_flex">
                    <p>Archived</p>
                  </small>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="messages">
          {/* Message List */}
          <div className="list">
            {filteredMessages.map((item, index) => (
              <Link
                to=""
                className={`list_item f_flex ${
                  item.status.includes("unread") ? "unread" : "read"
                }`}
                key={index}
              >
                <div className="left">
                  <div className="icon_color a_flex">
                    <CircleIcon
                      className="icon"
                      style={{ color: colors[index % colors.length] }}
                    />
                  </div>
                </div>
                <div className="right">
                  <div className="title_icon a_flex">
                    <div className="title">
                      <h5>{item.title}</h5>
                    </div>
                    {item.status.includes("unread") && (
                      <div className="unread_icon a_flex">
                        <CircleIcon className="icon" />
                      </div>
                    )}
                  </div>
                  <div className="text">
                    <small>{item.description}</small>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationMenu;
