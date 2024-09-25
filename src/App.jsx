// Dependencies
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/HomePage/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import MainLayout from "./pages/MainLayout/MainLayout";
import Playlist from "./pages/SmartPlaylist/Playlist";

function App() {
    return (
        <Wrapper>
            <Router>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/smartplaylist" element={<Playlist />} />
                    </Route>
                </Routes>
            </Router>
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    padding-bottom: var(--padding-2x);
`;

export default App;
