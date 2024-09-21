// Dependencies
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function WatchPartyButton({ children }) {
    return <Button>{children}</Button>;
}

// Styled Components

const Button = styled.button`
    background-color: var(--primary-gray);
    padding: 10px var(--padding-6x);
    color: var(--color-gray-100);
    border-radius: 100px;
    font-size: var(--font-size-md);
    font-weight: var(--semibold);
    cursor: pointer;

    &:hover {
        background-color: var(--color-gray-200);
    }
`;

export default WatchPartyButton;
