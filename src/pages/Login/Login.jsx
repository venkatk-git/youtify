import styled from "styled-components";
import { googleAuth } from "../../services/authServices";

function Login() {
    return (
        <Wrapper>
            <GoogleLogin onClick={googleAuth}>Login with google</GoogleLogin>
        </Wrapper>
    );
}

export default Login;

const Wrapper = styled.div``;
const GoogleLogin = styled.div``;
