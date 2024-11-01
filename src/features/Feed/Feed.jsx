// Dependencies
import styled from "styled-components";
import Section from "./Section";
import { fetchGenericFeed } from "../../services/feedServices";

function Feed() {
    const res = fetchGenericFeed("johndoe@example.com");

    console.log(res);

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
    display: flex;
    flex-direction: column;
    gap: var(--gap-4x);
`;

export default Feed;
