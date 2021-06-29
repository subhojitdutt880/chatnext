import { Avatar,Button,IconButton } from "@material-ui/core";
import styled from "styled-components";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator';

function Sidebar() {

const createChats = () => {
    const input = prompt("Enter the email address of the user to start chatting");

//Stopping code from executing incase of no input
if (!input) return null;

if (EmailValidator.validate(input)){

}

};

    return (
        <Container>
            <Header>
                <UserAvatar></UserAvatar>
                <IconsContainer>
                    <IconButton>
                        <ChatIcon></ChatIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </IconsContainer>
            </Header>
            <Search>
                <SearchIcon></SearchIcon>
                <SearchInput placeholder="Search chats"></SearchInput>
            </Search>
            <SidebarButton onClick={createChats}>Start a New Chat</SidebarButton>
        </Container>
    );
}

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
display: flex;
align-items: center;
padding: 28px;
border-radius: 2px;
`;

const SidebarButton = styled(Button)`
width: 100%;
border-top: 1px solid whitesmoke;
border-bottom: 1 solid whitesmoke;
`;

const SearchInput = styled.input`
outline-width: 0;
border: none;
flex: 1;
`;

const Header = styled.div`
display: flex;
position: sticky;
top: 0;
background-color: indigo;
z-index: 1;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80;
border-bottom: 1px solid;
`;

const UserAvatar = styled(Avatar)`
cursor: pointer;
:hover{opacity: 0.8;}
`;
const IconsContainer = styled.div``;
