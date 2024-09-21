// Dependencies
import styled from "styled-components";

// Components
import NavigationBar from "./ui/components/NavigationBar/NavigationBar.jsx";
import SideBar from "./ui/components/SideBar/SideBar.jsx";

function App() {
    return (
        <Wrapper>
            <NavigationBar />
            <SideBarAndFeed>
                <SideBar />
                <Feed />
            </SideBarAndFeed>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const SideBarAndFeed = styled.div`
    display: flex;
`;

const Feed = styled.div``;

export default App;
