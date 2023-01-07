import React, { useState } from 'react'
import './Product.scss'

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "https://i.pinimg.com/236x/b2/aa/0d/b2aa0def053b08f9e7dc1af4b3589998.jpg",
    "https://i.pinimg.com/736x/13/67/60/136760fe7077c2d663a9bb6403957fe2.jpg",
  ]

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$300</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          nemo repudiandae consectetur eveniet pariatur voluptatum voluptate aut,
          excepturi a adipisci enim. Quos assumenda error necessitatibus dolore
          quam illo, est eveniet?
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <img src="/img/cart.svg" alt="" /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <img src="/img/favourite.svg" alt="" />
            ADD TO WISH LIST
          </div>
          <div className="item">
            <img src="/img/history.svg" alt="" />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
