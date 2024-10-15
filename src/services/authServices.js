import { config } from "../../config/variables";
const { API_ENDPOINT } = config;

export function googleAuth() {
    window.open(`${API_ENDPOINT}/auth/google/callback`, "_self");
}
