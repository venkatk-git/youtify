// Dependencies
import styled from "styled-components";

function List({ playlist }) {
    const { title, description } = playlist;

    return (
        <Wrapper>
            <ListFrame>No thumbnail...</ListFrame>
            <InfoWrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Link>View full playlist</Link>
            </InfoWrapper>
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    width: 100%;
    max-width: 356px;
    display: flex;
    flex-direction: column;
    gap: var(--gap-4x);
    height: var(--vedio-frame-height);
`;

const ListFrame = styled.div`
    aspect-ratio: 16 / 9;
    height: clamp(84px, 50vw, 224px);
    background-color: var(--primary-gray);
    border-radius: var(--round-2x);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-l);
    font-weight: var(--bold);
    color: var(--color-gray-800);
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--gap-2x);
    width: 100%;
`;

const Title = styled.span`
    height: 16px;
    width: 75%;
    /* background-color: var(--primary-gray); */
    border-radius: var(--round-base);
`;

const Description = styled.span`
    height: 16px;
    width: 40%;
    /* background-color: var(--primary-gray); */
    border-radius: var(--round-base);
    font-size: var(--font-size-m);
    color: var(--color-gray-800);
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
