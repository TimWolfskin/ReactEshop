import React from 'react'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import Slider from '../../components/slider/Slider'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  )
}

export default Home
