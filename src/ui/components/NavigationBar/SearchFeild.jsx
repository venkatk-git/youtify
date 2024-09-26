// Dependencies
import React from "react";
import styled from "styled-components";

// Components
import { Icon } from "@iconify/react/dist/iconify.js";

function SearchFeild() {
    const [searchPrompt, setSearchPrompt] = React.useState("");

    const handleSearchPrompt = (e) => {
        setSearchPrompt(e.target.value);
    };

    return (
        <Wrapper>
            <Input
                placeholder="Search"
                value={searchPrompt}
                onChange={handleSearchPrompt}
            />
            <Button>
                <Icon
                    icon="iconamoon:search-thin"
                    style={{ color: "var(--primary-text-color)" }}
                />
            </Button>
        </Wrapper>
    );
}

// Styled Components

const Wrapper = styled.div`
    color: var(--secondary-text-color);
    width: min(var(--nav-search-width), 80%);
    display: flex;
    height: 40px;
`;

const Input = styled.input`
    padding: var(--padding-2x);
    background-color: var(--search-bg);
    border: 1px solid var(--border-gray-100);
    border-radius: 100px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    flex: 1;
    font-size: var(--font-size-m);
    padding: 0 var(--padding-4x);
    font-weight: var(--semibold);
`;

const Button = styled.button`
    background-color: var(--primary-gray);
    border: 1px solid var(--border-gray-100);
    border-left: 0;
    padding: 0 var(--padding-5x);
    font-size: var(--font-size-l);
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-ll);
`;

export default SearchFeild;
