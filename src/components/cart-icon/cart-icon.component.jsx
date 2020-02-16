import React from 'react';
import { connect } from 'react-redux';

import { toggle } from '../../redux/toggle/toggle.action';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggle }) => (
    <div className='cart-icon' onClick={toggle}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggle: () => dispatch(toggle())
})

export default connect(null, mapDispatchToProps)(CartIcon);