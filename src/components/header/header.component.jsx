import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
            {
                currentUser ? (
                    <div className='pointer option' onClick={() => {auth.signOut()}} title={"Welcome " + currentUser.displayName}>SIGN OUT</div>
                ) : (
                    <Link className='option' to='/signin'>SIGN IN</Link>
                )
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

// connect = higher order function
export default connect(mapStateToProps)(Header);