// Dependencies

import styled from "styled-components";

function WatchPartyButton() {
    return (
        <Wrapper>
            <Button>Watch</Button>
        </Wrapper>
    );
}

// Styled Components

const Wrapper = styled.div``;

const Button = styled.button`
    background-color: var(--primary-gray);
`;

export default WatchPartyButton;
