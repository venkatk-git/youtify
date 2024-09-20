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
                <Icon icon="iconamoon:search-thin" style={{ color: "white" }} />
            </Button>
        </Wrapper>
    );
}

// Styled Components

const Wrapper = styled.div`
    color: var(--secondary-text-color);
    max-width: 256px;
`;

const Input = styled.input``;

const Button = styled.button``;

export default SearchFeild;
