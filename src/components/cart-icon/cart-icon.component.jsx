import React from 'react';
import { connect } from 'react-redux';

import { cartAction } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggle, itemCount }) => (
    <div className='cart-icon' onClick={toggle}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{ itemCount }</span>
    </div>
);

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggle: () => dispatch(cartAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);