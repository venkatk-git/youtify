// Dependencies
import styled from "styled-components";

import HomePage from "./pages/HomePage/Layout";

function App() {
    return (
        <Wrapper>
            <HomePage />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding-bottom: var(--padding-2x);
`;

export default App;
