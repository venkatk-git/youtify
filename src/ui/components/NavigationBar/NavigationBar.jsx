// Dependencies
import { styled } from "styled-components";

// Components
import { Icon } from "@iconify/react/dist/iconify.js";
import Logo from "../Logo/Logo";
import SearchFeild from "./SearchFeild";
import WatchPartyButton from "./WatchPartyButton";

function NavigationBar() {
    return (
        <Wrapper>
            <MenuIcon>
                <Icon
                    icon="clarity:menu-line"
                    style={{ color: "white", marginBottom: "-2px" }}
                />
            </MenuIcon>
            <Logo />
            <Filler />
            <SearchFeild />
            <Filler />
            <WatchPartyButton>Watch</WatchPartyButton>
        </Wrapper>
    );
}

// Styled Components

const Wrapper = styled.div`
    padding: var(--padding-4x) var(--padding-6x);
    display: flex;
    align-items: baseline;
`;

const MenuIcon = styled.div`
    font-size: var(--icon-size-md);
    margin-right: var(--margin-6x);
    cursor: pointer;
`;

const Filler = styled.div`
    flex: 1;
`;

export default NavigationBar;
