import React, { useContext, useState, useEffect, useReducer } from 'react';
import { ProductContext } from 'contexts/ProductContext'
import { CartContext } from 'contexts/CartContext';

export const initialCartState = {
    cartData: [],
    filteredCartData: []
}

const CartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartData: [...state.cartData, ...payload.cartData]
            }
            case "FILTER_CART_ITEM":
            return {
                ...state,
                filteredCartData: [...payload.filteredCartData]
            }
        default:
            throw new Error('No case for type')
    }
}

export default CartReducer;

