import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { addToCart, removeFromCart} from '../actions/cartActions'

import './CartPage.css'


const CartPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
 

    const [itemPrice, setitemPrice] = useState(0)
    const [taxPrice, setTaxPrice] = useState(0)
    const [shippingPrice, setShippingPrice] = useState("")
    const [totalPrice, setTotalPrice] = useState(0)
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [country, setCountry] = useState()
    const [postalCode, setPostalCode] = useState("")

    console.log(cartItems.length)




   
    useEffect(() => {
        const itemP = cartItems.reduce((acc, item) => acc + item.qty * item.salePrice, 0);
        const taxP = cartItems.reduce((acc, item) => acc + item.qty * item.salePrice, 0) * 10 / 100;
        setitemPrice(itemP)
        setTaxPrice(taxP)
        setTotalPrice(itemP + taxP);
    }, [cart])
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const checkoutHandler = () => {
        if (cartItems.length <= 0) {
            alert('Oh no! Giỏ hàng rỗng!')
        }
        // else {
        //     if (
        //         (address === "" || city === "" || phoneNumber === "" || country === "" || postalCode === "") ||
        //         (address === null || city === null || phoneNumber === null || country === null || postalCode === null) ||
        //         (address === undefined || city === undefined || phoneNumber === undefined || country === undefined || postalCode === undefined)) alert("Vui lòng điền đầy đủ thông tin")
        //     else {
        //         const shipingInfo = {
        //             address, city, phoneNumber, country, postalCode
        //         }
        //         const temp = [];
        //         cartItems.map((item) => {
        //             temp.push({ id_product: item.product, quantity: item.qty })
        //             return 0;
        //         })
        //     }
        // }

        else {
            navigate('/payment')
        }

    }

    return (
        <div className="CartPage">
            <div className="cart-information">
                <h1 className="w-100p center">Thông tin</h1>
                    <div className="m-l-8px">
                        <h3>Họ tên: Khách hàng abcxyz</h3>
                        <h3>Gmail: spkt_univer_ute@hcmute.edu.vn</h3>
                        <div className="lv1">
                            <h3>Số điện thoại: </h3>
                            <input type="number"
                                //value={null}
                                placeholder={"Ex: 0333123123"}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="lv1">
                            <h3>Địa chỉ: </h3>
                            <input
                                //value={null}
                                type="text"
                                placeholder={"Ex: 110/20 Phạm Văn Đồng Phường Linh Chiểu"}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="lv1">
                            <div className="m-r-8px third-col">
                                <h3>Tỉnh/Thành Phố:</h3>
                                <input className="w-100p"
                                    //value={null}
                                    type="text"
                                    placeholder={"Ex: Hồ Chí Minh"}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="m-r-8px third-col" >
                                <h3>Postal code: </h3>
                                <input className="w-100p"
                                    //value={null}
                                    type="number"
                                    placeholder={"Ex: 100000"}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                />
                            </div>
                            <div className="m-r-8px third-col" >
                                <h3>Quốc gia:</h3>
                                <input className="w-100p"
                                    //value={null}
                                    type="text"
                                    placeholder={"Ex: Việt Nam"}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>


            </div>
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
                                                    <button className="remove-cart-item-btn" onClick={() => removeFromCartHandler(cartItem.product)}>Remove <FontAwesomeIcon className="remove-cart-item" icon={faTimes} /></button>
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
                                                <input className="w-80p" type="number" id="quantity" name="quantity" defaultValue={cartItem.qty||null} min={1} onChange={(e) =>{
                                                    if(e.target.value <=0) {
                                                        alert("Số lượng phải lớn hơn hoặc bằng 1. Nếu bạn muốn xóa sản phẩm ra khỏi giỏ, vui lòng click vào nút 'Remove'")}
                                                    else
                                                        dispatch(
                                                            addToCart(cartItem, Number(e.target.value))
                                                        )}
                                                } />
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
                    <div className="footer">
                        <Link to="/">Back to shop</Link>
                    </div>
                </div>

                <div className="cart-page-right ">
                    <div className="right-header">
                        <h1 className="ta-center"> ShopND</h1>

                    </div>
                    <div className="right-container flex-8">

                        {cartItems && cartItems.length === 0 ? <h3 className="t-a-center"> Opps! Bạn chưa mua gì cả ❤</h3> : <>
                            <h2>Summary</h2>
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
                                <span className="ta-right f-b cl-red">{(Intl.NumberFormat('de-DE').format(totalPrice) + " đ")}</span>
                            </div>
                        </>
                        }
                    </div>
                    <div className="footer">
                        <button className="checkout-footer"
                            onClick={checkoutHandler}
                        >CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
