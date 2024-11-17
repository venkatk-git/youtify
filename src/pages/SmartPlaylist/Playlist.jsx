// Dependencies
import styled from "styled-components";
import React from "react";
import List from "./List";
import axios from "axios";
import { useUser } from "../../context/UserContext";
import { API_ENDPOINT } from "../../utils/constants";

function Playlist() {
    const [playlists, setPlaylists] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const user = useUser();

    React.useEffect(() => {
        const email = "venkatkumar.al22@bitsathy.ac.in";

        const fetchPlaylists = async () => {
            try {
                const response = await axios.get(
                    `${API_ENDPOINT}/api/smartPlaylists/playlists?email=${email}`
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

    console.log(playlists);

    return (
        <Wrapper>
            {!playlists && <h1>No playlist available :(</h1>}
            {playlists?.map((playlist, index) => (
                <List key={index} playlist={playlist} />
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
