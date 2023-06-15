import './flashSale.scss';

const FlashSale = () => {
    //Temp
    const items=[
        {title:'Tracksuit Hyped', subTitle:'Apple Cherry',newPrice:'$384',oldPrice:'$454'},
        {title:'Tracksuit Hyped', subTitle:'Apple Cherry',newPrice:'$384',oldPrice:'$454'},
        {title:'Tracksuit Hyped', subTitle:'Apple Cherry',newPrice:'$384',oldPrice:'$454'},
        {title:'Tracksuit Hyped', subTitle:'Apple Cherry',newPrice:'$384',oldPrice:'$454'},
    ];
  return (
    <div className='flashSale'>
        <div className="container">
            <span className='head'>Top Items</span>
            <div className="desc">
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </span>
            </div>

            <div className="scrollList">
                {items.map(item=><div className="item">
                    <div className="sale">
                        <span>SALE</span>
                    </div>
                    <span className='title'>
                        Tracksuit Hyped
                    </span>
                    <span className="subtitle">
                        Apple Cherry
                    </span>

                    <div className="prices">
                        <div className="new">
                            $384
                        </div>
                        <div className="old">
                            $454
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default FlashSale