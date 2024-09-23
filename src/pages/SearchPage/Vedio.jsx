// Dependencies
import styled from "styled-components";

function Vedio() {
    return (
        <Wrapper>
            <Frame />
            <DetailsWrapper>
                <VideoInfoWrapper>
                    <VedioTitle />
                    <VideoDescrption />
                </VideoInfoWrapper>
                <ChannelInfoWrapper>
                    <ChannelLogo />
                    <ChannelName />
                </ChannelInfoWrapper>
            </DetailsWrapper>
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    width: 100%;
    height: var(--vedio-frame-height);
    display: flex;
    gap: var(--gap-2x);
`;

const Frame = styled.div`
    height: clamp(124px, 50vw, 282px);
    aspect-ratio: 16 / 9;
    background-color: var(--primary-gray);
    border-radius: var(--round-2x);
`;

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--gap-2x);
    flex: 1;
`;

const ChannelLogo = styled.div`
    width: 34px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--primary-gray);
`;

const VideoInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--gap-2x);
    width: 100%;
`;

const VedioTitle = styled.div`
    height: 22px;
    width: 95%;
    border-radius: var(--round-base);
    background-color: var(--primary-gray);
`;

const VideoDescrption = styled.div`
    height: 22px;
    width: 62%;
    border-radius: var(--round-base);
    background-color: var(--primary-gray);
`;

const ChannelName = styled.div`
    height: 22px;
    width: 30%;
    border-radius: var(--round-base);
    background-color: var(--primary-gray);
`;

const ChannelInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--gap-2x);
    width: 100%;
`;

export default Vedio;
