import { useDropDownMenuContext } from "../../../context/DrawerContext";
import { useAppContext } from "../../../utilities/utils/Utils";

function YesAndNoBtn() {
  const { state } = useAppContext();
  const { theme } = state;

  const { setMenu, showDrawer } = useDropDownMenuContext();

  // Navigate Menu
  const navigateTo = () => {
    setMenu("combo_blast");
    showDrawer();
  };

  return (
    <div
      className={`yes_no_btn_component ${
        theme === "dark" ? "yes_no_btn_component_dark" : ""
      }`}
    >
      {" "}
      <div className="upper_text">
        <h5>Choose your Prediction</h5>
      </div>
      <div className="yes_no_btn c_flex">
        <div className="yes_btn">
          <button onClick={navigateTo} className="main_btn l_flex">
            Yes ({80}%)
          </button>
        </div>
        <div className="no_btn">
          <button onClick={navigateTo} className="main_btn l_flex">
            No ({20}%)
          </button>
        </div>
      </div>
      <div className="lower_text">
        <small>
          <p>
            If the <span className="green">outcome</span> resolves to your
            prediction
          </p>
        </small>
      </div>
    </div>
  );
}

export default YesAndNoBtn;
