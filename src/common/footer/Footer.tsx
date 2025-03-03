import "./styles.scss";
import { Link } from "react-router-dom";
import { useAppContext } from "../../utilities/utils/Utils";

import {
  HugeiconsCatalogue,
  HugeiconsDocumentAttachment,
  HugeiconsHelpCircle,
} from "../icons/Icons";

function Footer() {
  const { state } = useAppContext();
  const { theme } = state;
  return (
    <footer className={`footer  ${theme === "dark" ? "footer_dark" : ""}`}>
      <div className="container">
        <div className="content c_flex">
          <div className="left">
            <div className="act">
              <small>
                <p>© 2024 TradeBanta. All rights reserved.</p>
              </small>
            </div>
          </div>
          <div className="right a_flex">
            <Link to="/help" className="help a_flex">
              <HugeiconsHelpCircle className="icon" />
              <small>
                <p>Help Center</p>
              </small>
            </Link>
            <Link to="/terms" className="terms a_flex">
              <HugeiconsCatalogue className="icon" />{" "}
              <small>
                <p>Terms of Service</p>
              </small>
            </Link>
            <Link to="privacy" className="privacy a_flex">
              <HugeiconsDocumentAttachment className="icon" />
              <small>
                <p>Privacy Policy</p>
              </small>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
