import { useAppContext } from "../../../utilities/utils/Utils";
import "./styles.scss";

function ComboBlastInfoMenu() {
  const { state } = useAppContext();
  const { theme } = state;
  return (
    <div className="comboblast_info_modal modal_menu max_width_modal">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <div className={`header  ${theme === "dark" ? "header_dark" : ""}`}>
          <div className="title">
            <h4>What is Tradebanta ComboBlast?</h4>
          </div>
          <div className="text">
            <small>
              ComboBlast offers high rewards but comes with significant risks.
              If even one of your predictions is incorrect, you lose your entire
              stake. Play responsibly.See how it works -Link
            </small>
          </div>
          <div className="btn c_flex">
            <button className="main_btn l_flex">
              <small>Don't Show Again</small>
            </button>
            <button className="main_btn remind_btn l_flex">
              <small>Remind Me Later</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComboBlastInfoMenu;
