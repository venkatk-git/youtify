// Dependencies
import styled from "styled-components";
import { Outlet } from "react-router-dom";

// Components
import NavigationBar from "../../../ui/components/NavigationBar/NavigationBar";

function MainLayout() {
    return (
        <Wrapper>
            <NavigationBar />
            <OutLetWrapper>
                <Outlet />
            </OutLetWrapper>
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const OutLetWrapper = styled.div`
    width: 100%;
`;

export default MainLayout;
