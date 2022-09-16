import axios from "axios"
import { GET_NEXT_DAYS_HOURS } from "../constants/api"

export const GetNextDaysHours = async(lat,long) => {
    const result = await axios(
        `${GET_NEXT_DAYS_HOURS}&lat=${lat}&lon=${long}`
      )
     return result;
}