import axios from "axios"
import { SEARCH_DEFAULT } from "../constants/api"

export const UnsplashDefault = async() => {
    const result = await axios(SEARCH_DEFAULT)
     return result;
}