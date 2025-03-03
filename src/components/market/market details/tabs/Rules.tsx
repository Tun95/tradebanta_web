import "../styles.scss";
import CircleIcon from "@mui/icons-material/Circle";

function RulesTab() {
  return (
    <div className="rule_tab">
      <div className="content">
        <ul className="list light_shadow">
          <li className="list_itmes a_flex">
            <div className="_icon l_flex ">
              <CircleIcon className="icon" />
            </div>
            <small> Participants must be 18 years or older.</small>
          </li>{" "}
          <li className="list_itmes a_flex">
            <div className="_icon l_flex">
              <CircleIcon className="icon" />
            </div>
            <small> Participants must be 18 years or older.</small>
          </li>{" "}
          <li className="list_itmes a_flex">
            <div className="_icon l_flex">
              <CircleIcon className="icon" />
            </div>
            <small> Participants must be 18 years or older.</small>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RulesTab;
