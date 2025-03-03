import React, { FC, useEffect, useState } from "react";
import "./styles.scss";
import Modal from "@mui/material/Modal";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "../../utilities/utils/Utils";
import {
  EmailOtpVerificationDropDownMenu,
  MobileOtpVerificationDropDownMenu,
  SendEmailOtpDropDownMenu,
  SendMobileOtpDropDownMenu,
} from "../../components/form/otp/Otp";
import TermsDropDownMenu from "../../components/form/terms/Terms";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import UserInfoMenu from "../../components/others/user menu/UserInfoMenu";
import NotificationMenu from "../../components/others/notification menu/NotificationMenu";
import WalletMenu from "../../components/others/wallet menu/WalletMenu";
import CurrencyModal from "../../components/others/currency modal/CurrencyModal";
import BookmarkMenu from "../../components/others/bookmark menu/BookmarkMenu";
import { useDropDownMenuContext } from "../../context/DrawerContext";
import { useSideDrawerMenuContext } from "../../context/SideDrawerContext";
import ComboBlast from "../../components/market/market list/ComboBlast";
import PredictionBox from "../../components/market/market details/PredictionBox";
import ComboBlastInfoMenu from "../../components/others/combo blast info menu/ComboBlastInfoMenu";
import KycVerificationMenu from "../../components/others/wallet menus/KycVerification";
import { WithdrawFundMenu } from "../../components/others/wallet menus/WithdrawFund";
import CryptoAddressMenu from "../../components/others/wallet menus/CryptoAddress";
import BankAccountMenu from "../../components/others/wallet menus/BankAccount";
import FundWalletMenu from "../../components/others/wallet menus/FundWallet";
import VirtualFundMenu from "../../components/others/wallet menus/VirtualFund";
import CardFundMenu from "../../components/others/wallet menus/CardFund";
import { DepositWithCryptoMenu } from "../../components/others/wallet menus/DepositWithCrypto";
import AuthencationAppMenu from "../../components/others/account settings menus/AuthencationApp";
import {
  EmailMobileOtpMenu,
  VerifyEmailOtpMenu,
  VerifyMobileOtpMenu,
} from "../../components/others/account settings menus/EmailMobileOtpMenu";
import WithdrawalIssueMenu from "../../components/others/transaction menus/WithdrawalIssue";
import BonusClaimIssueMenu from "../../components/others/transaction menus/BonusClaimIssue";
import DepositIssueMenu from "../../components/others/transaction menus/DepositIssue";
import ReportCommentMenu from "../../components/others/comment menu/ReportComment";
import {
  FluentAlert16Filled,
  FluentWalletCreditCard16Filled,
} from "../icons/Icons";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EmailMenu from "../../components/form/webthree/emailmenu/EmailMenu";
import NicknameRefMenu from "../../components/form/webthree/nicknamerefmenu/NicknameRefMenu";

type CloseButtonProps = {
  onClose: () => void;
};

const CloseButton: FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <div className="close_icon">
      <span onClick={onClose}>
        <CloseIcon className="icon" />
      </span>
    </div>
  );
};

const drawerStyle = {
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  padding: "16px",
};

export function AuthFlowMenu() {
  const { state, open, onClose, currentMenu, setMenu } = useAppContext();
  const { theme } = state;

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);

  // Add a listener to track screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define the menu rendering logic
  const renderMenu = () => {
    switch (currentMenu) {
      case "webthree_email":
        return <EmailMenu />;

      case "webthree_nick_ref":
        return <NicknameRefMenu />;

      case "verifyEmail":
        return (
          <EmailOtpVerificationDropDownMenu
            onClose={onClose}
            setMenu={setMenu}
          />
        );

      case "verifyMobile":
        return (
          <MobileOtpVerificationDropDownMenu
            onClose={onClose}
            setMenu={setMenu}
          />
        );

      case "editEmail":
        return <SendEmailOtpDropDownMenu onClose={onClose} setMenu={setMenu} />;

      case "editMobile":
        return (
          <SendMobileOtpDropDownMenu onClose={onClose} setMenu={setMenu} />
        );

      case "terms":
        return <TermsDropDownMenu onClose={onClose} setMenu={setMenu} />;

      case "currency":
        return <CurrencyModal onClose={onClose} setMenu={setMenu} />;

      case "comboblast_info":
        return <ComboBlastInfoMenu />;

      case "verifyKyc":
        return <KycVerificationMenu />;

      case "withdraw":
        return <WithdrawFundMenu />;

      case "add_crypto_address":
        return <CryptoAddressMenu />;

      case "add_bank_account":
        return <BankAccountMenu />;

      case "fund_wallet":
        return <FundWalletMenu />;

      case "fund_virtual":
        return <VirtualFundMenu />;

      case "card_fund":
        return <CardFundMenu />;

      case "deposit_crypto":
        return <DepositWithCryptoMenu />;

      case "authenticator_app":
        return <AuthencationAppMenu />;

      case "acc_email_mobile_otp":
        return <EmailMobileOtpMenu />;

      case "acc_email_otp":
        return <VerifyEmailOtpMenu />;

      case "acc_mobile_otp":
        return <VerifyMobileOtpMenu />;

      case "withdrawal_issue":
        return <WithdrawalIssueMenu />;

      case "bonus_claim_issue":
        return <BonusClaimIssueMenu />;

      case "deposit_issue":
        return <DepositIssueMenu />;

      case "comment_report":
        return <ReportCommentMenu />;

      default:
        return null;
    }
  };

  // Define the modal style
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    boxShadow: 24,
    borderRadius: "20px",
    width: "auto",
    // maxWidth: "350px",
    outline: "none",
  };

  const backgroundColor = theme === "dark" ? "#111928" : "#ffffff";

  return (
    <div>
      {isSmallScreen ? (
        <Drawer
          anchor="bottom"
          open={open}
          onClose={onClose}
          PaperProps={{
            style: {
              ...drawerStyle,
              width: "100%",
              height: "auto",
              overflow: "visible",
              backgroundColor: backgroundColor,
              zIndex: 2400,
            },
          }}
          slotProps={{
            backdrop: {
              style: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                zIndex: 2400,
              },
            },
          }}
        >
          <CloseButton onClose={onClose} />
          {renderMenu()}
        </Drawer>
      ) : (
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="auth-flow-modal"
          aria-describedby="auth-flow-modal-description"
          closeAfterTransition
          className="auth_flow_modal"
          slotProps={{
            backdrop: {
              style: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
              },
            },
          }}
        >
          <Box
            sx={{
              ...modalStyle,
              backgroundColor: theme === "dark" ? "#111928" : "#ffffff",
            }}
          >
            <CloseButton onClose={onClose} />
            {renderMenu()}
          </Box>
        </Modal>
      )}
    </div>
  );
}

// USER DROP DOWN MENU
export function UserDropDownMenu() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 990);
  const { state, menuAnchors, isMenuOpen, handleCloseMenu } = useAppContext();
  const { theme } = state;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 990);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine background color based on the theme
  const backgroundColor = theme === "dark" ? "#111928" : "#ffffff";
  return (
    <React.Fragment>
      {!isSmallScreen ? (
        <>
          <Menu
            anchorEl={menuAnchors["User"]}
            id="account-menu"
            className="user_drop_menu"
            open={isMenuOpen("User")}
            onClose={handleCloseMenu("User")}
            disableScrollLock={true}
            BackdropProps={{
              sx: {
                backdropFilter: "blur(6px)",
                backgroundColor: "rgba(0, 0, 0, 0.3)", // Optional dark overlay
              },
            }}
            PaperProps={{
              elevation: 0,
              sx: {
                borderRadius: "20px",
                overflow: "visible",
                zIndex: 2501,
                filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.1))",
                mt: 6.0,
                ml: 0,
                border: "1px solid var(--color-border)",
                backgroundColor: backgroundColor,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  mr: 1,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <UserInfoMenu />
          </Menu>
        </>
      ) : (
        <Drawer
          anchor="right"
          open={isMenuOpen("User")} // Check if "User" menu is open
          onClose={handleCloseMenu("User")} // Dynamically close "User" menu
          className="mui_drawer"
          PaperProps={{
            style: {
              width: window.innerWidth <= 450 ? "100%" : "400px",
              height: "auto",
              overflow: "visible",
              zIndex: 900,
              backgroundColor: backgroundColor, // Use the dynamic color
            },
          }}
          ModalProps={{
            style: {
              zIndex: 900,
            },
          }}
        >
          <UserInfoMenu />
        </Drawer>
      )}
    </React.Fragment>
  );
}

// NOTIFICATION DROP DOWN MENU
export function NotificationDropDownMenu() {
  const { state, menuAnchors, isMenuOpen, handleClickMenu, handleCloseMenu } =
    useAppContext();
  const { theme } = state;

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 990);

  // Dynamic background color based on theme
  const backgroundColor = theme === "dark" ? "#111928" : "#ffffff";

  // Screen resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 990);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      <Box className="notification_box">
        <Tooltip title="Show Notifications">
          <IconButton
            onClick={handleClickMenu("Notification")}
            disableRipple
            size="small"
            className="icon_button"
            aria-controls={
              isMenuOpen("Notification") ? "notification-menu" : undefined
            }
            aria-haspopup="true"
            aria-expanded={isMenuOpen("Notification") ? "true" : undefined}
          >
            <div className="notification l_flex">
              <FluentAlert16Filled className="icon" />
            </div>
          </IconButton>
        </Tooltip>
      </Box>

      {!isSmallScreen ? (
        <Menu
          anchorEl={menuAnchors.Notification}
          id="notification-menu"
          className="notification_drop_menu"
          open={isMenuOpen("Notification")}
          onClose={handleCloseMenu("Notification")}
          disableScrollLock={true}
          BackdropProps={{
            sx: {
              backdropFilter: "blur(6px)",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // Optional dark overlay
            },
          }}
          PaperProps={{
            elevation: 0,
            sx: {
              borderRadius: "20px",
              overflow: "visible",
              zIndex: 2501,
              filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.1))",
              mt: 3.5,
              ml: 22,
              backgroundColor: backgroundColor,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <NotificationMenu />
        </Menu>
      ) : (
        <Drawer
          anchor="right"
          open={isMenuOpen("Notification")}
          onClose={handleCloseMenu("Notification")}
          PaperProps={{
            style: {
              width: window.innerWidth <= 450 ? "100%" : "400px",
              height: "auto",
              overflow: "visible",
              backgroundColor: backgroundColor,
            },
          }}
          slotProps={{
            backdrop: {
              style: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
              },
            },
          }}
        >
          <NotificationMenu />
        </Drawer>
      )}
    </React.Fragment>
  );
}

// WALLET DROP DOWN MENU
export function WalletDropDownMenu() {
  const { state, menuAnchors, isMenuOpen, handleClickMenu, handleCloseMenu } =
    useAppContext();
  const { theme } = state;

  const backgroundColor = theme === "dark" ? "#111928" : "#ffffff";

  return (
    <React.Fragment>
      <Box>
        <Tooltip title="Show Wallet">
          <IconButton
            onClick={handleClickMenu("Wallet")} // Use context-based handler to open menu
            disableRipple
            size="small"
            className="icon_button"
            aria-controls={isMenuOpen("Wallet") ? "wallet-menu" : undefined} // Use isMenuOpen to check if menu is open
            aria-haspopup="true"
            aria-expanded={isMenuOpen("Wallet") ? "true" : undefined}
          >
            <div className="wallet a_flex">
              <div className="wallet_icon l_flex">
                <FluentWalletCreditCard16Filled className="icon" />
              </div>
              <div className="amount">$10,000.45</div>
              <KeyboardArrowDownIcon className="icon" />
            </div>
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={menuAnchors.Wallet} // Use menuAnchors to control the anchor element for Wallet menu
        id="wallet-menu" // Unique ID for the Wallet menu
        className="user_drop_menu"
        open={isMenuOpen("Wallet")} // Use isMenuOpen to control menu visibility
        onClose={handleCloseMenu("Wallet")} // Close Wallet menu when user clicks outside
        disableScrollLock={true}
        BackdropProps={{
          sx: {
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Optional dark overlay
          },
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            borderRadius: "20px",
            overflow: "visible",
            zIndex: 1200,
            filter: "drop-shadow(0px 1px 3px rgba(0,0,0,0.1))",
            mt: 3.0,
            ml: 13,
            backgroundColor: backgroundColor,
            border: " 1px solid var(--color-border)",
            // Add responsive centering
            "@media (max-width: 500px)": {
              ml: "auto",
              mr: "auto",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
            },
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
              zIndex: 1100,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <WalletMenu />
      </Menu>
    </React.Fragment>
  );
}

// DROP DOWN MENU
export function DropDownDrawerMenus() {
  const { state } = useAppContext();
  const { theme } = state;

  const { open, onClose, currentMenu, isSmallScreen } =
    useDropDownMenuContext();

  // Define menu rendering logic
  const renderMenuContent = () => {
    switch (currentMenu) {
      case "combo_blast":
        return (
          <div className="combo_blast_menu">
            <ComboBlast />
          </div>
        );
      case "combo_blast_details":
        return (
          <div className="combo_blast_menu">
            <PredictionBox />
          </div>
        );
      default:
        return null;
    }
  };

  const backgroundColor = theme === "dark" ? "#111928" : "#ffffff";

  return (
    <>
      {isSmallScreen && (
        <Drawer
          anchor="bottom"
          open={open}
          onClose={onClose}
          PaperProps={{
            style: {
              ...drawerStyle,
              width: "100%",
              height: "auto",
              overflow: "visible",
              backgroundColor: backgroundColor,
            },
          }}
          slotProps={{
            backdrop: {
              style: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
              },
            },
          }}
        >
          <CloseButton onClose={onClose} />
          {renderMenuContent()}
        </Drawer>
      )}
    </>
  );
}

// SIDE DRAWER MENU
export function SideDrawerMenus() {
  const { state } = useAppContext();
  const { theme } = state;

  const { open, onClose, currentMenu, isSmallScreen } =
    useSideDrawerMenuContext();

  // Define menu rendering logic
  const renderMenuContent = () => {
    switch (currentMenu) {
      case "bookmark":
        return (
          <div className="book_mark_menu">
            <BookmarkMenu />
          </div>
        );
      default:
        return null;
    }
  };

  const backgroundColor = theme === "dark" ? "#111928" : "#ffffff";

  return (
    <>
      {isSmallScreen && (
        <Drawer
          anchor="right"
          open={open}
          onClose={onClose}
          PaperProps={{
            style: {
              width: "100%",
              height: "auto",
              overflow: "visible",
              backgroundColor: backgroundColor,
            },
          }}
          slotProps={{
            backdrop: {
              style: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
              },
            },
          }}
        >
          {renderMenuContent()}
        </Drawer>
      )}
    </>
  );
}
