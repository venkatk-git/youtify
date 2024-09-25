// Dependencies
import styled from "styled-components";

function List() {
    return (
        <Wrapper>
            <ListFrame />
            <InfoWrapper>
                <Title></Title>
                <Owner></Owner>
                <Link>View full playlist</Link>
            </InfoWrapper>
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--gap-base);
    height: var(--vedio-frame-height);
`;

const ListFrame = styled.div`
    aspect-ratio: 16 / 9;
    height: clamp(84px, 50vw, 224px);
    background-color: var(--primary-gray);
    border-radius: var(--round-2x);
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--gap-base);
    width: 100%;
`;

const Title = styled.span`
    height: 16px;
    width: 75%;
    background-color: var(--primary-gray);
    border-radius: var(--round-base);
`;

const Owner = styled.span`
    height: 16px;
    width: 40%;
    background-color: var(--primary-gray);
    border-radius: var(--round-base);
`;

const Link = styled.span`
    width: fit-content;
    margin-top: 4px;
    cursor: pointer;
    color: var(--color-gray-400);
    font-weight: var(--semibold);
    font-size: var(--font-size-s);

    &:hover {
        color: var(--color-gray-600);
    }
`;

export default List;
