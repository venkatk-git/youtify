// Dependencies
import styled from "styled-components";
import React from "react";

// Components
import Player from "./Player";
import { Timeline } from "../../ui/components/Controlers/Controlers";
import { Icon } from "@iconify/react/dist/iconify.js";

// Handlers
import { createRoom, joinRoom } from "../../services/socketServices";
import { useSearchParams } from "react-router-dom";
import { getVideoInfo } from "../../services/videoServices";

function PlayerPage() {
    const [searchParams] = useSearchParams();
    const [videoId, setVideoId] = React.useState("");
    const [roomId, setRoomId] = React.useState("");
    const [videoTitle, setVideoTitle] = React.useState("");
    const [videoDescription, setVideoDescription] = React.useState("");
    const [currentTime, setCurrentTime] = React.useState(0);
    const [videoLength, setVideoLength] = React.useState(0);
    const [socketState, setSocketState] = React.useState(null);
    const playerRef = React.useRef(null);

    const setVideoDetails = async (videoId) => {
        const videoDetails = await getVideoInfo(videoId);
        setVideoTitle(videoDetails.title);
        setVideoDescription(videoDetails.description);
    };

    // Create Or Join Room
    React.useEffect(() => {
        const type = searchParams.get("type");

        if (type === "createRoom") {
            const roomId = searchParams.get("roomId");
            setRoomId(roomId);
            const newVideoId = searchParams.get("videoId");
            setVideoId(newVideoId);
            const adminName = "Venkat";
            const socket = createRoom(roomId, adminName, newVideoId);

            setVideoDetails(newVideoId);

            setSocketState(socket);
        }

        if (type === "joinRoom") {
            const roomId = searchParams.get("roomId");
            setRoomId(roomId);

            const socket = joinRoom(roomId, "Venkat2", (data) => {
                if (data && data.videoId) {
                    setVideoId(data.videoId);
                    setVideoDetails(data.videoId);
                }
            });
            setSocketState(socket);
        }
    }, [searchParams]);

    // Socket Event Recievers
    React.useEffect(() => {
        if (!socketState) return;

        const handleOnPlay = ({ currentTime }) => {
            playerRef.current.playerInfo.currentTime = currentTime;
            playerRef.current.playVideo();
        };

        const handleOnPause = ({ currentTime }) => {
            playerRef.current.playerInfo.currentTime = currentTime;
            playerRef.current.pauseVideo();
        };

        const handleOnSeek = ({ time }) => {
            playerRef.current.seekTo(time, true);
        };

        socketState.on("play", handleOnPlay);
        socketState.on("pause", handleOnPause);
        socketState.on("seek", handleOnSeek);

        return () => {
            socketState.off("play", handleOnPlay);
            socketState.off("pause", handleOnPause);
            socketState.off("seek", handleOnSeek);
            socketState.disconnect();
        };
    }, [socketState]);

    // VideoId Setup
    React.useEffect(() => {
        if (videoId) {
            setVideoDetails(videoId);
        }
    }, [videoId]);

    // Player Duration Setup
    React.useEffect(() => {
        if (playerRef.current) {
            const duration = playerRef.current.getDuration
                ? playerRef.current.getDuration()
                : playerRef.current.playerInfo?.duration;

            setVideoLength(duration || 0);
        }
    }, []);

    // Player Playback Timeline Setup (Current time)
    React.useEffect(() => {
        const updateTime = () => {
            if (playerRef.current && playerRef.current.getCurrentTime) {
                const current = Math.floor(playerRef.current.getCurrentTime());

                setCurrentTime(current); 
            }
        };

        const interval = setInterval(updateTime, 500); 

        return () => clearInterval(interval); 
    }, [playerRef]);

    // Button Handlers
    const handlePlay = () => {
        const currentTime = playerRef.current.playerInfo.currentTime;
        socketState.emit("play", { roomId, currentTime });
        playerRef.current.playVideo();
    };

    const handlePause = () => {
        const currentTime = playerRef.current.currentTime;
        socketState.emit("pause", { roomId, currentTime });
        playerRef.current.pauseVideo();
    };

    const handleSeek = (time) => {
        socketState.emit("seek", { roomId, time });
        playerRef.current.playerInfo.currentTime = time;
    };

    return (
        <Wrapper>
            <Player
                playerRef={playerRef}
                videoId={videoId}
                onReady={() => setVideoLength(playerRef.current.getDuration())}
            />
            <ControlsWrapper>
                <Button onClick={handlePlay}>
                    <Icon
                        icon="gravity-ui:play-fill"
                        style={{ color: "white" }}
                    />
                </Button>
                <Button onClick={handlePause}>
                    <Icon
                        icon="fluent:pause-12-filled"
                        style={{ color: "white" }}
                    />
                </Button>
                <Timeline
                    playerRef={playerRef}
                    length={videoLength}
                    currentTime={currentTime}
                    onSeek={handleSeek}
                />
            </ControlsWrapper>
            <VideoInfo>
                <Title>{videoTitle}</Title>
                {/* <ChannelInfo>
                    <ChannelProfile></ChannelProfile>
                    <ChannelName></ChannelName>
                </ChannelInfo> */}
            </VideoInfo>
            <Description>{videoDescription}</Description>
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: var(--padding-4x) 0;
    overflow: hidden;
    display: grid;
    grid-template-areas:
        "player description"
        "controls description"
        "info description";
    grid-template-columns: 3fr 1fr;
    row-gap: var(--gap-4x);
`;

const ControlsWrapper = styled.div`
    grid: "controls";
    display: flex;
    gap: var(--gap-4x);
    height: fit-content;
    align-items: center;
`;

const Button = styled.button`
    background-color: transparent;
    font-size: var(--font-size-l);
    cursor: pointer;
    margin-top: var(--margin-4x);
`;

const VideoInfo = styled.div`
    grid-area: info;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--gap-2x);
`;

const Title = styled.div`
    width: 80%;
    height: 24px;
    /* background-color: var(--primary-gray); */
    border-radius: var(--round-base);
`;

// const ChannelInfo = styled.div`
//     display: flex;
//     align-items: center;
//     gap: var(--gap-2x);
// `;

// const ChannelProfile = styled.div`
//     width: 32px;
//     height: 32px;
//     background-color: var(--primary-gray);
//     border-radius: 50%;
// `;

// const ChannelName = styled.div`
//     width: 25%;
//     height: 24px;
//     background-color: var(--primary-gray);
//     border-radius: var(--round-base);
// `;

const Description = styled.div`
    grid-area: description;
    padding: var(--padding-2x);
    font-size: var(--font-size-s);
    height: 100%;
    line-height: 1.4;
    border-radius: var(--round-2x);
    background-color: var(--primary-gray);
`;

export default PlayerPage;
