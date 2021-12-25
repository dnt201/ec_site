import React, {useState,useEffect} from 'react'
import Product from '../product/Product'


import './ListProduct.css'

const ListProduct = (props) => {
    const listProductLapTopGaming = [
        {
            "id": "61a32a2e3f90eaec3cf3d6b0",
            "name": "MSI GF65 Thin11ser 0765VN",
            "category": "Laptop",
            "type": "Gaming Laptop",
            "price": 31750000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Fmsi-gf65-thin-10ue-228vn-i7-10750h_6b37bbecaaf44328a76ce6d1a46201c3_grande.png?alt=media&token=bf1ba587-0199-44fb-9d87-2c2dc1df5fb8",
            "sale": 5,
            "shortInfomation": {
                "cpu": "i9 9900k",
                "monitor": {
                    "size": "17.3'",
                    "hz": "144hz",
                    "resolution": "FHD"
                },
                "ram": "32GB",
                "storage": {
                    "hdd": "1TB",
                    "ssd": "516GB"
                },
                "vga": "RTX 3060",
                "weight": "2.4KG"
            }
        },
        {
            "id": "61a32b8a3f90eaec3cf3d6c5",
            "name": "Laptop Acer Nitro 5 AN515-54-52EZ(NH.Q59SV.019) ĐEN",
            "category": "Laptop",
            "type": "Gaming Laptop",
            "price": 31750000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2F8149_acer_nitro_5_an515_54_52ez_nh_q59sv_019_black_i5_1.png?alt=media&token=9571edc1-e58b-4766-b530-cc05160ad410",
            "sale": 25,
            "shortInfomation": {
                "cpu": "i5 9300h",
                "monitor": {
                    "size": "15.6'",
                    "hz": "144hz",
                    "resolution": "FHD"
                },
                "ram": "8GB",
                "storage": {
                    "hdd": " ",
                    "ssd": "516 GB"
                },
                "vga": "GTX 1650",
                "weight": "2.3KG"
            }
        },
        {
            "id": "61a32c4b3f90eaec3cf3d6d1",
            "name": "Laptop Lenovo Gaming 4 15IHU61",
            "category": "Laptop",
            "type": "Gaming Laptop",
            "price": 45000000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Flaptop-lenovo-ideapad-gaming-3-15ihu6-82k100fbvn-3.png?alt=media&token=45227db9-7f0f-4cf8-be01-8fbb03475996",
            "sale": 0,
            "shortInfomation": {
                "cpu": "i7 11370H",
                "monitor": {
                    "size": "15.6'",
                    "hz": "120hz",
                    "resolution": "FHD+++"
                },
                "ram": "8GB",
                "storage": {
                    "hdd": "1TB",
                    "ssd": "512 GB"
                },
                "vga": "RTX 3050 4GB",
                "weight": "2.34KG"
            }
        },
        {
            "id": "61ab13cd484b6841941ab1d9",
            "name": "MSI Katana GF77",
            "category": "Laptop",
            "type": "Gaming Laptop",
            "price": 31999000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Fgf76-2.jpg?alt=media&token=c29b4fdd-71ef-4945-8aa1-94f42e6e3530",
            "sale": 12,
            "saleEnd": "2022-12-04T07:08:07.000Z",
            "shortInfomation": {
                "cpu": "i7-11800h",
                "monitor": {
                    "size": "15.6'",
                    "hz": "144hz",
                    "resolution": "FullHD 100%sRGB"
                },
                "ram": "8GB",
                "storage": {
                    "hdd": "None",
                    "ssd": "512GB"
                },
                "vga": "RTX 3050 4GB GDDR6",
                "weight": "2.6Kg"
            }
        },
        {
            "id": "61ab1463484b6841941ab230",
            "name": "Laptop MSI GS65 Stealth 8RE 208VN",
            "category": "Laptop",
            "type": "Gaming Laptop",
            "price": 21000000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2F25727_laptop_msi_gs65_stealth_8re_208vn.png?alt=media&token=451b672f-6326-4a32-bcd8-a174d4c9cb54",
            "sale": 0,
            "shortInfomation": {
                "cpu": "i7-8750H",
                "monitor": {
                    "size": "17'",
                    "hz": "144hz",
                    "resolution": "FullHD"
                },
                "ram": "16GB",
                "storage": {
                    "hdd": "1TB",
                    "ssd": "256GB"
                },
                "vga": "GTX 1060 6GB",
                "weight": "1.8Kg"
            }
        },
        {
            "id": "61ab152b484b6841941ab24b",
            "name": "Laptop MSI Gaming GE76 Raider 10UH",
            "category": "Laptop",
            "type": "Gaming Laptop",
            "price": 111089000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Fge76-1.jpg?alt=media&token=1832970c-6fc4-4424-8852-bc51498111ef",
            "sale": 0,
            "shortInfomation": {
                "cpu": "I9 10980HK",
                "monitor": {
                    "size": "17.3 ",
                    "hz": "240Hz",
                    "resolution": "FHD  IPS"
                },
                "ram": "64GB",
                "storage": {
                    "hdd": "None",
                    "ssd": "2TB "
                },
                "vga": "RTX3080 ",
                "weight": "2.64Kg"
            }
        },
        {
            "id": "61ab15ae484b6841941ab268",
            "name": "Laptop MSI Stealth 15M A11SDK 061VN/060VN",
            "category": "Laptop",
            "type": "Gaming Laptop",
            "price": 25550000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2F5373_msi_modern_14_a10ras___rose_pink_4.png?alt=media&token=4d7b6bfa-02ed-4151-8474-d9c1399cc78a",
            "sale": 7,
            "shortInfomation": {
                "cpu": "i7 1185G7",
                "monitor": {
                    "size": "15.6'",
                    "hz": "144hz",
                    "resolution": "FullHd"
                },
                "ram": "8GB",
                "storage": {
                    "hdd": "None",
                    "ssd": "512Gb Nvme"
                },
                "vga": "GTX 1660Ti MaxQ 6GB",
                "weight": "1.68Kg"
            }
        },
        {
            "id": "61ab1633484b6841941ab287",
            "name": "Laptop Acer Aspire 7 A715-42G-R4ST",
            "category": "Laptop",
            "type": "Gaming Laptop",
            "price": 12000000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Facer.png?alt=media&token=1e0b8066-1259-411c-b34b-d14507393f7a",
            "sale": 0,
            "shortInfomation": {
                "cpu": "AMD Ryzen 5-5500U",
                "monitor": {
                    "size": "15.6'",
                    "hz": "60hz",
                    "resolution": "FullHd"
                },
                "ram": "8Gb",
                "storage": {
                    "hdd": "None",
                    "ssd": "512Gb"
                },
                "vga": "GTX1650 4GB",
                "weight": "2.1Kg"
            }
        },
        {
            "id": "61ab1685484b6841941ab2a8",
            "name": "Laptop Acer Gaming Predator Triton 500",
            "category": "Laptop",
            "type": "Gaming Laptop",
            "price": 79489000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Ftriton500.png?alt=media&token=383b668b-0753-4650-88bf-df330a9ddcf0",
            "sale": 11,
            "shortInfomation": {
                "cpu": "I7-10875H ",
                "monitor": {
                    "size": "15.6'",
                    "hz": "144hz",
                    "resolution": "FullHd"
                },
                "ram": "32GB ",
                "storage": {
                    "hdd": "1TB",
                    "ssd": "1TB"
                },
                "vga": "RTX 2080 8GB",
                "weight": "2.4Kg"
            }
        }
    ]
    const listProductLapTopOffice = [
        {
            "id": "61ab928d285ac67aaf91dd6e",
            "name": "Laptop Acer Aspire 3 A315-56-502X",
            "category": "Laptop",
            "type": "Office Laptop",
            "price": 16000000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Fn8zZNgE.png?alt=media&token=6c90d3a2-e586-4501-8b2f-1c0a87f88177",
            "sale": 0,
            "shortInfomation": {
                "cpu": "i5 1035G1",
                "monitor": {
                    "size": "15.6'",
                    "hz": "60hz",
                    "resolution": "FullHd"
                },
                "ram": "8Gb",
                "storage": {
                    "hdd": "512Gb",
                    "ssd": "512Gb"
                },
                "vga": "Mx440",
                "weight": "1.6Kg"
            }
        },
        {
            "id": "61ab92dd285ac67aaf91dd78",
            "name": "LENOVO X1 CARBON GEN 7",
            "category": "Laptop",
            "type": "Office Laptop",
            "price": 25000000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2F37157_37148_thinkpad_e15_gen_2_intel_ct1_01.png?alt=media&token=1b5a7e93-47d6-48b6-9c51-c8de1e8cdc01",
            "sale": 0,
            "shortInfomation": {
                "cpu": "i5 10500U",
                "monitor": {
                    "size": "15.6'",
                    "hz": "60hz",
                    "resolution": "FullHd"
                },
                "ram": "8Gb",
                "storage": {
                    "hdd": "None",
                    "ssd": "512Gb"
                },
                "vga": "Onboard",
                "weight": "1.6Kg"
            }
        },
        {
            "id": "61ab9330285ac67aaf91dd85",
            "name": "Laptop Asus Vivobook A412FA-EK378T",
            "category": "Laptop",
            "type": "Office Laptop",
            "price": 12000000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Flaptop-m%E1%BB%8Fng-nh%E1%BA%B9-c%E1%BA%A5u-h%C3%ACnh-m%E1%BA%A1nh_1.png?alt=media&token=587e791b-ddef-4245-9cd1-d96e286e8f56",
            "sale": 0,
            "shortInfomation": {
                "cpu": "i3 8145U",
                "monitor": {
                    "size": "15.6'",
                    "hz": "60hz",
                    "resolution": "FullHd"
                },
                "ram": "4Gb",
                "storage": {
                    "hdd": "None",
                    "ssd": "512Gb"
                },
                "vga": "Onboard",
                "weight": "1.6Kg"
            }
        },
        {
            "id": "61ab96c9285ac67aaf91de49",
            "name": "Laptop MSI Modern 14 B11MOU 851VN",
            "category": "Laptop",
            "type": "Office Laptop",
            "price": 16000000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2F25727_laptop_msi_gs65_stealth_8re_208vn.png?alt=media&token=86584362-3ec6-4dfb-8a7e-b2e1b388e9b0",
            "sale": 0,
            "shortInfomation": {
                "cpu": "i3-1115G4",
                "monitor": {
                    "size": "15.6'",
                    "hz": "60hz",
                    "resolution": "FullHd"
                },
                "ram": "8GB",
                "storage": {
                    "hdd": "None",
                    "ssd": "512Gb"
                },
                "vga": "Onboard",
                "weight": "1.8Kg"
            }
        },
        {
            "id": "61ab9734285ac67aaf91de57",
            "name": "Laptop Asus ExpertBook B9450CEA-XH75",
            "category": "Laptop",
            "type": "Office Laptop",
            "price": 19000000,
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2F40111_w800.png?alt=media&token=debb320e-3b95-4ba8-9097-da1fd626f2d7",
            "sale": 0,
            "shortInfomation": {
                "cpu": "i7-1165G7",
                "monitor": {
                    "size": "15.6'",
                    "hz": "75Hz",
                    "resolution": "2k"
                },
                "ram": "16GB",
                "storage": {
                    "hdd": "None",
                    "ssd": "512Gb"
                },
                "vga": "Onboard",
                "weight": "999Gram"
            }
        }
    ]
    console.log(props)
    return (
        <>
            {props.category==="Office Laptop" ? 
            <div className="listProduct">
                {listProductLapTopOffice && listProductLapTopOffice.map((product) => (
                    <Product key={product.id} product={product} />
                ))} 
            </div>
            :
            props.category==="Gaming Laptop" ? <div className="listProduct">
                {listProductLapTopGaming && listProductLapTopGaming.map((product) => (
                    <Product key={product.id} product={product} />
                ))} 
            </div> : <i>Không có sản phẩm</i>}
        </>
    )
}

export default ListProduct
