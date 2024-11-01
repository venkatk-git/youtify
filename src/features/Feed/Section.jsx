// Dependencies
import styled from "styled-components";

// Components
import Vedio from "./Vedio";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

// eslint-disable-next-line react/prop-types
function Section({ title }) {
    const id = React.useId();
    return (
        <Wrapper>
            <Title>
                {title != "" && (
                    <Icon
                        className="icon"
                        icon="simple-icons:youtubeshorts"
                        style={{ color: "var(--primary-red)" }}
                    />
                )}
                {title}
            </Title>
            <GridWrapper>
                {Array.from({ length: 5 }).map((index) => (
                    <Vedio key={`${id}-${index}`} />
                ))}
            </GridWrapper>
            <ShowMore>
                <Line />
                <Button>Show more</Button>
                <Line />
            </ShowMore>
        </Wrapper>
    );
}

// Styled Components

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--gap-4x);
    color: var(--secondary-text-color);
`;

const Title = styled.span`
    display: flex;
    align-items: center;
    gap: var(--gap-base);
    font-size: var(--font-size-m);
    font-weight: var(--semibold);
    color: var(--color-gray-700);

    & .icon {
        font-size: 20px;
    }
`;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(324px, 1fr));
    gap: var(--gap-4x);
`;

const ShowMore = styled.div`
    display: flex;
    align-items: center;
`;

const Line = styled.div`
    flex: 1;
    height: 0px;
    border: 1px solid var(--border-gray-100);
`;

const Button = styled.button`
    background-color: transparent;
    padding: 10px var(--padding-6x);
    color: var(--color-gray-100);
    border-radius: 100px;
    border: 1px solid var(--border-gray-100);
    font-size: var(--font-size-s);
    font-weight: var(--normal);
    width: min(100%, 256px);
    cursor: pointer;

    &:hover {
        background-color: var(--color-gray-200);
    }
`;

export default Section;
