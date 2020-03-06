import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    margin: -0.5em 1em 0px 2em;
    width: 100px;
    height: 100px;
`;

export const OptionsContainer = styled.div`
    width: 88%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    &:hover {
        color: grey;
        text-decoration: underline;
    }
`