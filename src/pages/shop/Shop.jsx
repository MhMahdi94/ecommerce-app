import './shop.scss'
import Hero from '../../compnent/hero/Hero'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import placholder from '../../assets/placeholder.png';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { CircularProgress, Rating } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';



const Shop = () => {
  //TEMP
  const products=[
    {name:'Coat and Jackets',},
    {name:'Dressses',},
    {name:'Playsuit',},
    {name:'Short',},
    {name:'Top',},
    {name:'Bottoms',}
  ];

  const featuredProducts=[
    {name:'Tropical Playsuit',price:'$100'},
    {name:'Tropical Playsuit',price:'$100'},
    {name:'Tropical Playsuit',price:'$100'},
    {name:'Tropical Playsuit',price:'$100'},
    {name:'Tropical Playsuit',price:'$100'},
    {name:'Tropical Playsuit',price:'$100'},
  ];
  const items=[
    {name:'Urbano Jacket',price:'$99',hint:'watchmenow',rate:5},
    {name:'Urbano Jacket',price:'$99',hint:'watchmenow',rate:5},
    {name:'Urbano Jacket',price:'$99',hint:'watchmenow',rate:5},
    {name:'Urbano Jacket',price:'$99',hint:'watchmenow',rate:5},
    {name:'Urbano Jacket',price:'$99',hint:'watchmenow',rate:5},
    {name:'Urbano Jacket',price:'$99',hint:'watchmenow',rate:5},
    {name:'Urbano Jacket',price:'$99',hint:'watchmenow',rate:5},
    {name:'Urbano Jacket',price:'$99',hint:'watchmenow',rate:5},
  ];

  const [fakeProducts, setfakeProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //fet products
  // async function getproducts() {
  //   try {
  //     const response = await axios.get('https://fakestoreapi.com/products');
      
  //     //console.log(response.data);
  //     setfakeProducts(response.data);
  //     setLoading(false);
  //     // console.log('fake: '+fakeProducts);
  //   } catch (error) {
  //     setLoading(false);
  //     console.error(error);
  //   }
  // }

  const getproducts= async()=>{
    // try{
      const resp=  await axios.get('https://fakestoreapi.com/products');
      setfakeProducts(resp.data);
      console.log(resp.data);
      setLoading(false);
    // }catch{

    // }
  }
  useEffect(() => {
    getproducts();
  
    // return () => {
    //   second
    // }
  }, [])
  
  return (
    <div className='shop'>
      <div className="container">
        <Hero/>

        <div className="products">
          <div className="left">
            <div className="search">
              <input type="text" placeholder='Search Products'/>
              <SearchOutlinedIcon className='icon'/>
            </div>

            <div className="priceFilter">
              <div className="head">
                <span>Price</span>
                <FilterAltOutlinedIcon style={{width:'30px', height:'30px' }}/>
              </div>
              <hr/>
              <div className="tail">
                <span>Range</span>
                <span>$5-$20</span>
              </div>
            </div>

            <div className="products">
              
              <span>Product Categories</span>
              {
              products.map(product=> 
                <div className="item">
                  <span>{product.name}</span>
                  <ArrowForwardIosOutlinedIcon/>
                </div>
              )}

              
            </div>
            <div className="featuredProducts">
              
              <span>Featured Products</span>
              
              {
              featuredProducts.map(product=> 
                <div className="item">
                  <img src={placholder} alt="" />
                  <div className="details">
                    <span>{product.name}</span>
                    <p>{product.price}</p>
                  </div>
                  
                </div>
              )}
              
            </div>
          
          </div>
          
          <div className="right">
            
                {loading?<CircularProgress/>:fakeProducts.map(item=>
                    <div className="item" key={fakeProducts.key}>
                      <FavoriteBorderOutlinedIcon className='likeBtn' onClick={getproducts}/>
                      <img src={item.image} alt="" />
                      <span>{item.title}</span>
                      <Rating
                        value={item.rate}
                      />  
                      <p>{item.hint}</p>
                      <span className="price">${item.price}</span>
                    </div>
                  )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Shop