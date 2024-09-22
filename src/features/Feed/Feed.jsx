// Dependencies
import styled from "styled-components";
import Section from "./Section";

function Feed() {
    return (
        <Wrapper>
            <Section title={"Section 01"} />
            <Section title={"Section 02"} />
        </Wrapper>
    );
}

// Styled Components

const Wrapper = styled.div`
    flex: 1;
    padding: 0 var(--padding-6x);
    display: flex;
    flex-direction: column;
    gap: var(--gap-4x);
`;

export default Feed;
