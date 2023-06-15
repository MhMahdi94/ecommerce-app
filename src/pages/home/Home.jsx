import Hero from '../../compnent/hero/Hero'
import Prime from '../../compnent/prime/Prime'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
       <Hero/>
       <Prime/>
    </div>
  )
}

export default Home