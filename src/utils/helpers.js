export function extractVideoId(url) {
    const match = url.match(
        /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=))([^&?\/\s]+)/
    );
    return match ? match[1] : null;
}
