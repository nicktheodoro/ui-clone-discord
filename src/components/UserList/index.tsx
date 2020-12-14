import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => { //TS
    return (
        <Container >
            <Role>Disponível - 1</Role>
            <UserRow nickname="Nick Theodoro"></UserRow>

            <Role>Offline - 18</Role>
            <UserRow nickname="Will do Grill" isBot />
        </Container>
    )
};

export default UserList;
