// Dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getVideoTitle } from "../../services/videoServices";
import React from "react";

// eslint-disable-next-line react/prop-types
function Vedio({ videoId }) {
    const thumbnailurl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const [title, setTitle] = React.useState();

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getVideoTitle(videoId);
                setTitle(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Link to={"/watch"}>
            <Wrapper>
                <Frame src={thumbnailurl} />
                <DetailsWrapper>
                    <ChannelLogo />
                    <InfoWrapper>
                        <VedioTitle>{title}</VedioTitle>
                        <ChannelName />
                    </InfoWrapper>
                </DetailsWrapper>
            </Wrapper>
        </Link>
    );
}

// Styled Components

const Wrapper = styled.div`
    width: 100%;
    height: var(--vedio-frame-height);
    display: flex;
    flex-direction: column;
    gap: var(--gap-2x);
    border-radius: var(--round-2x);

    transition: all 0.2s ease-in-out;
`;

const Frame = styled.img`
    flex: 1;
    background-color: var(--primary-gray);
    border-radius: var(--round-2x);

    &:hover {
        background-color: var(--color-gray-200);
    }
`;

const DetailsWrapper = styled.div`
    display: flex;
    gap: var(--gap-2x);
`;

const ChannelLogo = styled.div`
    width: 34px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--primary-gray);
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--gap-2x);
    width: 100%;
`;

const VedioTitle = styled.div`
    height: 22px;
    width: 95%;
    border-radius: var(--round-base);
    text-decoration: none;
    /* background-color: var(--primary-gray); */
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 10px; 
    font-size: 14px; 
    color: white;
`;

const ChannelName = styled.div`
    height: 22px;
    width: 75%;
    border-radius: var(--round-base);
    background-color: var(--primary-gray);
`;

export default Vedio;
