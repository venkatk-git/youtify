// Dependencies
import styled from "styled-components";
import React from "react";

// eslint-disable-next-line react/prop-types
function Player({ playerRef, videoId, onReady }) {
    React.useEffect(() => {
        if (!videoId) return;

        // Load YouTube API if it hasn't been loaded
        if (!window.YT) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            window.document.body.appendChild(tag);
            window.onYouTubeIframeAPIReady = initializePlayer;
        } else {
            initializePlayer();
        }

        function initializePlayer() {
            playerRef.current = new window.YT.Player("yt-player", {
                videoId,
                events: {
                    onReady: (event) => {
                        console.log("Player is ready:", event);
                        onReady();
                    },
                },
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                },
            });
        }

        // Cleanup the player when the component unmounts or videoId changes
        return () => {
            if (playerRef.current) {
                playerRef.current.destroy();
                playerRef.current = null;
            }
        };
    }, [videoId]);

    return (
        <Wrapper>
            {videoId ? (
                <div id="yt-player" />
            ) : (
                <Placeholder>No video selected</Placeholder>
            )}
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    grid-area: player;
    width: fit-content;
    width: clamp(80px, 70vw, 1280px);
    height: clamp(80px, 34vw, 980px);
    background-color: var(--primary-gray);
    border-radius: var(--round-2x);
    aspect-ratio: 16 / 9;
    overflow: hidden;

    & #yt-player {
        width: 100%;
        height: 100%;
    }
`;

const Placeholder = styled.div`
    color: var(--text-color);
    font-size: 16px;
`;

export default Player;
