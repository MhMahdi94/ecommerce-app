import './testimonial.scss'

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <div className="container">
            <div className="left"></div>
            <div className="right">
                <span>Good Seller!</span>
                <p>
                    I am very happy with the services provided, it is very helpful, starting
                    from the insight that the company gave from the start that I did not
                    understand what it was so I got knowledge and made my website
                    look better
                </p>
                <span className="name">
                    Anna Saraspova
                </span>
                <span className="desc">
                    Your Beloved Buyer
                </span>
            </div>
        </div>
    </div>
  )
}

export default Testimonial