// Dependencies
import styled from "styled-components";

// Components
import Player from "./Player";

function PlayerPage() {
    return (
        <Wrapper>
            <Player />
            <VideoInfo>
                <Title></Title>
                <ChannelInfo>
                    <ChannelProfile></ChannelProfile>
                    <ChannelName></ChannelName>
                </ChannelInfo>
            </VideoInfo>
            <Description></Description>
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
    background-color: var(--primary-gray);
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
    height: 100%;
    border-radius: var(--round-2x);
    background-color: var(--primary-gray);
`;

export default PlayerPage;
