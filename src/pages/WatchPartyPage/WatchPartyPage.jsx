// Dependencies
import { Link } from "react-router-dom";
import styled from "styled-components";
import { v4 } from "uuid";

// Services
import React from "react";
import { extractVideoId } from "../../utils/helpers.js";

function WatchPartyPage() {
    const [videoUrl, setVideoUrl] = React.useState("");
    const [roomId, setRoomId] = React.useState(v4());
    const [joinRoomId, setJoinRoomId] = React.useState("");

    const handleCreateRoom = () => {
        const newRoomId = v4();
        setRoomId(newRoomId);
    };

    const handleJoinRoom = () => {};

    return (
        <Wrapper>
            <SectionWrapper>
                <Input
                    placeholder="Paste video URL"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                />
                <Link
                    to={`/watch?type=createRoom&videoId=${extractVideoId(
                        videoUrl
                    )}&roomId=${roomId}`}
                >
                    <Button onClick={handleCreateRoom}>Create</Button>
                </Link>
            </SectionWrapper>
            <Line />
            <SectionWrapper>
                <Input
                    placeholder="Enter party id"
                    value={joinRoomId}
                    onChange={(e) => setJoinRoomId(e.target.value)}
                />
                <Link to={`/watch?type=joinRoom&roomId=${joinRoomId}`}> 
                    <Button onClick={handleJoinRoom}>Join</Button>
                </Link>
            </SectionWrapper>
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    margin: auto;
    padding: var(--padding-6x);
    margin-top: var(--margin-10x);
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: var(--gap-10x);
    background-color: var(--primary-black);
    border: 1px solid var(--border-gray-100);
    border-radius: var(--round-2x);
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--border-gray-100);
`;

const SectionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--gap-4x);
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    height: 32px;
    background-color: var(--search-bg);
    border-radius: var(--round-base);
    border: 1px solid var(--border-gray-100);
    padding-left: var(--padding-2x);
`;

const Button = styled.button`
    width: 250px;
    background-color: var(--primary-gray);
    padding: 10px var(--padding-6x);
    color: var(--color-gray-800);
    border-radius: var(--round-2x);
    font-size: var(--font-size-md);
    font-weight: var(--semibold);
    cursor: pointer;

    &:hover {
        background-color: var(--color-gray-200);
    }
`;

export default WatchPartyPage;
