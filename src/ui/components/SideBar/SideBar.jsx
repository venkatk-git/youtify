// Dependencies
import styled from "styled-components";

// Components
import { Icon } from "@iconify/react/dist/iconify.js";

function SideBar() {
    return (
        <Wrapper>
            <Section>
                <Link className="active">
                    <Icon icon="ic:round-home" style={{ color: "white" }} />
                    <Name>Home</Name>
                </Link>
                <Link>
                    <Icon
                        icon="solar:playlist-bold"
                        style={{ color: "white" }}
                    />
                    <Name>Smart Playlist</Name>
                </Link>
                <Link>
                    <Icon icon="mdi:theater" style={{ color: "white" }} />
                    <Name>Watch Party</Name>
                </Link>
            </Section>
            <Section>
                <Link>
                    <Icon
                        icon="solar:settings-linear"
                        style={{ color: "white" }}
                    />
                    <Name>Settings</Name>
                </Link>
                <Link>
                    <Icon icon="tabler:logout" style={{ color: "white" }} />
                    <Name>Sign out</Name>
                </Link>
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

const Link = styled.div`
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
