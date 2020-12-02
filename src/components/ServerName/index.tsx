import React from 'react';

import { Container, Title, ExpandIcon } from './styles';


const ServerName: React.FC = () => { //TS
    return (
        <Container>
            <Title>Servidor do Nick</Title>

            <ExpandIcon />
        </Container>
    )
};

export default ServerName;
