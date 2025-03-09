// eventDetailsReducer.ts
export interface EventDetails {
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
  totalComments: number;
}

interface EventDetailsState {
  loading: boolean;
  event: EventDetails | null;
  error: string | null;
}

export const initialEventDetailsState: EventDetailsState = {
  loading: false,
  event: null,
  error: null,
};

export type EventDetailsAction =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCCESS"; payload: EventDetails }
  | { type: "FETCH_FAIL"; payload: string };

export const eventDetailsReducer = (
  state: EventDetailsState,
  action: EventDetailsAction
): EventDetailsState => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, event: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
