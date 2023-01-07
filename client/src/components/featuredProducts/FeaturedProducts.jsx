import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "https://roguenation1776.com/wp-content/uploads/2020/02/rogue_af_army_mens.jpg",
            img2: "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Apparel/Men%27s%20Apparel/T-Shirts/EU-HW0402/EU-HW0402-web3_stasyc.png",
            title: "Long sleeve graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 35,
        },
        {
            id: 2,
            img: "https://roguenation1776.com/wp-content/uploads/2020/02/rogue_af_army_mens.jpg",
            img2: "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Apparel/Men%27s%20Apparel/T-Shirts/EU-HW0402/EU-HW0402-web3_stasyc.png",
            title: "Long sleeve graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 35,
        },
        {
            id: 3,
            img: "https://roguenation1776.com/wp-content/uploads/2020/02/rogue_af_army_mens.jpg",
            img2: "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Apparel/Men%27s%20Apparel/T-Shirts/EU-HW0402/EU-HW0402-web3_stasyc.png",
            title: "Long sleeve graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 35,
        },
        {
            id: 4,
            img: "https://roguenation1776.com/wp-content/uploads/2020/02/rogue_af_army_mens.jpg",
            img2: "https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Apparel/Men%27s%20Apparel/T-Shirts/EU-HW0402/EU-HW0402-web3_stasyc.png",
            title: "Long sleeve graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 35,
        },

    ]
    return (
        <div className='FeaturedProducts '>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus a iure fugiat eveniet ducimus accusantium quod
                    laboriosam repudiandae, molestiae ea facilis delectus! Iste quia expedita
                    quam id cumque sapiente error?
                    Consequuntur, vero. Soluta, possimus repellat voluptatem, rem eos quia
                </p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts
