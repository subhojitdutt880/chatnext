import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    };

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
        <H1>ChatNext</H1>
<LoginContainer>
    <Logo src = "/chat.png"></Logo>
    <Button onClick={signIn} variant = "outlined">Sign in with Google</Button>
</LoginContainer>

        </Container>
    )
}

export default Login;

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
`;

const LoginContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
border-radius: 25px;
box-shadow: 0px 0px 50px gray;
background-repeat: no-repeat;
opacity: 0.8;
padding-bottom: 30px;
margin-top: -200px;
`;

const Logo = styled.img`
margin-bottom: 10px;
`;

const H1 = styled.h1`
color: white;
`;
