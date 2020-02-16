import { cartTypes } from './cart.types';

export const cartAction = () => ({
    type: cartTypes.TOGGLE
});

export const addItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item
});