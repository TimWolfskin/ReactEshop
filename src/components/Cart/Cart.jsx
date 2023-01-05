import React from 'react'
import './Cart.scss'

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://i.pinimg.com/736x/87/89/28/8789285a2af2d8aa73ad41b8c183d8a8.jpg",
            img2: "https://nextluxury.com/wp-content/uploads/dapper-mens-trendy-outfits-styles-blue-peacoat-with-grey-suit.jpg",
            title: "Long sleeve graphic t-shirt",
            isNew: true,
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos rerum facilis necessitatibus vitae ",
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://cdn.luxe.digital/media/2019/09/12084923/casual-dress-code-men-style-chris-pine-luxe-digital.jpg",
            img2: "https://nextluxury.com/wp-content/uploads/dapper-mens-trendy-outfits-styles-blue-peacoat-with-grey-suit.jpg",
            title: "Long sleeve graphic t-shirt",
            isNew: true,
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos rerum facilis necessitatibus vitae ",
            oldPrice: 19,
            price: 12,
        },
    ]
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">1 x ${item.price}</div>
                    </div>
                    <span className='delete'>
                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7948 1.01633H16.1738V2.10526H0.173828V1.01633H4.548V0H11.7948V1.01633ZM0.173828 3.65851V20H15.8661V3.65851H0.173828ZM14.5268 18.8694H1.51314V4.78915H14.5268V18.8694ZM4.67393 6.83942H3.33461V16.6609H4.67393V6.83942ZM7.34808 6.83942H8.68739V16.6609H7.34808V6.83942ZM12.7009 6.83942H11.3616V16.6609H12.7009V6.83942Z" fill="#FF0000" />
                        </svg>

                    </span>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$353</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    )
}

export default Cart
