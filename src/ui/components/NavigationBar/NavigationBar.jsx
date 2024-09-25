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
                    className="icon"
                    icon="clarity:menu-line"
                    style={{ color: "white", marginBottom: "-2px" }}
                />
            </MenuIcon>
            <Logo />
            <Filler />
            <SearchFeild />
            <Filler />
            <WatchPartyButton>Watch</WatchPartyButton>
            <Profile>T</Profile>
        </Wrapper>
    );
}

// Styled Components
const Wrapper = styled.div`
    padding: var(--padding-3x) var(--padding-6x);
    display: flex;
    align-items: baseline;
`;

const MenuIcon = styled.div`
    font-size: var(--icon-size-md);
    margin-right: var(--margin-6x);
    width: 24px;
    height: 24px;
    padding: var(--padding-base);
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        background-color: var(--primary-gray);
    }

    & .icon {
        margin: 0;
        padding: 0;
    }
`;

const Filler = styled.div`
    flex: 1;
`;

const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: royalblue;
    width: 28px;
    height: 28px;
    text-transform: uppercase;
    border-radius: 50%;
    align-self: center;
    margin-left: var(--gap-6x);
`;

export default NavigationBar;
