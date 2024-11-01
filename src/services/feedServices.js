import { API_ENDPOINT, CONTENT, GENERIC, GOAL } from "../utils/constants";

export async function fetchGenericFeed(email, pageToken = "") {
    const url = new URL(`${API_ENDPOINT}/api/feed/generic`);
    url.searchParams.append("email", email);
    if (pageToken) {
        url.searchParams.append("pageToken", pageToken);
    }

    // const response = await fetch(url);

    // if (!response.ok) {
    //     throw new Error("Failed to fetch generic feed");
    // }

    // const data = await response.json();
    // return {
    //     videos: data.items,
    //     nextPageToken: data.nextPageToken,
    // };

    return GENERIC;
}

export async function fetchContentChannelsFeed(email, pageToken = "") {
    const url = new URL(`${API_ENDPOINT}/feed/content-channels`);
    url.searchParams.append("email", email);
    if (pageToken) {
        url.searchParams.append("pageToken", pageToken);
    }

    // const response = await fetch(url);
    // if (!response.ok) {
    //     throw new Error("Failed to fetch content and channels feed");
    // }

    // const data = await response.json();
    // return {
    //     videos: data.items,
    //     nextPageToken: data.nextPageToken,
    // };

    return CONTENT;
}

export async function fetchGoalBasedFeed(email, pageToken = "") {
    const url = new URL(`${API_ENDPOINT}/feed/goal`);
    url.searchParams.append("email", email);
    if (pageToken) {
        url.searchParams.append("pageToken", pageToken);
    }

    // const response = await fetch(url);
    // if (!response.ok) {
    //     throw new Error("Failed to fetch goal-based feed");
    // }

    // const data = await response.json();
    // return {
    //     videos: data.items,
    //     nextPageToken: data.nextPageToken,
    // };

    return GOAL;
}
