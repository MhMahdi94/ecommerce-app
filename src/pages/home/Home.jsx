import FlashSale from '../../compnent/flashSale/FlashSale'
import GetTouch from '../../compnent/getTouch/GetTouch'
import Hero from '../../compnent/hero/Hero'
import Prime from '../../compnent/prime/Prime'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
       <Hero/>
       <Prime/>
       <FlashSale/>
       <GetTouch/>
    </div>
  )
}

export default Home