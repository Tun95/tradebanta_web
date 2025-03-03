import "./styles.scss";

interface WalletAddressProps {
  wallet: string;
}

const WalletAddress: React.FC<WalletAddressProps> = ({ wallet }) => {
  return (
    <div className="wallet_address_component">
      <p className="wallet_shortend">
        {`${wallet.slice(0, 7)}....${wallet.slice(-7)}`}
      </p>
    </div>
  );
};

export default WalletAddress;
