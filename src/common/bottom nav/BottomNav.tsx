import React, { useEffect } from "react";
import "./styles.scss";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { useAppContext } from "../../utilities/utils/Utils";
import { useNavigate, useLocation } from "react-router-dom";
import { UserDropDownMenu } from "../menus/Menus";
import {
  FluentHome12Filled,
  FluentHome16Regular,
  FluentPerson16Filled,
  FluentPerson16Regular,
  FluentPoll16Regular,
  FluentPoll20Filled,
  FluentReceiptSparkles16Filled,
  FluentReceiptSparkles16Regular,
  FluentWalletCreditCard16Filled,
  FluentWalletCreditCard16Regular,
} from "../icons/Icons";

function BottomNav() {
  const { state, handleClickMenu, isMenuOpen, handleCloseMenu } =
    useAppContext();
  const { theme } = state;

  const navigate = useNavigate();
  const location = useLocation();

  // Keep track of the current path and set the active tab based on the path
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue(0);
        break;
      case "/market":
        setValue(1);
        break;
      case "/wallet":
        setValue(2);
        break;
      case "/trades":
        setValue(3);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  const backgroundColor = theme === "dark" ? "#111928" : "#ffffff";

  // Toggle menu open/close state
  const handleToggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (isMenuOpen("User")) {
      handleCloseMenu("User")(); // Close the menu
    } else {
      handleClickMenu("User")(event); // Open the menu
    }
  };

  return (
    <div className="bottom_nav">
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          className={`bottom_menu ${theme === "dark" && "bottom_menu_dark"}`}
          onChange={(_, newValue) => {
            setValue(newValue);
            if (newValue === 4) return; // Prevent navigation for the "More" button

            const currentPath = location.pathname;

            switch (newValue) {
              case 0:
                if (currentPath !== "/") navigate("/");
                break;
              case 1:
                if (currentPath !== "/market") navigate("/market");
                break;
              case 2:
                if (currentPath !== "/wallet") navigate("/wallet");
                break;
              case 3:
                if (currentPath !== "/trades") navigate("/trades");
                break;

              default:
                if (currentPath !== "/") navigate("/"); // Default to Home
            }
          }}
          sx={{ bgcolor: backgroundColor }}
        >
          <BottomNavigationAction
            disableRipple
            className="menus"
            label="Home"
            onClick={handleCloseMenu("User")}
            icon={
              value === 0 ? (
                <FluentHome12Filled className="icon icon_filled" />
              ) : (
                <FluentHome16Regular className="icon" />
              )
            }
          />

          <BottomNavigationAction
            disableRipple
            className="menus"
            label="Market"
            onClick={handleCloseMenu("User")}
            icon={
              value === 1 ? (
                <FluentPoll20Filled className="icon icon_filled" />
              ) : (
                <FluentPoll16Regular className="icon" />
              )
            }
          />
          <BottomNavigationAction
            disableRipple
            className="menus"
            label="Wallet"
            onClick={handleCloseMenu("User")}
            icon={
              value === 2 ? (
                <FluentWalletCreditCard16Filled className="icon icon_filled" />
              ) : (
                <FluentWalletCreditCard16Regular className="icon" />
              )
            }
          />
          <BottomNavigationAction
            disableRipple
            className="menus"
            label="My Trades"
            onClick={handleCloseMenu("User")}
            icon={
              value === 3 ? (
                <FluentReceiptSparkles16Filled className="icon icon_filled" />
              ) : (
                <FluentReceiptSparkles16Regular className="icon" />
              )
            }
          />
          <BottomNavigationAction
            disableRipple
            className="menus_profile menus"
            label="More"
            onClick={(event) => handleToggleMenu(event)} // Toggle menu open/close
            icon={
              value === 4 ? (
                <FluentPerson16Filled className="icon icon_filled" />
              ) : (
                <FluentPerson16Regular className="icon" />
              )
            }
          />
        </BottomNavigation>
      </Paper>
      {/* MENU COMPONENT */}
      <UserDropDownMenu />
    </div>
  );
}

export default BottomNav;
