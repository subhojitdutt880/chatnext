import { Avatar } from "@material-ui/core";
import styled from "styled-components";

function Chat({id, users}) {
    return (
        <Container>
             <UserAvatar></UserAvatar>
             <p>Recipient Email</p>
        </Container>            
    )
}

export default Chat

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 20px;

    :hover{background-color: whitesmoke;}  
`;

const UserAvatar = styled(Avatar)`
    margin: 5px;
    margin-right: 15px;
`;
