import { Helmet } from "react-helmet-async";
import NavBar from "../../../common/navbar/NavBar";
import Footer from "../../../common/footer/Footer";
import "./styles.scss";
import Details from "../../../components/market/market details/Details";
import PredictionProgress from "../../../components/market/market details/PredictionProgress";
import TabPanel from "../../../components/market/market details/TabPanel";
import {
  ErrorResponse,
  getError,
  useAppContext,
} from "../../../utilities/utils/Utils";
import YesAndNoBtn from "../../../components/market/market details/YesAndNoBtn";
import ComboBlast from "../../../components/market/market list/ComboBlast";
import SelectOptions from "../../../components/market/market details/SelectOptions";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import {
  eventDetailsReducer,
  initialEventDetailsState,
} from "../../../types/events/details/eventDetail";
import { eventsRequest } from "../../../base url/BaseUrl";
import LoadingBox from "../../../utilities/message loading/LoadingBox";
import MessageBox from "../../../utilities/message loading/MessageBox";

function MarketDetailScreen() {
  const { state: appState } = useAppContext();
  const { theme } = appState;
  const { id } = useParams<{ id: string }>();

  const [state, dispatch] = useReducer(
    eventDetailsReducer,
    initialEventDetailsState
  );

  //============================
  // Fetch event details by ID
  //============================
  const fetchEventDetails = async (eventId: string) => {
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const response = await axios.get(`${eventsRequest}/${eventId}`);
      const result = response.data;
      dispatch({ type: "FETCH_SUCCESS", payload: result.data });
    } catch (error) {
      dispatch({
        type: "FETCH_FAIL",
        payload: getError(error as ErrorResponse),
      });
      toast.error(getError(error as ErrorResponse));
    }
  };

  useEffect(() => {
    if (id) {
      fetchEventDetails(id);
    }
  }, [id]);

  const { loading, event, error } = state;

  return (
    <>
      <Helmet>
        <title>{event ? `Market :: ${event.title}` : "Market"}</title>
      </Helmet>
      <NavBar />
      <div className="market_details_screen main_style_screen">
        <div className="container">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{state.error}</MessageBox>
          ) : event && (
            <div className="market_content f_flex">
              <div className="left_boxes">
                <Details event={event} />
                <PredictionProgress event={event} />
                <TabPanel event={event} />
              </div>
              <div className="right_boxes">
                <div className="pred_box">
                  {/* Render SelectOptions or YesAndNoBtn based on event type */}
                  {event.type === "multichoice" ? (
                    <SelectOptions options={event.options} />
                  ) : (
                    <YesAndNoBtn options={event.options} />
                  )}
                  <ComboBlast />
                </div>

                {/* Mobile drawer for SelectOptions or YesAndNoBtn */}
                <div
                  className={`combo_mobile_btn ${
                    theme === "dark" ? "combo_mobile_btn_dark" : ""
                  }`}
                >
                  <div className="btn selection_drawer">
                    {event.type === "multichoice" ? (
                      <SelectOptions options={event.options} />
                    ) : (
                      <YesAndNoBtn options={event.options} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MarketDetailScreen;
