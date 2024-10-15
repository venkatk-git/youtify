// import { useState, useEffect } from "react";
// import io from "socket.io-client";
// import axios from "axios";
// import styled from "styled-components";

// const socket = io("http://localhost:5000", {
//     withCredentials: true, // allow credentials like cookies
//     transports: ["websocket", "polling"], // use both polling and websocket transport
// });

// const Test = () => {
//     const [username, setUsername] = useState("");
//     const [roomId, setRoomId] = useState("");
//     const [message, setMessage] = useState("");
//     const [messages, setMessages] = useState([]);
//     const [roomJoined, setRoomJoined] = useState(false);

//     // Handle incoming messages
//     useEffect(() => {
//         socket.on("message:recieve", ({ user, message }) => {
//             setMessages((prevMessages) => [...prevMessages, { user, message }]);
//         });

//         socket.on("user-joined", ({ user }) => {
//             setMessages((prevMessages) => [
//                 ...prevMessages,
//                 { user: "System", message: `${user} has joined the room.` },
//             ]);
//         });

//         return () => {
//             socket.off("message:recieve");
//             socket.off("user-joined");
//         };
//     }, []);

//     const createRoom = async () => {
//         if (!username) {
//             alert("Please enter a username.");
//             return;
//         }

//         try {
//             const response = await axios.post(
//                 `http://localhost:5000/create-room`,
//                 {
//                     admin: username,
//                     vedio: "https://youtube.com/?vedioId=23hkol12h",
//                 }
//             );
//             const { roomId, admin } = response.data;
//             setRoomId(roomId);
//             socket.emit("room:create", { roomId, admin });
//             setRoomJoined(true);
//             setMessages([
//                 { user: "System", message: `Room created with ID: ${roomId}` },
//             ]);
//         } catch (error) {
//             console.error("Error creating room:", error);
//         }
//     };

//     const joinRoom = () => {
//         if (!username || !roomId) {
//             alert("Please enter a username and room ID.");
//             return;
//         }

//         socket.emit("room:join", { roomId, user: username });
//         setRoomJoined(true);
//         setMessages([{ user: "System", message: `Joined room ${roomId}` }]);
//     };

//     const sendMessage = () => {
//         if (message.trim()) {
//             socket.emit("message:send", { roomId, user: username, message });
//             setMessages((prevMessages) => [
//                 ...prevMessages,
//                 { user: "You", message },
//             ]);
//             setMessage("");
//         }
//     };

//     return (
//         <Wrapper style={{ padding: "20px" }}>
//             <h1>Collaborative Room Chat</h1>
//             {!roomJoined ? (
//                 <RoomDetailsWrapper>
//                     <input
//                         type="text"
//                         placeholder="Enter your username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <br />
//                     <button onClick={createRoom}>Create Room</button>
//                     <br />
//                     <input
//                         type="text"
//                         placeholder="Enter Room ID"
//                         value={roomId}
//                         onChange={(e) => setRoomId(e.target.value)}
//                     />
//                     <button onClick={joinRoom}>Join Room</button>
//                 </RoomDetailsWrapper>
//             ) : (
//                 <div>
//                     <h2>Room ID: {roomId}</h2>
//                     <div
//                         style={{
//                             border: "1px solid black",
//                             padding: "10px",
//                             height: "300px",
//                             overflowY: "scroll",
//                         }}
//                     >
//                         {messages.map((msg, index) => (
//                             <div key={index}>
//                                 <strong>{msg.user}: </strong>
//                                 {msg.message}
//                             </div>
//                         ))}
//                     </div>
//                     <input
//                         type="text"
//                         placeholder="Enter your message"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                     />
//                     <button onClick={sendMessage}>Send Message</button>
//                 </div>
//             )}
//         </Wrapper>
//     );
// };

// const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 24px;
//     align-items: center;
// `;

// const RoomDetailsWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 12px;
//     font-size: 22px;

//     & input,
//     button {
//         padding: 12px;
//     }
// `;

// export default Test;
