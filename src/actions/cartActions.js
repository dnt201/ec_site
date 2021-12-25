import axios from '../axios'
// import axios from 'axios'
import axios1 from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,

  CART_SAVE_PAYMENT_METHOD,

  GET_RATES_REQUEST,
  GET_RATES_SUCCESS,
  GET_RATES_FAIL,
} from '../constants/cartConstants'

export const addToCart = (data, qty) => async (dispatch, getState) => {
  console.log("add to card",data, qty)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.product||data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      salePrice: data.price-(data.price*data.sale/100),
      sale: data.sale,
      stock: data.stock,
      qty,
    },
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })
}

export const checkOut = (data) => (dispatch) => {
}

export const getRates = (idCur) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RATES_REQUEST,
    })
    const getRates = await axios1.get('https://api.exchangerate-api.com/v4/latest/USD')
    const rates = getRates.data.rates[`${idCur}`];
    dispatch({
      type: GET_RATES_SUCCESS,
      payload: rates,
    })

  } catch (error) {
    dispatch({
      type: GET_RATES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

