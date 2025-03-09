import { useDropDownMenuContext } from "../../../context/DrawerContext";
import { useAppContext } from "../../../utilities/utils/Utils";

interface Option {
  id: string;
  name: string;
  playerCount: number;
  bonusOdds?: number;
}

interface YesAndNoBtnProps {
  options: Option[]; // Accept options as a prop
}

function YesAndNoBtn({ options }: YesAndNoBtnProps) {
  const { state } = useAppContext();
  const { theme } = state;

  const { setMenu, showDrawer } = useDropDownMenuContext();

  // Navigate Menu
  const navigateTo = () => {
    setMenu("combo_blast");
    showDrawer();
  };

  // Find the "Yes" and "No" options
  const yesOption = options.find((option) => option.name === "Yes");
  const noOption = options.find((option) => option.name === "No");

  return (
    <div
      className={`yes_no_btn_component ${
        theme === "dark" ? "yes_no_btn_component_dark" : ""
      }`}
    >
      <div className="upper_text">
        <h5>Choose your Prediction</h5>
      </div>
      <div className="yes_no_btn c_flex">
        <div className="yes_btn">
          <button onClick={navigateTo} className="main_btn l_flex">
            Yes ({yesOption?.playerCount || 0}%)
          </button>
        </div>
        <div className="no_btn">
          <button onClick={navigateTo} className="main_btn l_flex">
            No ({noOption?.playerCount || 0}%)
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
