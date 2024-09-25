// Dependencies
import styled from "styled-components";
import List from "./List";

function Playlist() {
    return (
        <Wrapper>
            {Array.from({ length: 7 }).map((index) => (
                <List key={index} />
            ))}
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(356px, 1fr));
    gap: var(--gap-4x);
`;

export default Playlist;
