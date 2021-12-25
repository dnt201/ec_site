
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_CLEAR_ITEMS,
  GET_RATES_REQUEST,
  GET_RATES_SUCCESS,
  GET_RATES_FAIL,
} from '../constants/cartConstants'

export const cartReducer = (
  state = { cartItems: [], shipingInfo: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.product === item.product)
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      }
    default:
      return state
  }
}


export const getRatesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_RATES_REQUEST:
      return { loading: true }
    case GET_RATES_SUCCESS:
      return { loading: false, success: true, rates: action.payload }
    case GET_RATES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
