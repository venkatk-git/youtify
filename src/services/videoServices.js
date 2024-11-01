const YOUTUBE_API_KEY = "AIzaSyDw81ieQ_oas63xgP0i6GJUEUwgMzzcoWo";
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/videos";

export async function getVideoTitle(videoId) {
    const url = `${YOUTUBE_API_URL}?id=${videoId}&key=${YOUTUBE_API_KEY}&part=snippet`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(
                `Error fetching video title: ${response.statusText}`
            );
        }
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            return data.items[0].snippet.title;
        } else {
            throw new Error("Video not found");
        }
    } catch (error) {
        console.error("Error fetching video title:", error);
        throw error;
    }
}
