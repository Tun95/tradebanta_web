import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Checkbox } from "antd";
import { useAppContext } from "../../../utilities/utils/Utils";

interface TermsDropDownMenuProps {
  onClose: () => void;
  setMenu: (menu: "terms") => void;
}
function TermsDropDownMenu({ onClose }: TermsDropDownMenuProps) {
  const { state } = useAppContext();
  const { theme } = state;

  return (
    <div className="modal_menu max_width_modal">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <Box className="menu_modal terms_menu">
          <div className="header">
            <div className="title">
              <h4>Terms & Conditions</h4>
            </div>
            <div className="text">
              <small>
                Please review the following terms before proceeding.{" "}
              </small>
            </div>
          </div>
          <div className="form_box">
            {/* TERMS HERE */}
            <div className="term_text">
              <h5>Introduction</h5>
              <p>
                Welcome to TradeBanta! These Terms and Conditions govern your
                use of our platform. By registering and using this service, you
                agree to comply with the following terms. Please read them
                carefully as they outline important rights and obligations.
              </p>
              <h5>1. General Use</h5>
              <ul>
                <li>You must be at least 18 years old to use this platform.</li>
                <li>
                  All activities on your account are your responsibility.
                  Sharing account details is strictly prohibited to maintain
                  account security.
                </li>
              </ul>{" "}
              <h5>1. General Use</h5>
              <ul>
                <li>You must be at least 18 years old to use this platform.</li>
                <li>
                  All activities on your account are your responsibility.
                  Sharing account details is strictly prohibited to maintain
                  account security.
                </li>
              </ul>
            </div>

            <div className="lower_text_btn">
              <div className="lower_text l_flex">
                <small className="a_flex">
                  <Checkbox>
                    <p>
                      By registering, you accept the
                      <Link onClick={onClose} to="/terms">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link onClick={onClose} to="/betting-terms">
                        Betting Terms & Conditions
                      </Link>
                    </p>
                  </Checkbox>
                </small>
              </div>
              <div className="btn">
                <button className="main_btn l_flex">Create Account</button>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default TermsDropDownMenu;
