import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo width={"100px"} height={"100px"} className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            {
                currentUser ? (
                    <OptionDiv onClick={() => {auth.signOut()}} title={"Welcome " + currentUser.displayName}>SIGN OUT</OptionDiv>
                ) : (
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                )
            }
        </OptionsContainer>
        <CartIcon />
        { hidden ? null : <CartDropDown /> }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

// connect = higher order function
export default connect(mapStateToProps)(Header);
