// Dependecies
import styled from "styled-components";

// Components
import { Icon } from "@iconify/react/dist/iconify.js";

function Logo() {
    return (
        <Wrapper>
            <Icon icon="logos:youtube-icon" />
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: var(--font-size-l);
`;

export default Logo;
