import axios from "axios"
import { DEF_N_D_H } from "../constants/api"

export const DefaultGetNextDaysHours = async() => {
    const result = await axios(DEF_N_D_H)
     return result;
}