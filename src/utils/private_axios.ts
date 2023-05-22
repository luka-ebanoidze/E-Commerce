import axios from "axios";
import { TLocalStorage } from "@src/types/localstorage";

export const private_axios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem(TLocalStorage.ACCESSTOKEN)}`
    }
})