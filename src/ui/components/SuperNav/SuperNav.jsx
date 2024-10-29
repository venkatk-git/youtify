// Dependecies
import styled from "styled-components";

// Context
import { useUser } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

function SuperNav() {
    const user = useUser();
    const navigate = useNavigate();

    if (user) {
        return <></>;
    }

    return (
        <Wrapper>
            <Context>Please login to use all features </Context>
            <Button onClick={() => navigate("/login")}>
                Sign up (or) Login
            </Button>
        </Wrapper>
    );
}

export default SuperNav;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 42px;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-red);
    gap: var(--gap-2x);
`;

const Context = styled.span`
    font-weight: var(--semibold);
`;

const Button = styled.button`
    padding: var(--padding-base) var(--padding-4x);
    border-radius: 4px;
    font-weight: var(--bold);
    border: 1px solid var(--padding-gray);
    cursor: pointer;

    &:hover {
    }
`;
