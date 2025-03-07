export interface Event {
  id: string;
  title: string;
  description: string;
  type: "polar" | "multichoice";
  eventImage: string;
  answer: string;
  pool: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  options: {
    id: string;
    name: string;
    imageUrl?: string;
    playerCount: number;
    bonusOdds?: number;
  }[];
  category: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  totalPlayers: number;
}

interface EventListState {
  loading: boolean;
  data: Event[];
  page: number;
  totalPages: number;
  error: string | null;
}

export const initialEventState: EventListState = {
  loading: false,
  data: [],
  page: 1,
  totalPages: 1,
  error: null,
};

export type EventListAction =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: {
        data: Event[];
        page: number;
        totalPages: number;
      };
    }
  | { type: "FETCH_FAIL"; payload: string };

export const eventsReducer = (
  state: EventListState,
  action: EventListAction
): EventListState => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.data],
        page: action.payload.page,
        totalPages: action.payload.totalPages,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
