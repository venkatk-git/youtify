// Dependencies
import { styled } from "styled-components";

// Components
import { Icon } from "@iconify/react/dist/iconify.js";
import Logo from "../Logo/Logo";
import SearchFeild from "./SearchFeild";
import WatchPartyButton from "./WatchPartyButton";

// Context
import { useUser } from "../../../context/UserContext";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";

function NavigationBar() {
    const [searchParams] = useSearchParams();
    const user = useUser();
    const location = useLocation();

    const handleCopy = () => {
        const roomId = searchParams.get("roomId");

        navigator.clipboard.writeText(roomId).then(
            () => {
                console.log("URL copied to clipboard!");
            },
            (err) => {
                console.error("Failed to copy: ", err);
            }
        );
    };

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
            <WatchPartyWrapper>
                {location.pathname === "/watch" && (
                    <WatchPartyShare handleCopy={handleCopy} />
                )}
                <WatchPartyButton>
                    <Link to="/watchparty">Watch</Link>
                </WatchPartyButton>
            </WatchPartyWrapper>

            <Profile>
                {user ? <Picture src={user.picture} /> : <SadFace>☹️</SadFace>}
            </Profile>
        </Wrapper>
    );
}

function WatchPartyShare({ handleCopy }) {
    const [text, setText] = useState("Share");
    return (
        <ShareWrapper>
            <Button
                onClick={handleCopy}
                onMouseEnter={() => setText("Copy")}
                onMouseLeave={() => setText("Share")}
            >
                {text}
            </Button>
        </ShareWrapper>
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
    background-color: var(--primary-red);
    width: 28px;
    height: 28px;
    text-transform: uppercase;
    border-radius: 50%;
    align-self: center;
    margin-left: var(--gap-6x);
`;

const Picture = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: inherit;
`;

const SadFace = styled.span`
    margin-top: -4px;
`;

const WatchPartyWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--gap-4x);
`;

const ShareWrapper = styled.div``;

const Button = styled.button`
    background-color: var(--primary-red-100);
    padding: 10px var(--padding-6x);
    color: var(--color-gray-100);
    border-radius: 100px;
    font-size: var(--font-size-md);
    font-weight: var(--bold);
    width: 90px;
    cursor: pointer;

    &:hover {
        background-color: var(--primary-red);
    }

    & a {
        color: inherit;
        text-decoration: none;
    }
`;

export default NavigationBar;
