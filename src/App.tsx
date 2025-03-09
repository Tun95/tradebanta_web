import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ReactGA from "react-ga4";
// import { useEffect } from "react";

import NotFoundScreen from "./utilities/404 error/PageNotFound";
import HomeScreen from "./screens/homescreen/HomeScreen";
import BottomNav from "./common/bottom nav/BottomNav";
import {
  AuthFlowMenu,
  DropDownDrawerMenus,
  SideDrawerMenus,
} from "./common/menus/Menus";
import BookmarkScreen from "./screens/bookmarkscreen/BookmarkScreen";
import MarketListScreen from "./screens/marketscreen/marketlistscreen/MarketListScreen";
import MarketDetailScreen from "./screens/marketscreen/marketdetailscreen/MarketDetailScreen";
import WalletScreen from "./screens/walletscreen/WalletScreen";
import LeaderboardScreen from "./screens/leaderboardscreen/leaderboardlistscreen/LeaderboardScreen";
import LeaderboardDetailScreen from "./screens/leaderboardscreen/leaderboarddetailscreen/LeaderboardDetailScreen";
import TransactionScreen from "./screens/transactionscreen/TransactionScreen";
import ProfileScreen from "./screens/profilescreen/ProfileScreen";
import AccountSettingScreen from "./screens/acountsettingscreen/AccountSettingScreen";
import ReferralScreen from "./screens/referralscreen/ReferralScreen";
import TradeScreen from "./screens/tradescreen/TradeScreen";
import useScrollToTop from "./utilities/scroll to/ScrollToTop";

function App() {
  // ReactGA.initialize(import.meta.env.VITE_REACT_APP_GOOGLE_TRACKING, {
  //   gaOptions: {
  //     userId: 123,
  //   },
  // });

  // useEffect(() => {
  //   ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  // }, []);

  useScrollToTop();
  return (
    <>
      {" "}
      <div className="app">
        <ToastContainer position="bottom-center" limit={1} />
        <AuthFlowMenu />
        <SideDrawerMenus />
        <DropDownDrawerMenus />
        <Routes>
          <Route path="*" element={<NotFoundScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/market" element={<MarketListScreen />} />
          <Route path="/market/:id" element={<MarketDetailScreen />} />
          <Route path="/bookmarks" element={<BookmarkScreen />} />
          <Route path="/leaderboard" element={<LeaderboardScreen />} />
          <Route
            path="/leaderboard/:slug"
            element={<LeaderboardDetailScreen />}
          />

          {/* USER */}
          <Route path="/profile" element={<ProfileScreen />} />
          <Route
            path="/account-settings/:id"
            element={<AccountSettingScreen />}
          />
          <Route path="/wallet" element={<WalletScreen />} />
          <Route path="/transaction-history" element={<TransactionScreen />} />
          <Route path="/trades" element={<TradeScreen />} />
          <Route path="/referrals" element={<ReferralScreen />} />
          {/* USER */}
        </Routes>
        <BottomNav />
      </div>{" "}
    </>
  );
}

export default App;
