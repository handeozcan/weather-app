import axios from "axios"
import { GET_CITIES_API, API_APPID } from "../constants/api"

export const FindLanLong = async(city) => {
    const result = await axios(
        `${GET_CITIES_API}?q=${city}&appid=${API_APPID}`
      )
     return result;
}