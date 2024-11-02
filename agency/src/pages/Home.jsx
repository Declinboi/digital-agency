import React from 'react'
import Hero from '../components/Hero'
import BrandLogo from '../components/BrandLogo'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import BlogCom from '../components/BlogCom'

const Home = () => {
  return (
    <div className='overflow-x-clip duration-300'>
        <Hero />
        <BrandLogo/>
        <Services/>
        <Testimonial/>
        <BlogCom/>
    </div>
  )
}

export default Home