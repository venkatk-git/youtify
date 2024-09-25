// Dependencies
import styled from "styled-components";

function Player() {
    return <Wrapper></Wrapper>;
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
export default Player;
