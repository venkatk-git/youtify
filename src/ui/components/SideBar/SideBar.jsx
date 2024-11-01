// Dependencies
import styled from "styled-components";

// Components
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
    const location = useLocation();

    return (
        <Wrapper>
            <Section>
                <LinkWrapper
                    className={`${location.pathname == "/" ? "active" : ""}`}
                    to={"/"}
                >
                    <Icon icon="ic:round-home" style={{ color: "white" }} />
                    <Name>Home</Name>
                </LinkWrapper>
                <LinkWrapper
                    className={`${
                        location.pathname == "/smartplaylist" ? "active" : ""
                    }`}
                    to={"/smartplaylist"}
                >
                    <Icon
                        icon="solar:playlist-bold"
                        style={{ color: "white" }}
                    />
                    <Name>Smart Playlist</Name>
                </LinkWrapper>
                <LinkWrapper
                    className={`${
                        location.pathname == "/watchparty" ? "active" : ""
                    }`}
                    to={"/watchparty"}
                >
                    <Icon icon="mdi:theater" style={{ color: "white" }} />
                    <Name>Watch Party</Name>
                </LinkWrapper>
            </Section>
            <Section>
                <LinkWrapper
                    className={`${
                        location.pathname == "/settings" ? "active" : ""
                    }`}
                    to={"/settings"}
                >
                    <Icon
                        icon="solar:settings-linear"
                        style={{ color: "white" }}
                    />
                    <Name>Settings</Name>
                </LinkWrapper>
                <LinkWrapper>
                    <Icon icon="tabler:logout" style={{ color: "white" }} />
                    <Name>Sign out</Name>
                </LinkWrapper>
            </Section>
        </Wrapper>
    );
}

// Styled Components

const Wrapper = styled.div`
    min-width: 216px;
    padding-left: var(--padding-2x);
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--gap-base);
    border-bottom: 1px solid var(--border-gray-100);
    padding: 0 var(--padding-2x);
    padding-bottom: var(--padding-2x);

    &:not(:first-child) {
        padding-top: var(--padding-2x);
    }
`;

const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: flex;
    gap: var(--gap-7x);
    padding: var(--padding-2x);
    font-size: var(--font-size-ll);
    align-items: center;
    border-radius: var(--round-2x);

    &:hover {
        cursor: pointer;
        background-color: var(--primary-gray);
    }

    &.active {
        background-color: var(--primary-gray);
    }
`;

const Name = styled.span`
    font-size: var(--font-size-s);
`;

export default SideBar;
