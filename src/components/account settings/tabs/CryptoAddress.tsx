import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAppContext } from "../../../utilities/utils/Utils";

function CryptoAddress() {
  const { setMenu, showDrawer } = useAppContext();
  return (
    <div className="notification_component crypto_component account_tab_component mt">
      <div className="content light_shadow">
        <div className="header">
          <div className="head">
            <h4>Saved Crypto Address</h4>
          </div>
          <div className="text">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </small>
          </div>
        </div>
        <div className="list">
          <div className="list_items light_shadow c_flex">
            <div className="left">
              <div className="head">
                <h4>1BvBMSEYstWe...7xJaNVN2</h4>
              </div>
              <div className="text">
                <small>BTC (Bitcoin Wallet) • My Bitcoin Wallet</small>
              </div>
            </div>
            <div className="right l_flex">
              <DeleteForeverIcon className="icon" />
            </div>
          </div>
          <div className="list_items light_shadow c_flex">
            <div className="left">
              <div className="head">
                <h4>0x742d35Cc...e4438f44e</h4>
              </div>
              <div className="text">
                <small>ETH (Ethereum Network) • My ETH Wallet</small>
              </div>
            </div>
            <div className="right l_flex">
              <DeleteForeverIcon className="icon" />
            </div>
          </div>
          <div className="list_items light_shadow c_flex">
            <div className="left">
              <div className="head">
                <h4>0x742d35Cc...e4438f44e</h4>
              </div>
              <div className="text">
                <small>USDT (TRC20) • My USDT Savings</small>
              </div>
            </div>
            <div className="right l_flex">
              <DeleteForeverIcon className="icon" />
            </div>
          </div>
          <div className="btn a_flex">
            <button
              className="add_adreess "
              onClick={() => {
                setMenu("add_crypto_address");
                showDrawer();
              }}
            >
              Add New Address
            </button>
            <button className="main_btn">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoAddress;
