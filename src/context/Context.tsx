import { createContext, useReducer, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Correct import for jwt-decode
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export type MenuType =
  | "webthree_email"
  | "webthree_nick_ref"
  | "verifyEmail"
  | "verifyMobile"
  | "editEmail"
  | "editMobile"
  | "terms"
  | "userdrawer"
  | "currency"
  | "bookmark"
  | "combo_blast"
  | "comboblast_info"
  | "verifyKyc"
  | "submitKyc"
  | "addAccount"
  | "withdraw"
  | "add_crypto_address"
  | "add_bank_account"
  | "fund_wallet"
  | "fund_virtual"
  | "card_fund"
  | "ussd_fund"
  | "deposit_crypto"
  | "authenticator_app"
  | "acc_email_mobile_otp"
  | "acc_email_otp"
  | "acc_mobile_otp"
  | "withdrawal_issue"
  | "bonus_claim_issue"
  | "deposit_issue"
  | "comment_report";

export interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  open: boolean;
  showDrawer: () => void;
  onClose: () => void;
  currentMenu: MenuType;
  setMenu: (menu: MenuType) => void;
  toggleTheme: () => void;

  // Add these properties
  menuAnchors: Record<string, HTMLElement | null>;
  isMenuOpen: (menu: string) => boolean;
  handleClickMenu: (
    menu: string
  ) => (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseMenu: (menu: string) => () => void;
  setMenuAnchors: React.Dispatch<
    React.SetStateAction<Record<string, HTMLElement | null>>
  >;
}

// Define a type for userInfo, accommodating all fields
export interface UserInfo {
  _id: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  isAdmin: boolean;
  isBlocked: boolean;
  isAccountVerified: boolean;
  token: string;
}

// Define types for the initial state and actions
interface State {
  loading: boolean;
  error: string;
  query: string;
  userInfo: UserInfo | null;
  tokenExpiration: number | null;
  theme: "light" | "dark"; // Add theme state
}

interface Action {
  type:
    | "TOGGLE_THEME"
    | "SET_THEME"
    | "USER_SIGNIN"
    | "USER_SIGNOUT"
    | "SET_QUERY"
    | "CLEAR_QUERY";
  payload?: UserInfo | string;
  theme?: "light" | "dark"; // Add theme for SET_THEME action
}

export const Context = createContext<ContextProps | undefined>(undefined);

// INITIAL STATE
const initialState: State = {
  loading: true,
  error: "",
  theme: (localStorage.getItem("theme") as "light" | "dark") || "dark", // Default to "dark"
  query: localStorage.getItem("searchQuery") || "",
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null,
  tokenExpiration: localStorage.getItem("userInfo")
    ? jwtDecode<{ exp: number }>(
        JSON.parse(localStorage.getItem("userInfo")!).token
      ).exp
    : null,
};

function reducer(state: State, action: Action): State {
  const newTheme = state.theme === "light" ? "dark" : "light";

  switch (action.type) {
    case "TOGGLE_THEME":
      localStorage.setItem("theme", newTheme);
      return {
        ...state,
        theme: newTheme,
      };

    case "SET_THEME":
      return {
        ...state,
        theme: action.theme ?? "light", // Fallback to "light"
      };

    case "USER_SIGNIN": {
      if (typeof action.payload === "object" && action.payload.token) {
        const decodedToken = jwtDecode<{ exp: number }>(action.payload.token);
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
        return {
          ...state,
          userInfo: action.payload,
          tokenExpiration: decodedToken.exp,
        };
      }
      return state;
    }

    case "USER_SIGNOUT":
      localStorage.removeItem("userInfo");
      localStorage.removeItem("searchQuery");
      return {
        ...state,
        userInfo: null,
        tokenExpiration: null,
        query: "",
      };

    case "SET_QUERY":
      if (typeof action.payload === "string") {
        localStorage.setItem("searchQuery", action.payload); // Store search query in localStorage
        return {
          ...state,
          query: action.payload,
        };
      }
      return state;

    case "CLEAR_QUERY":
      localStorage.removeItem("searchQuery"); // Remove search query from localStorage
      return {
        ...state,
        query: "",
      };

    default:
      return state;
  }
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export function ContextProvider({ children }: ContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  // Check token expiration on initial load
  useEffect(() => {
    const checkTokenExpirationOnLoad = () => {
      if (state.tokenExpiration) {
        const currentTime = Math.floor(Date.now() / 1000); // current time in seconds
        if (currentTime >= state.tokenExpiration) {
          toast.error("Token expired, please login again"); // Show toast message
          dispatch({ type: "USER_SIGNOUT" });
          navigate("/"); // Navigate to login screen
        }
      }
    };

    checkTokenExpirationOnLoad();
  }, [state.tokenExpiration, navigate]);

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (state.tokenExpiration) {
        const currentTime = Math.floor(Date.now() / 1000); // current time in seconds
        if (currentTime >= state.tokenExpiration) {
          toast.error("Token expired, please login again"); // Show toast message
          dispatch({ type: "USER_SIGNOUT" });
          navigate("/"); // Navigate to login screen
        }
      }
    };

    const interval = setInterval(checkTokenExpiration, 1000 * 60); // Check every minute
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [state.tokenExpiration, navigate]);

  // Load theme from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      dispatch({ type: "SET_THEME", theme: savedTheme });
    }
  }, []);

  // Effect to manage global theme styles
  useEffect(() => {
    const root = document.documentElement;

    // Apply theme by toggling 'dark' class on the root element
    if (state.theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [state.theme]);

  // Single function to toggle between light and dark modes
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  // Menu state and handlers
  // State to manage anchor elements for multiple menus
  const [menuAnchors, setMenuAnchors] = useState<
    Record<string, HTMLElement | null>
  >({
    User: null,
    Notification: null,
    Wallet: null,
  });

  // Check if a menu is open
  const isMenuOpen = (menu: string) => Boolean(menuAnchors[menu]);

  // Handle opening a menu
  const handleClickMenu =
    (menu: string) => (event: React.MouseEvent<HTMLElement>) => {
      setMenuAnchors((prev) => ({
        ...prev,
        [menu]: event.currentTarget, // Open menu
      }));
    };

  // Handle closing a menu
  const handleCloseMenu = (menu: string) => () => {
    setMenuAnchors((prev) => ({
      ...prev,
      [menu]: null, // Close menu
    }));
  };

  //DRAWER MENU
  const [open, setOpen] = useState<boolean>(false);
  const [currentMenu, setCurrentMenu] = useState<MenuType>("webthree_email");

  const showDrawer = () => {
    console.log("Drawer is opening");
    setOpen(true);
  };

  const onClose = () => {
    console.log("Drawer is closing");
    setOpen(false);
  };

  const setMenu = (menu: MenuType) => {
    console.log(`Switching to menu: ${menu}`);
    setCurrentMenu(menu);
  };

  const value: ContextProps = {
    state,
    dispatch,
    open,
    showDrawer,
    onClose,
    currentMenu,
    setMenu,
    toggleTheme,
    menuAnchors,
    isMenuOpen,
    setMenuAnchors,
    handleClickMenu,
    handleCloseMenu,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
