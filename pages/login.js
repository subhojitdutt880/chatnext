import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import {auth} from "../firebase"; 

function login() {
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

<LoginContainer>
    <Login>

    </Login>
<Button></Button>
</LoginContainer>

        </Container>
    )
}

export default login

const Container = styled.div`
height: 10px;
`;