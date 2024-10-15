// Dependencies
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import MainLayout from "./ui/layouts/MainLayout/MainLayout";
import HomeLayout from "./ui/layouts/HomeLayout/HomeLayout";
import PlayerLayout from "./ui/layouts/PlayerLayout/PlayerLayout";
import Home from "./pages/HomePage/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import Playlist from "./pages/SmartPlaylist/Playlist";
import PlayerPage from "./pages/PlayerPage/PlayerPage";
import WatchPartyPage from "./pages/WatchPartyPage/WatchPartyPage";

// import Test from "./Test";
import React from "react";

// Services
import { getUser } from "./services/userServices";
import Login from "./pages/Login/Login";

function App() {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        getUser(setUser);
    }, []);

    console.log(user);

    return (
        <Wrapper>
            <Router>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route element={<HomeLayout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/search" element={<SearchPage />} />
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
            </Router>
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    padding-bottom: var(--padding-2x);
`;

export default App;
