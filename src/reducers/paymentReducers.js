import {
    PAYMENT_CHECK_CARD_REQUEST,
    PAYMENT_CHECK_CARD_SUCCESS,
    PAYMENT_CHECK_CARD_FAIL,
    PAYMENT_CHECK_CARD_RESET,
     
    PAYMENT_CHECK_PIN_REQUEST,
    PAYMENT_CHECK_PIN_SUCCESS,
    PAYMENT_CHECK_PIN_FAIL,
    PAYMENT_CHECK_PIN_RESET,
     
    PAYMENT_CHECK_CCV_REQUEST,
    PAYMENT_CHECK_CCV_SUCCESS,
    PAYMENT_CHECK_CCV_FAIL,
    PAYMENT_CHECK_CCV_RESET,
     
    PAYMENT_PAY_REQUEST,
    PAYMENT_PAY_SUCCESS,
    PAYMENT_PAY_FAIL,
    PAYMENT_PAY_RESET
 } from '../constants/paymentConstants'
 
 export const checkCardReducer = (state = {}, action) => {
    switch (action.type) {
      case PAYMENT_CHECK_CARD_REQUEST:
        return { loading: true }
      case PAYMENT_CHECK_CARD_SUCCESS:
        return { loading: false, success: true, isCredit: action.payload }
      case PAYMENT_CHECK_CARD_FAIL:
        return { loading: false, error: action.payload, success: false }
      case PAYMENT_CHECK_CARD_RESET:
        return {}
      default:
        return state
    }
  }

  export const checkPinReducer = (state = {}, action) => {
    switch (action.type) {
      case PAYMENT_CHECK_PIN_REQUEST:
        return { loading: true }
      case PAYMENT_CHECK_PIN_SUCCESS:
        return { loading: false, success: true }
      case PAYMENT_CHECK_PIN_FAIL:
        return { loading: false, error: action.payload, success: false }
      case PAYMENT_CHECK_PIN_RESET:
        return {}
      default:
        return state
    }
  }
  export const checkCcvReducer = (state = {}, action) => {
    switch (action.type) {
      case PAYMENT_CHECK_CCV_REQUEST:
        return { loading: true }
      case PAYMENT_CHECK_CCV_SUCCESS:
        return { loading: false, success: true }
      case PAYMENT_CHECK_CCV_FAIL:
        return { loading: false, error: action.payload, success: false }
      case PAYMENT_CHECK_CCV_RESET:
        return {}
      default:
        return state
    }
  }

  export const payReducer = (state = {}, action) => {
    switch (action.type) {
      case PAYMENT_PAY_REQUEST:
        return { loading: true }
      case PAYMENT_PAY_SUCCESS:
        return { loading: false, success: true }
      case PAYMENT_PAY_FAIL:
        return { loading: false, error: action.payload, success: false }
      case PAYMENT_PAY_RESET:
        return {}
      default:
        return state
    }
  }