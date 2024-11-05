// Dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getChannelInfo, getVideoTitle } from "../../services/videoServices";
import React from "react";

// eslint-disable-next-line react/prop-types
function Vedio({ videoId }) {
    const thumbnailurl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const [title, setTitle] = React.useState();
    const [channelInfo, setChannelInfo] = React.useState();

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const title = await getVideoTitle(videoId);
                const channelInfo = await getChannelInfo(videoId);
                setTitle(title);
                setChannelInfo(channelInfo);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <LinkWrapper to={"/watch"}>
            <Wrapper>
                <Frame src={thumbnailurl} />
                <DetailsWrapper>
                    <ChannelLogo src={channelInfo?.channelLogo} />
                    <InfoWrapper>
                        <VedioTitle>{title}</VedioTitle>
                        <ChannelName>{channelInfo?.channelName}</ChannelName>
                    </InfoWrapper>
                </DetailsWrapper>
            </Wrapper>
        </LinkWrapper>
    );
}

// Styled Components

const LinkWrapper = styled(Link)`
    text-decoration: none;
`;

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

const ChannelLogo = styled.img`
    width: 28px;
    height: 24px;
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
    width: 85%;
    border-radius: var(--round-base);
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
    width: 85%;
    border-radius: var(--round-base);
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 10px;
    font-size: 13px;
    color: var(--color-gray-800);
`;

export default React.memo(Vedio);
