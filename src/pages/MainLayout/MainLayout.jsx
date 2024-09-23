// Dependencies
import styled from "styled-components";
import { Outlet } from "react-router-dom";

// Components
import NavigationBar from "../../ui/components/NavigationBar/NavigationBar";
import SideBar from "../../ui/components/SideBar/SideBar";

function MainLayout() {
    return (
        <Wrapper>
            <NavigationBar />
            <SideBarAndFeed>
                <SideBar />
                <OutLetWrapper>
                    <Outlet />
                </OutLetWrapper>
            </SideBarAndFeed>
        </Wrapper>
    );
}

// Styled Components

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const SideBarAndFeed = styled.div`
    display: flex;
`;

const OutLetWrapper = styled.div`
    width: 100%;
    padding: 0 var(--padding-6x);
`;

export default MainLayout;
