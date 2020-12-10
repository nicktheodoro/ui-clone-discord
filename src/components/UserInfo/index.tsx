import React from 'react';

import { 
    Container,
    Profile,
    Avatar,
    UserData,
    Icons,
    MicIcon,
    HeadphoneIcon,
    SettingsIcon 
} from './styles';


const UserInfo: React.FC = () => { //TS
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Nick Theodoro</strong>
                    <span>#0310</span>
                </UserData>
            </Profile>
            
            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    )
};

export default UserInfo;
