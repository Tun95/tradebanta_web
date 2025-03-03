import { useAppContext } from "../../../utilities/utils/Utils";
import { useState } from "react";
import { toast } from "react-toastify";
import { HugeiconsBank, HugeiconsBitcoinRectangle, HugeiconsCreditCard, HugeiconsDialpadCircle01 } from "../../../common/icons/Icons";

// Define the type for menu options
type MenuType = "deposit_crypto" | "fund_virtual" | "card_fund" | "ussd_fund";

function FundWalletMenu() {
  const { state, setMenu, showDrawer } = useAppContext();
  const { theme } = state;

  // State to track the selected menu option
  const [selectedMenu, setSelectedMenu] = useState<MenuType | "">("");

  // Handle menu item selection
  const handleSelect = (menu: MenuType) => {
    setSelectedMenu(menu);
  };

  // Handle "Proceed" button click
  const handleProceed = () => {
    if (selectedMenu) {
      setMenu(selectedMenu); // Set the menu (ensure `setMenu` expects `MenuType`)
      showDrawer(); // Open the drawer/modal
    } else {
      toast.error("Please select a funding method.");
    }
  };

  return (
    <div className="fund_wallet_menu max_width_modal modal_menu">
      <div
        className={`auth_content ${
          theme === "dark" ? "auth_content_dark" : ""
        }`}
      >
        <div className="content">
          <div className="header">
            <div className="title">
              <h4>Fund Wallet</h4>
            </div>
            <div className="text">
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </small>
            </div>
          </div>
          <div className="list">
            <div
              className={`list_items ${
                selectedMenu === "deposit_crypto" ? "active" : ""
              }`}
              onClick={() => handleSelect("deposit_crypto")}
            >
              <small className="a_flex">
                <HugeiconsBitcoinRectangle className="icon" />
                <p>Fund With Crypto Currency</p>
              </small>
            </div>
            <div
              className={`list_items ${
                selectedMenu === "fund_virtual" ? "active" : ""
              }`}
              onClick={() => handleSelect("fund_virtual")}
            >
              <small className="a_flex">
                <HugeiconsBank className="icon" />
                <p>Fund With Virtual Account</p>
              </small>
            </div>
            <div
              className={`list_items ${
                selectedMenu === "card_fund" ? "active" : ""
              }`}
              onClick={() => handleSelect("card_fund")}
            >
              <small className="a_flex">
                <HugeiconsCreditCard className="icon" />
                <p>Fund With Card</p>
              </small>
            </div>
            <div
              className={`list_items ${
                selectedMenu === "ussd_fund" ? "active" : ""
              }`}
              onClick={() => handleSelect("ussd_fund")}
            >
              <small className="a_flex">
                <HugeiconsDialpadCircle01 className="icon" />
                <p>Fund With USSD</p>
              </small>
            </div>
          </div>
          <div className="btn">
            <button className="main_btn" onClick={handleProceed}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundWalletMenu;
