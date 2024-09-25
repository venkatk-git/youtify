// Dependencies
import styled from "styled-components";
import { Outlet } from "react-router-dom";

function PlayerLayout() {
    return (
        <Wrapper>
            <Outlet />
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    max-width: 100%;
    max-height: 100%;
    padding: 0 var(--padding-7x);
`;

export default PlayerLayout;
