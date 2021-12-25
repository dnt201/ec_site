import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { savePaymentMethod } from '../actions/cartActions'

import shipping from '../images/shipping.png'

import './PaymentPage.css'

const PaymentPage = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState("bank")
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (cartItems.length <= 0) navigate('/cart')
        return () => {

        }
    }, [])

    console.log(paymentMethod)
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }
    return (
        <>
            <div className="bread-crump">
                <div>
                    <Link to="/cart"> Cart <FontAwesomeIcon icon={faShoppingCart} /> </Link>
                    <FontAwesomeIcon icon={faChevronRight} className="bread-crump-icon" />
                </div>
                <div>
                    <b className="cl-custom">Payment</b>
                </div>
            </div>
            <div className="payment-container">
                <div className="wrap">
                    <h1>Chọn hình thức thanh toán thanh toán</h1>
                    <select onChange={(e) => setPaymentMethod(e.target.value || null)} >
                        <option value="bank">NDTH Bank</option>
                        <option value="paypal">Paypal</option>
                        <option value="cod">COD</option>
                    </select>
                    <button onClick={submitHandler} className="continue">Continue</button>
                </div>
                <img src={shipping} alt="shipping images" />
            </div>
        </>
    )
}

export default PaymentPage
