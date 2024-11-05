import { io } from "socket.io-client";
import { SOCKET_ENDPOINT } from "../utils/constants";

const socket = io(SOCKET_ENDPOINT); // Replace with your server's address

import { extractVideoId } from "../utils/helpers";

export function connectSocket() {
    if (!socket.connected) {
        socket.connect();
    }
}

export function createRoom(roomId, adminName, videoUrl) {
    connectSocket();

    socket.emit("room:create", {
        roomId,
        adminName,
        video: extractVideoId(videoUrl),
    });
}

export function joinRoom(roomId, user, callback) {
    connectSocket();

    socket.emit("room:join", {
        roomId,
        user,
    });

    socket.on("room:data", (data) => {
        console.log("room:data");
        console.log(data);

        callback(data);
    });
}

socket.on("user-joined", (data) => {
    console.log("User joined:", data);
});

socket.on("disconnect", () => {
    console.log("Disconnected from the server");
});
