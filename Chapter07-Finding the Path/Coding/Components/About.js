import aboutImg from "../images/about us.png"
const About = () => {
    return (
        <div className="about-pge">
            <div className="about-left">
                <h1>The Fastest Delivery in Your City</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                <button>Order Now</button>

            </div>
            <div className="about-right">
                <img src={aboutImg} alt="about us" />
            </div>
        </div>
    )
} 

export default About;