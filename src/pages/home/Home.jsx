import Achievment from '../../compnent/achievment/Achievment'
import Blogs from '../../compnent/blogs/Blogs'
import FlashSale from '../../compnent/flashSale/FlashSale'
import GetTouch from '../../compnent/getTouch/GetTouch'
import Hero from '../../compnent/hero/Hero'
import Prime from '../../compnent/prime/Prime'
import Testimonial from '../../compnent/testimonial/Testimonial'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Hero />
        <Prime/>
        <FlashSale/>
        <GetTouch/>
        <Achievment/>
        <Testimonial/>
        <Blogs/>
      </div>
       {/* <Hero/>
       <Prime/>
       
       
       <Achievment/>
       <Testimonial/>
       <Blogs/> */}
    </div>
  )
}

export default Home