import axios from "axios";
import { config } from "../../config/variables";
const { API_ENDPOINT } = config;

export async function getUser(setUser) {
    try {
        const url = `${API_ENDPOINT}/auth/login/success`;
        const { data } = await axios.get(url, { withCredentials: true });
        setUser(data.user._json);
    } catch (err) {
        console.error(err);
    }
}
