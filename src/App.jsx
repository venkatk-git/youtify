// Dependencies
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import SuperNav from "./ui/components/SuperNav/SuperNav";
import MainLayout from "./ui/layouts/MainLayout/MainLayout";
import HomeLayout from "./ui/layouts/HomeLayout/HomeLayout";
import PlayerLayout from "./ui/layouts/PlayerLayout/PlayerLayout";
import Home from "./pages/HomePage/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import Playlist from "./pages/SmartPlaylist/Playlist";
import PlayerPage from "./pages/PlayerPage/PlayerPage";
import WatchPartyPage from "./pages/WatchPartyPage/WatchPartyPage";
import Login from "./pages/Login/Login";
// import Test from "./Test";

// Contexts
import { UserProvider } from "./context/UserContext";

function App() {
    return (
        <UserProvider>
            <Router>
                <SuperNav />
                <Wrapper>
                    <Routes>
                        <Route element={<MainLayout />}>
                            <Route element={<HomeLayout />}>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/search"
                                    element={<SearchPage />}
                                />
                                <Route
                                    path="/smartplaylist"
                                    element={<Playlist />}
                                />
                                <Route
                                    path="/watchparty"
                                    element={<WatchPartyPage />}
                                />
                                <Route
                                    path="/settings"
                                    element={<h1>Settings page</h1>}
                                />
                                <Route path="/login" element={<Login />} />
                            </Route>
                            <Route element={<PlayerLayout />}>
                                <Route path="/watch" element={<PlayerPage />} />
                            </Route>
                        </Route>
                    </Routes>
                </Wrapper>
            </Router>
        </UserProvider>
    );
}

// Styled Components
const Wrapper = styled.div`
    padding-bottom: var(--padding-2x);
    overflow-y: auto;
    overflow-x: hidden;
`;

export default App;
