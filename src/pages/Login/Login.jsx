import styled from "styled-components";
import { googleAuth } from "../../services/authServices";

function Login() {
    return (
        <Wrapper onClick={googleAuth}>
            <GoogleLogin >Login with google</GoogleLogin>
        </Wrapper>
    );
}

export default Login;

const Wrapper = styled.div`
    padding: 12px 24px;
    border: 1px solid white;
    width: fit-content;
    display: flex;
    margin: auto;
    margin-top: 128px;
    cursor: pointer;
`;
const GoogleLogin = styled.div``;
