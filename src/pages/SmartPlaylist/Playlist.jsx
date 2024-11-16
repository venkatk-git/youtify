// Dependencies
import styled from "styled-components";
import React from "react";
import List from "./List";
import axios from "axios";
import { useUser } from "../../context/UserContext";

function Playlist() {
    const [playlists, setPlaylists] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const user = useUser();

    React.useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const email = user?.email;
                console.log(email);

                const response = await axios.get(
                    `/api/smartPlaylist/playlists?email=${email}`
                );
                setPlaylists(response.data.playlists);
            } catch (err) {
                setError("Failed to fetch playlists. Please try again later.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaylists();
    }, [user]);

    if (loading) {
        return <h1>Loading playlists...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <Wrapper>
            {!playlists && <h1>No playlist available :(</h1>}
            {playlists?.map((playlist) => (
                <List key={playlist._id} playlist={playlist} />
            ))}
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(356px, 1fr));
    gap: var(--gap-4x);
`;

export default Playlist;
