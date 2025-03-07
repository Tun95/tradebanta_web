const AUTH_BASE_URL = import.meta.env.VITE_REACT_APP_AUTH_BASE_URL;
const USER_BASE_URL = import.meta.env.VITE_REACT_APP_USER_BASE_URL;
const EVENT_BASE_URL = import.meta.env.VITE_REACT_APP_EVENT_BASE_URL;

// Base URL for authentication-related API requests
export const authRequest = AUTH_BASE_URL;

// Base URL for authentication-related API requests
export const userRequest = USER_BASE_URL;

// Base URL for events-related API requests
export const eventsRequest = EVENT_BASE_URL;

// PAGE URL
export const pageURL = import.meta.env.VITE_REACT_APP_FRONTEND_URL;
