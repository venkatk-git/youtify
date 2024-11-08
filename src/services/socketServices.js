import { io } from "socket.io-client";
import { SOCKET_ENDPOINT } from "../utils/constants";

const socket = io(SOCKET_ENDPOINT); // Replace with your server's address

export function connectSocket() {
    if (!socket.connected) {
        socket.connect();
    }

    return socket;
}

export function getSocket() {
    if (!socket) {
        connectSocket();
    }
    return socket;
}

export function createRoom(roomId, adminName, videoId) {
    connectSocket();

    socket.emit("room:create", {
        roomId,
        adminName,
        video: videoId,
    });

    return socket;
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

    return socket;
}

socket.on("user-joined", (data) => {
    console.log("User joined:", data);
});

socket.on("disconnect", () => {
    console.log("Disconnected from the server");
});
