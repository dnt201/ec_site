// import axios from '../axios'
 import axios from 'axios'
import {
    PAYMENT_CHECK_CARD_REQUEST,
    PAYMENT_CHECK_CARD_SUCCESS,
    PAYMENT_CHECK_CARD_FAIL,

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
    PAYMENT_PAY_FAIL
} from '../constants/paymentConstants'


export const checkCard = (cardNumber) => async (dispatch) => {
    try {
        dispatch({
            type: PAYMENT_CHECK_CARD_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const { data } = await axios.post(`/api/v1/isCreditCard`, { cardNumber }, config)

        dispatch({
            type: PAYMENT_CHECK_CARD_SUCCESS,
            payload: data.isCredit,
        })
    } catch (error) {
        dispatch({
            type: PAYMENT_CHECK_CARD_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const checkPin = (cardNumber, PIN) => async (dispatch) => {
    try {
        dispatch({
            type: PAYMENT_CHECK_PIN_REQUEST,
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const { data } = await axios.post(`/api/v1/checkPin`, { cardNumber, PIN }, config)

        dispatch({
            type: PAYMENT_CHECK_PIN_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PAYMENT_CHECK_PIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }

}

export const checkCcv = (cardNumber, CCV) => async (dispatch) => {
    try {
        dispatch({
            type: PAYMENT_CHECK_CCV_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const { data } = await axios.post(`/api/v1/checkCCV`, { cardNumber, CCV }, config)

        dispatch({
            type: PAYMENT_CHECK_CCV_SUCCESS,
            payload: data.isCredit,
        })
    } catch (error) {
        dispatch({
            type: PAYMENT_CHECK_CCV_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const pay = (typeTransaction,cardNumber,amount,shopName) => async (dispatch) => {
    try {
        dispatch({
            type: PAYMENT_PAY_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        console.log(`/api/v1/makeTransaction`, typeTransaction,cardNumber,amount,shopName)

        const { data } = await axios.post(`/api/v1/makeTransaction`, { typeTransaction,cardNumber,amount,shopName}, config)

        dispatch({
            type: PAYMENT_PAY_SUCCESS,
            payload: true,
        })
    } catch (error) {
        dispatch({
            type: PAYMENT_PAY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

  