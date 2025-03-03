import React, { createContext, useContext, useState, useEffect } from "react";

export type MenuType = "bookmark" | "combo_blast";

interface MenuContextProps {
  open: boolean;
  currentMenu: MenuType | null; // Allow null
  showDrawer: (menu: MenuType) => void; // Require `menu` parameter
  onClose: () => void;
  setMenu: (menu: MenuType) => void;
  isSmallScreen: boolean;
}

const SideDrawerMenuContext = createContext<MenuContextProps | undefined>(
  undefined
);

export const SideDrawerMenuProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<MenuType | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showDrawer = (menu: MenuType) => {
    setCurrentMenu(menu);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setCurrentMenu(null);
  };

  const setMenu = (menu: MenuType) => setCurrentMenu(menu);

  return (
    <SideDrawerMenuContext.Provider
      value={{ open, currentMenu, showDrawer, onClose, setMenu, isSmallScreen }}
    >
      {children}
    </SideDrawerMenuContext.Provider>
  );
};

export const useSideDrawerMenuContext = () => {
  const context = useContext(SideDrawerMenuContext);
  if (!context)
    throw new Error(
      "useSideDrawerMenuContext must be used within SideDrawerMenuProvider"
    );
  return context;
};
