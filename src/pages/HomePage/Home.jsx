// Dependencies
import styled from "styled-components";

// Components
import Feed from "../../features/Feed/Feed.jsx";

function Home() {
    return (
        <Wrapper>
            <Feed />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export default Home;
