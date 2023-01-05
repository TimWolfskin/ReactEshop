import React from 'react'
import './List.scss'
import Card from "../Card/Card"

const List = () => {

    const data = [
        {
            id: 1,
            img: "https://i.pinimg.com/736x/87/89/28/8789285a2af2d8aa73ad41b8c183d8a8.jpg",
            img2: "https://nextluxury.com/wp-content/uploads/dapper-mens-trendy-outfits-styles-blue-peacoat-with-grey-suit.jpg",
            title: "Long sleeve graphic t-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://cdn.luxe.digital/media/2019/09/12084923/casual-dress-code-men-style-chris-pine-luxe-digital.jpg",
            img2: "https://nextluxury.com/wp-content/uploads/dapper-mens-trendy-outfits-styles-blue-peacoat-with-grey-suit.jpg",
            title: "Long sleeve graphic t-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://i.pinimg.com/736x/18/0c/fc/180cfc2567c5e7f92a0d4c0c2a568099.jpg",
            img2: "https://nextluxury.com/wp-content/uploads/dapper-mens-trendy-outfits-styles-blue-peacoat-with-grey-suit.jpg",
            title: "Long sleeve graphic t-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://i.pinimg.com/736x/c9/81/e1/c981e14d20cb932b86bf14ff1654360d.jpg",
            img2: "https://nextluxury.com/wp-content/uploads/dapper-mens-trendy-outfits-styles-blue-peacoat-with-grey-suit.jpg",
            title: "Long sleeve graphic t-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]
    return (
        <div className='list'>
            {data?.map(item => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default List
