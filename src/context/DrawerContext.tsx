import React, { createContext, useContext, useState, useEffect } from "react";

// Define menu types
export type MenuType = "bookmark" | "combo_blast" | "combo_blast_details";

// Context properties
interface DropDownMenuContextProps {
  open: boolean;
  currentMenu: MenuType;
  showDrawer: () => void;
  onClose: () => void;
  setMenu: (menu: MenuType) => void;
  isSmallScreen: boolean;
}

// Create the context
const DropDownMenuContext = createContext<DropDownMenuContextProps | undefined>(
  undefined
);

// Provider component
export const DropDownMenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentMenu, setCurrentMenu] = useState<MenuType>("bookmark");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 450);

  // Track screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  const setMenu = (menu: MenuType) => setCurrentMenu(menu);

  return (
    <DropDownMenuContext.Provider
      value={{ open, currentMenu, showDrawer, onClose, setMenu, isSmallScreen }}
    >
      {children}
    </DropDownMenuContext.Provider>
  );
};

// Hook for consuming context
export const useDropDownMenuContext = () => {
  const context = useContext(DropDownMenuContext);
  if (!context) {
    throw new Error(
      "useDropDownMenuContext must be used within DropDownMenuProvider"
    );
  }
  return context;
};
