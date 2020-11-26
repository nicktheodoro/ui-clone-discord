import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    margin-bottom: 8px;

    background-color: ${(props) => 
        props.isHome ? 'var(--discord)' : 'var(--primary)'};

    position: relative;
    cursor: pointer;

    > img {
        width: 24px;
        height: 24px;
    }

    &::before {

    }

    &::after {

    }

    transition: border-radius .2s, background-color .2s;

    &.active, &:hover {
        border-radius: 16px;
        background-color: ${props => props.isHome ? 'var(--discord)' : 'var(--discord)'}
    }
`;
