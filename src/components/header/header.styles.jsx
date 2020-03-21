import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
    padding: 10px 15px;
`

const PointerContainerStyles = css`
    cursor: pointer;
    &:hover {
        color: grey;
        text-decoration: underline;
    }
`

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
    ${OptionContainerStyles}
`

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
    ${PointerContainerStyles}
`
