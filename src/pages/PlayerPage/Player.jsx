// Dependencies
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function Player({ videoId }) {
    return (
        <Wrapper>
            {videoId ? (
                <Iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <Placeholder>No video selected</Placeholder>
            )}
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    grid-area: player;
    width: fit-content;
    width: clamp(80px, 70vw, 1280px);
    height: clamp(80px, 34vw, 980px);
    background-color: var(--primary-gray);
    border-radius: var(--round-2x);
    aspect-ratio: 16 / 9;
`;

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: var(--round-2x);
`;

const Placeholder = styled.div`
    color: var(--text-color);
    font-size: 16px;
`;

export default Player;
