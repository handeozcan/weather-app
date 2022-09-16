const API_APPID = process.env.REACT_APP_API_KEY_APPID;
const API_UNSPLASH = process.env.REACT_APP_API_KEY_UNSPLASH;

const GET_CITIES_API = `https://api.openweathermap.org/data/2.5/weather`;

const DEFAULT_URL = `${GET_CITIES_API}/?APPID=${API_APPID}&lat=40.766666&lon=29.916668`;

const GET_NEXT_DAYS_HOURS = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&units=metric&appid=${API_APPID}`; //&lat={lat}&lon={lon}
const DEF_N_D_H = `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely&units=metric&appid=${API_APPID}&lat=40.766666&lon=29.916668`;


// UNSPLASH
const URL_UNSPLASH = "https://api.unsplash.com/search/photos";
const SEARCH_BY_WORD = `${URL_UNSPLASH}?client_id=${API_UNSPLASH}&page=1&query=`;
const SEARCH_DEFAULT = `${URL_UNSPLASH}?client_id=${API_UNSPLASH}&page=1&query=Turkey`;



export {
  API_APPID,
  API_UNSPLASH,
  GET_CITIES_API,
  DEFAULT_URL,
  DEF_N_D_H,
  GET_NEXT_DAYS_HOURS,
  SEARCH_BY_WORD,
  SEARCH_DEFAULT
};
