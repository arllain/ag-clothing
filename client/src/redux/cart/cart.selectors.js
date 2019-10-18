import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
   [selectCart],
   cart => cart.cartItems
);

export const selectCartHidden = createSelector(
   [selectCart],
   cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
   [selectCartItems],
   cartItems =>
      cartItems.reduce(
         (accumalstedQuantity, cartItem) =>
            accumalstedQuantity + cartItem.quantity,
         0
      )
);

export const selectCartTotal = createSelector(
   [selectCartItems],
   cartItems =>
      cartItems.reduce(
         (accumalstedQuantity, cartItem) =>
            accumalstedQuantity + cartItem.quantity * cartItem.price,
         0
      )
);
