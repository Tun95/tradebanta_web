import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./styles.scss";
import { useAppContext } from "../../../utilities/utils/Utils";
import Bookmark from "../../bookmark/Bookmark";
import { useSideDrawerMenuContext } from "../../../context/SideDrawerContext";

function BookmarkMenu() {
  const { onClose } = useSideDrawerMenuContext();
  
  const { state } = useAppContext();
  const { theme } = state;
  return (
    <div
      className={`bookmark_menu ${
        theme === "dark" ? "bookmark_menu_dark" : ""
      }`}
    >
      <div className="content">
        <div className="close_head_text c_flex">
          <div className="close_arrow">
            <KeyboardBackspaceIcon onClick={onClose} className="icon" />
          </div>
          <div className="head_text">
            <h5>Bookmarks</h5>
          </div>
          <div className="space"></div>
        </div>
        <div className="hr_divider"></div>
        <div className="list_items">
          <Bookmark />
        </div>
      </div>
    </div>
  );
}

export default BookmarkMenu;
