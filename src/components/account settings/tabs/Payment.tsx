import { useAppContext } from "../../../utilities/utils/Utils";

function Payment() {
  const { setMenu, showDrawer } = useAppContext();
  return (
    <div className="notification_component crypto_component account_tab_component mt">
      <div className="content light_shadow">
        <div className="header">
          <div className="head">
            <h4>Saved Bank Account</h4>
          </div>
          <div className="text">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </small>
          </div>
        </div>
        <div className="list">
          <div className="btn a_flex">
            <button
              className="add_adreess "
              onClick={() => {
                setMenu("add_bank_account");
                showDrawer();
              }}
            >
              Add New Bank Account
            </button>
            <button className="main_btn">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
