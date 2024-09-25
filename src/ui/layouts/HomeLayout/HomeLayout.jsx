// Dependencies
import styled from "styled-components";
import { Outlet } from "react-router-dom";

// Components
import SideBar from "../../../ui/components/SideBar/SideBar";

function HomeLayout() {
    return (
        <Wrapper>
            <SideBar />
            <OutLetWrapper>
                <Outlet />
            </OutLetWrapper>
        </Wrapper>
    );
}

// Styled Components

const Wrapper = styled.div`
    display: flex;
`;

const OutLetWrapper = styled.div`
    width: 100%;
    padding: 0 var(--padding-6x);
`;

export default HomeLayout;
