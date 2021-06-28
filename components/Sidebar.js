import { Avatar, IconButton } from "@material-ui/core";
import styled from "styled-components";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {
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

const SearchInput = styled.input`
outline-width: 0;
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


