import { combineReducers } from "redux"

import {
    cartReducer,
    getRatesReducer
} from './cartReducers'

import {
    checkCardReducer,
    checkPinReducer,
    checkCcvReducer,
    payReducer,
}
from './paymentReducers'

const rootReducer = combineReducers({
    //cart
    cart: cartReducer,
    getRates:getRatesReducer,
    checkCard:checkCardReducer,
    checkPin:checkPinReducer,
    checkCcv:checkCcvReducer,
    pay:payReducer,
})

export default rootReducer;