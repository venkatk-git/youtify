import { API_ENDPOINT } from "../utils/constants";

export async function getVideoTitle(videoId) {
    const url = `${API_ENDPOINT}/api/video/gettitle?videoId=${videoId}`; // Call backend API instead of YouTube API

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(
                `Error fetching video title from backend: ${response.statusText}`
            );
        }
        const data = await response.json();

        if (data.title) {
            return data.title;
        } else {
            throw new Error("Video title not found");
        }
    } catch (error) {
        console.error("Error fetching video title from backend:", error);
        throw error;
    }
}
