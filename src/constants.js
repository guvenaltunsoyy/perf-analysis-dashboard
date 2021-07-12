const BASE_URI = process.env.NODE_ENV !== "production" ? 'http://localhost:8080/v1/' : process.env.BASE_API_URL;
console.log(process.env)
export const GET_TTFB_URI = `${BASE_URI}ttfb`
export const GET_RESOURCES_URI = `${BASE_URI}resources`
export const GET_PAINTS_URI = `${BASE_URI}paints`
export const GET_DOM_EVENTS_URI = `${BASE_URI}dom-events`
export const GET_WINDOW_EVENTS_URI = `${BASE_URI}window-events`