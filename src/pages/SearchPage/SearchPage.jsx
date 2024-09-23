// Dependecies
import styled from "styled-components";

// Components
import Vedio from "./Vedio";

function SearchPage() {
    return (
        <Wrapper>
            <Section>
                {Array.from({ length: 4 }).map((index) => {
                    return <Vedio key={index} />;
                })}
            </Section>
            <Section>
                {Array.from({ length: 4 }).map((index) => {
                    return <Vedio key={index} />;
                })}
            </Section>
        </Wrapper>
    );
}

// eslint-disable-next-line react/prop-types
function Section({ children }) {
    return (
        <SectionWrapper>
            {children}
            <Line />
        </SectionWrapper>
    );
}

// Styled Components

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--gap-base);
`;

const SectionWrapper = styled.div``;

const Line = styled.div`
    background-color: var(--border-gray-100);
    width: 100%;
    height: 1px;

    margin-top: var(--margin-5x);
    margin-bottom: var(--margin-6x);
`;

export default SearchPage;
