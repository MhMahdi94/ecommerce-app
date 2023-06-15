import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import  './prime.scss'
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Prime = () => {
    //TEMPORARY
    const collections=[
        // {name:'All Products'},
        {name:'Coats & Jacket'},
        {name:'Dressed'},
        {name:'Playsuit'},
        {name:'Short'},
        {name:'Skirt'},
        {name:'T-Shirt'}
    ];

    const cards=[
        {title:'Category Dress',head:'Tropical Suit'},
        {title:'Category Dress',head:'Tropical Suit'},
        {title:'Category Dress',head:'Tropical Suit'},
        {title:'Category Dress',head:'Tropical Suit'},
        {title:'Category Dress',head:'Tropical Suit'},
        {title:'Category Dress',head:'Tropical Suit'},
    ];
  return (
    <div className='prime'>
        <h2>Our Premium Collection</h2>
        
        <div className="sections">
            <span className='first'>All Products</span>
            {collections.map(collection=><span>{collection.name}</span>)}
        </div>

        <div className="cards">
            {cards.map(card=><div className="item">
                <span>{card.title}</span>
                <span className='head'>{card.head}</span>
                <ArrowForwardIcon className='iconBtn'/>
            </div>)};
        </div>
        <button>Find out More</button>
    </div>
  )
}

export default Prime