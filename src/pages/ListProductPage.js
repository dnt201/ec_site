import React, { useState } from 'react'
import CurrencyInput from 'react-currency-input-field';

import ListProduct from '../components/listproduct/ListProduct'
import Policy from '../components/policy/Policy'


import './ListProductPage.css'
import background from '../images/imglaptopgaming.png'

let listPrice = [
    {
        min: undefined,
        max: undefined,
        title: 'All',
        id: '0',
    },
    {
        min: 0,
        max: 10000000,
        title: 'Dưới 10tr',
        id: '1',
    },
    {
        min: 10000000,
        max: 15000000,
        title: 'Từ 10tr - 15tr',
        id: '2',
    },
    {
        min: 15000000,
        max: 20000000,
        title: 'Từ 15tr - 20tr',
        id: '3',
    }, {
        min: 20000000,
        max: 30000000,
        title: 'Từ 20tr - 30tr',
        id: '4',
    }, {
        min: 30000000,
        max: 40000000,
        title: 'Từ 30tr - 40tr',
        id: '5',
    }, {
        min: 40000000,
        max: undefined,
        title: 'Trên 40tr',
        id: '6',
    },
]

const ListProductPage = (props) => {
    const [min, setMin] = useState()
    const [max, setMax] = useState()



    return (
        <div className="ListProductPage">
            <img className="background" src={background} alt="background" />
            <div className="container">
                <div className="left-sidebar">
                    <h2 className="header-left-sidebar"> Bộ lọc sản phẩm</h2>
                    <div className="filter-wrap">
                        <div className="filter-header">Hãng sản xuất</div>
                        <div className="filter-body">
                            <div className="find-filter-wrap">
                                <div className="filter-item mg-b-8px">
                                    <input type="radio" className="option-input radio" name="manufacturer"
                                        value={0}
                                        defaultChecked
                                    />
                                    <span>All</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="filter-wrap m-t-16px">
                        <div className="filter-header">Mức giá</div>
                        <div className="filter-wrap-price">
                            {listPrice.map((item) => (
                                <div key={item.id} className={"price-filter "}> {item.title}</div>
                            ))}
                            <div className="price-filter-input-wrap">
                                <div className="m-b-8px">Hoặc nhập giá trị dưới đây</div>
                                <div className="filter-input-price m-b-8px">
                                    <CurrencyInput decimalsLimit={0} decimalSeparator=","
                                        groupSeparator="."
                                        className="form-input m-b-4px w-100p"
                                        placeholder="Từ"
                                        allowNegativeValue={false}
                                        value={min === 0 || min === "0" || min === undefined ? "" : min}
                                        onChange={(e) => setMin(e.target.value.replace(/[.]/g, ""))}
                                    />
                                    <CurrencyInput decimalsLimit={0} decimalSeparator=","
                                        groupSeparator="."
                                        className="form-input w-100p"
                                        allowNegativeValue={false}
                                        placeholder="Đến"
                                        value={max === 0 || max === "0" || max === undefined ? "" : max}
                                        onChange={(e) => setMax(e.target.value.replace(/[.]/g, ""))}
                                    />
                                </div>
                            </div>
                            <button className="btn-apply-price" onClick={()=>alert("Tính năng đăng được nâng cấp :vv vui lòng thử lại sau!")} > Áp dụng </button>
                        </div>
                    </div>
                </div>
                <div className="product-list">
                    <div className="list-header">
                        <div className="header-name-list">
                            <h2 className="mg-r-8px">{props.productType}</h2>
                            <span>({props.productType==="Office Laptop" ? "5" :  props.productType==="Gaming Laptop" ? "9" : "0"})</span>
                        </div>
                        <div className="header-sort-list">
                            <span className="mg-r-8px">Sắp xếp theo</span>
                            <select>
                                <option>
                                    Mới nhất
                                </option>
                                <option>
                                    Giá (thấp - cao)
                                </option>
                                <option>
                                    Giá (cao - thấp)
                                </option>
                                <option>
                                    Tên (A - Z)
                                </option>
                                <option>
                                    Tên (Z - A)
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="product-list">
                        {/* item truyền vào props category để vào list render */}
                        <ListProduct category={props.productType} />
                    </div>
                </div>
            </div>
            <Policy show={true} />
        </div>
    )
}
export default ListProductPage
