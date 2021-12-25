import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../components/loader/Loader'

import { checkCard, checkPin, checkCcv,pay } from '../actions/paymentAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faChevronRight, faDollyFlatbed, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { PAYMENT_CHECK_CARD_RESET, PAYMENT_CHECK_PIN_RESET, PAYMENT_CHECK_CCV_RESET,PAYMENT_PAY_RESET } from '../constants/paymentConstants'
import { CART_CLEAR_ITEMS } from '../constants/cartConstants'

import './PlaceOrderPage.css'


const PlaceOrderPage = () => {
    const dispatch = useDispatch()
    const [itemPrice, setItemPrice] = useState()
    const [taxPrice, setTaxPrice] = useState()
    const [messError, setMessError] = useState()

    const [step, setStep] = useState(0)
    const [accountNumber, setAccountNumber] = useState()
    const [pin, setPin] = useState()
    const [ccv, setCcv] = useState()


    let navigate = useNavigate();

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const checkCardState = useSelector((state) => state.checkCard)
    const checkPinState = useSelector((state) => state.checkPin)
    const { error: checkPinError,success:checkPinSuccess } = checkPinState
    const checkCcvState = useSelector((state) => state.checkCcv)
    const { error: checkCcvError,success:checkCcvSuccess } = checkCcvState
    const payState = useSelector((state) => state.pay)
    const { error: payError,success: paySuccess,loading: payLoading } = payState
    console.log(payState)


    useEffect(() => {
        if(cart?.paymentMethod !== "bank" && cart?.paymentMethod !== "paypal" && cart?.paymentMethod !== "cod")
            navigate('/payment')
        dispatch({ type: PAYMENT_CHECK_CARD_RESET })
        dispatch({ type: PAYMENT_CHECK_PIN_RESET })
        dispatch({ type: PAYMENT_CHECK_CCV_RESET })
        dispatch({ type: PAYMENT_PAY_RESET })
    }, [])

    useEffect(()=>{
        if(checkPinSuccess || checkCcvSuccess) setStep(2)
        if(paySuccess)  {
            //tạo hóa đơn
            dispatch({type:CART_CLEAR_ITEMS});
            localStorage.removeItem('cartItems')
            setStep(3)
        }
    },[checkPinSuccess, checkCcvSuccess,paySuccess])

    useEffect(() => {
        if (checkCardState.error) {
            setMessError(checkCardState.error)
            dispatch({ type: PAYMENT_CHECK_CARD_RESET })
            setStep(0)
        }
        if (checkPinError) {
            setMessError(checkPinError)
            dispatch({ type: PAYMENT_CHECK_PIN_RESET })
            setPin("")
            setStep(0)
        }
        if (checkCcvError) {
            setMessError(checkCcvError)
            dispatch({ type: PAYMENT_CHECK_CCV_RESET })
            setCcv("")
            setStep(0)
        }
        if (payError) {
            setMessError(payError)
            dispatch({ type: PAYMENT_PAY_RESET })
            setCcv("")
            setStep(0)
        }

    }, [checkCardState, checkPinError, checkCcvError,payError])

    useEffect(() => {
        if (!cart.paymentMethod)
            navigate('/payment');
        setItemPrice(cartItems.reduce((acc, item) => acc + item.qty * item.salePrice, 0));
        setTaxPrice(cartItems.reduce((acc, item) => acc + item.qty * item.salePrice, 0) * 10 / 100);
    }, [cart])
    return (
        <div className="place-order-container">
            <div className="bread-crump">
                <div>
                    <Link to="/cart"> Cart <FontAwesomeIcon icon={faShoppingCart} /> </Link>
                    <FontAwesomeIcon icon={faChevronRight} className="bread-crump-icon" />
                </div>
                <div>
                    <Link to="/payment"> Payment <FontAwesomeIcon icon={faDollyFlatbed} /> </Link>
                    <FontAwesomeIcon icon={faChevronRight} className="bread-crump-icon" />
                </div>
                <div>
                    <b className="cl-custom">Place order</b>
                </div>
            </div>
            <div className="thanh-toan-lazy">
                <div className="bill flex-1">
                    <h2 className="t-a-center">Summary</h2>
                    <div className="m-bt-16px summary-lazy-css">
                        <span>{cartItems.reduce((acc, item) => acc + item.qty, 0)} items: </span>
                        <span className="ta-right f-b">{(Intl.NumberFormat('de-DE').format(itemPrice) + " đ")}</span>
                    </div>
                    <div className="m-bt-16px summary-lazy-css">
                        <span>Thuế VAT 10%: </span>
                        <span className="ta-right f-b">{(Intl.NumberFormat('de-DE').format(taxPrice) + " đ")}</span>
                    </div >
                    <div className="m-bt-px summary-lazy-css">
                        <span>Tổng tiền: </span>
                        <span className="ta-right f-b cl-red">{(Intl.NumberFormat('de-DE').format(itemPrice + taxPrice) + " đ")}</span>
                    </div>
                </div>
                {cart.paymentMethod === "bank" ?
                    //Bank
                    <div className="wrap flex-2">
                        <h2 className="t-a-center"> Thanh toán dùng thẻ do NDTH Bank cung cấp:</h2>
                        {payLoading && <Loader />}
                        <h6><i className="error_message">{messError}</i></h6>
                        {!step &&
                            //Nhập số thẻ
                            step === 0 ?
                            <div className="info">
                                <div className="one_line">
                                    <b>Nhập mã số thẻ: </b>
                                    <input
                                        className="flex-1 m-l-8px"
                                        value={accountNumber||""}
                                        type="number"
                                        onChange={(e) => setAccountNumber(e.target.value)}
                                        placeholder="Ex: 01234567890123456"
                                    />
                                </div>
                                <button onClick={() => {
                                    if (!accountNumber) {
                                        alert("Vui lòng nhập số thẻ của bạn!");
                                    }
                                    else if (accountNumber.length !== 16)
                                        alert("Thẻ của bạn không hợp lệ")
                                    else {
                                        console.log("click")
                                        console.log(accountNumber)
                                        dispatch(checkCard(accountNumber))
                                        setMessError("")
                                        setStep(1)
                                    }
                                }}>Tiếp theo</button>
                            </div>
                            :
                            //Nhập pin hoặc ccv and thanh toán
                            step === 1 ?
                                <div className="info">
                                    {checkCardState.isCredit ?
                                        <>
                                            <div className="one_line">
                                                <b>Nhập CCV: </b>
                                                <input
                                                    value={ccv || ""}
                                                    className="flex-1 m-l-8px"
                                                    type="password"
                                                    onChange={(e) => setCcv(e.target.value)}
                                                    placeholder="CCV code"
                                                />
                                            </div>
                                            <button onClick={() => {
                                                if (!ccv) {
                                                    alert("Bạn chưa nhập mã CCV!");
                                                }
                                                else {
                                                    dispatch((checkCcv(accountNumber, ccv)))
                                                }

                                            }}>Thanh toán</button>
                                        </>
                                        :
                                        <>
                                            <div className="one_line">
                                                <b>Nhập Pin: </b>
                                                <input
                                                    value={pin || ""}
                                                    className="flex-1 m-l-8px"
                                                    type="password"
                                                    onChange={(e) => setPin(e.target.value)}
                                                    placeholder="Pin code"
                                                />
                                            </div>
                                            <button onClick={() => {
                                                if (!pin) {
                                                    alert("Bạn chưa nhập mã Pin!");
                                                }
                                                else {

                                                    dispatch((checkPin(accountNumber, pin)))
                                                }

                                            }}>Thanh toán</button>
                                        </>
                                    }

                                </div>
                                :
                                //Nhập pin hoặc ccv and thanh toán
                                step === 2 ?
                                    <div className="info">
                                        <h3 className="t-a-center">Bạn có thực sự muốn thanh toán?</h3>
                                        <button className="yes" onClick={()=> dispatch(pay("pay",accountNumber,parseInt(itemPrice+taxPrice),"Shop ND"))}>Yes <FontAwesomeIcon icon={faCheck}/> </button>
                                        <button className="cancel" onClick={
                                            ()=>{
                                                setStep(0);
                                                setAccountNumber("");
                                                setMessError("Bạn đã hủy thanh toán!")
                                                setPin("")
                                                setCcv("")
                                            }
                                        }> 
                                            Cancel <FontAwesomeIcon icon={faTimes}/> 
                                        </button>
                                    </div>
                                :
                                step === 3 ?
                                    <div>
                                        {paySuccess === true && <i>Bạn đã thanh toán thành công!</i> }
                                    </div>
                                
                                : null
                        }

                    </div>
                    : cart.paymentMethod === "paypal" ?
                        //Paypal
                        <div>Paypal</div>
                        : cart.paymentMethod === "cod" ?
                            //COD
                            <div>COD</div>
                            : null
                }
            </div>
            <div className="CartPage">
                <div className="container-cart-page">
                    <div className="cart-page-left flex-4">
                        <div className="left-header">
                            <h1> Shopping Cart</h1>
                            <span>{cartItems.length} items </span>
                        </div>
                        <div className="left-list-item">
                            {cartItems && cartItems.length !== 0
                                ?
                                <table className="w-100p">
                                    <colgroup>
                                        <col span="1" style={{ width: '45%' }} />
                                        <col span="1" style={{ width: '15%' }} />
                                        <col span="1" style={{ width: '15%' }} />
                                        <col span="1" style={{ width: '25%' }} />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    {/* Start-item */}
                                    <tbody>
                                        {cartItems.map((cartItem) => (
                                            <tr key={cartItem.product} className="item vtc-al-baseline ta-center  row-item-lazzy-quatroidat">
                                                <td className="flex al-it-center jfct-center item-infor">
                                                    <div>
                                                        <span className="cart-item-price">{cartItem.name}</span>
                                                        <br />

                                                    </div>
                                                    <img className="cart-item-img" src={cartItem.image} alt="123" />
                                                </td>
                                                <td>
                                                    {cartItem.sale === 0 ? <span className="cart-item-price"> {Intl.NumberFormat('de-DE').format(cartItem.price) + " đ"}  </span> :
                                                        <div>
                                                            <span className="cart-item-price-x"> {Intl.NumberFormat('de-DE').format(cartItem.price) + " đ"}  </span> <br />
                                                            <span className="cart-item-price sale"> {Intl.NumberFormat('de-DE').format(cartItem.salePrice) + " đ"}  </span>
                                                        </div>}
                                                </td>
                                                <td>
                                                    <input className="w-80p" type="number" id="quantity" name="quantity" value={cartItem.qty} disabled />
                                                </td>
                                                <td >
                                                    {cartItem.sale === 0 ?
                                                        <span>{Intl.NumberFormat('de-DE').format(cartItem.salePrice * cartItem.qty) + " đ"}</span>
                                                        :
                                                        <span>{Intl.NumberFormat('de-DE').format(cartItem.salePrice * cartItem.qty) + " đ"}</span>
                                                    }
                                                </td>
                                            </tr>)
                                        )}
                                    </tbody>
                                </table>
                                : <h3 className="ta-center w-100p"> <i>Bạn chưa có sản phẩm nào trong giỏ</i></h3>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrderPage
