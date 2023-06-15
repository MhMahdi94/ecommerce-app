import './blogs.scss'
import placholder from '../../assets/placeholder.png';
const Blogs = () => {
    //TEMP
    const bloggs=[
        {
            title:'Best Summer Outfit Style',
            date:'14 Feb',
            place:'Livina Style',
            desc:'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        },
        {
            title:'Best Summer Outfit Style',
            date:'14 Feb',
            place:'Livina Style',
            desc:'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        },
        {
            title:'Best Summer Outfit Style',
            date:'14 Feb',
            place:'Livina Style',
            desc:'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        },
        {
            title:'Best Summer Outfit Style',
            date:'14 Feb',
            place:'Livina Style',
            desc:'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
        },
    ];
  return (
    <div className='blogs'>
        <div className="header">
            <span>Get Better Insights from Our Articles</span>
            <button>See more</button>
        </div>
        <div className="items">
            {bloggs.map(blogg=><div className="item">
                <img src={placholder} alt="" />
                <div className="details">
                    <span>{blogg.title}</span>
                    <div className="info">
                        <span>{blogg.date}</span>
                        <span>{blogg.place}</span>
                    </div>
                    <p>{blogg.desc}</p>
                    <button>Explore More</button>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default Blogs