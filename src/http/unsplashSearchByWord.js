import axios from "axios"
import { SEARCH_BY_WORD } from "../constants/api"

export const UnsplashGetByWord = async(city) => {
    const result = await axios(SEARCH_BY_WORD + city)
     return result;
}