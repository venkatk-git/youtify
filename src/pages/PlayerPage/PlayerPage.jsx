// Dependencies
import styled from "styled-components";
import React from "react";

// Components
import Player from "./Player";
import { Timeline } from "../../ui/components/Controlers/Controlers";

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
    const [socketState, setSocketState] = React.useState(null);
    const playerRef = React.useRef(null);

    const setVideoDetails = async (videoId) => {
        const videoDetails = await getVideoInfo(videoId);
        setVideoTitle(videoDetails.title);
        setVideoDescription(videoDetails.description);
    };

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
    }, []);

    React.useEffect(() => {
        if (!socketState) return;

        const handlePlay = ({ currentTime }) => {
            playerRef.current.playerInfo.currentTime = currentTime;
            playerRef.current.playVideo();
        };

        const handlePause = ({ currentTime }) => {
            playerRef.current.playerInfo.currentTime = currentTime;
            playerRef.current.pauseVideo();
        };

        const handleSeek = ({ currentTime }) => {
            playerRef.current.seekTo(currentTime, true);
        };

        socketState.on("play", handlePlay);
        socketState.on("pause", handlePause);
        socketState.on("seek", handleSeek);

        // Cleanup listeners on unmount or when socketState changes
        return () => {
            socketState.off("play", handlePlay);
            socketState.off("pause", handlePause);
            socketState.off("seek", handleSeek);
            socketState.disconnect();
        };
    }, [socketState]);

    React.useEffect(() => {
        if (videoId) {
            setVideoDetails(videoId);
        }
    }, [videoId]);

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

    return (
        <Wrapper>
            <Player playerRef={playerRef} videoId={videoId} />
            <ControlsWrapper>
                <Button onClick={handlePlay}>Play</Button>
                <Button onClick={handlePause}>Pause</Button>
                <Timeline length={920} />
            </ControlsWrapper>
            <VideoInfo>
                <Title>{videoTitle}</Title>
                <ChannelInfo>
                    <ChannelProfile></ChannelProfile>
                    <ChannelName></ChannelName>
                </ChannelInfo>
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
        "info description";
    grid-template-columns: 3fr 1fr;
    row-gap: var(--gap-4x);
`;

const ControlsWrapper = styled.div`
    display: flex;
    gap: var(--gap-4x);
    height: fit-content;
`;

const Button = styled.button`
    border-radius: 10px;
    padding: var(--padding-base) var(--padding-4x);
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

const ChannelInfo = styled.div`
    display: flex;
    align-items: center;
    gap: var(--gap-2x);
`;

const ChannelProfile = styled.div`
    width: 32px;
    height: 32px;
    background-color: var(--primary-gray);
    border-radius: 50%;
`;

const ChannelName = styled.div`
    width: 25%;
    height: 24px;
    background-color: var(--primary-gray);
    border-radius: var(--round-base);
`;

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
