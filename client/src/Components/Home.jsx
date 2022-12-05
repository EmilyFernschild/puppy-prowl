import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from 'react-bootstrap/Carousel';


function Home(){
    return (
        <div>
            <h2 className='welcome'>Welcome to Puppy Prowl!</h2>
            <Carousel infiniteLoop className='main-slide'>
                <div className='slide'>
                    <img alt="dog walking" src="https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
                <div className='slide'>
                    <img alt="dog walking" src="https://images.unsplash.com/photo-1556866261-8763a7662333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
                </div>
                <div className='slide'>
                    <img alt="dog walking" src="https://images.unsplash.com/photo-1599406580992-46ab5d96f296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" />
                </div>
            </Carousel>
            <div className='about'> 
                <h2>About Puppy Prowl:</h2>
                <p className='about-p'>Puppy Prowl started in 2016 when founder Joanna Windler branched off on her own from being a dog walker on Rover. Joanna started Puppy Prowl with just a few neighborhood clients and from there quickly grew her dog walking business through word of mouth. Soon the business grew so much that Gianna Crooks joined the team in 2019! Throughout the years of dog walking Joanna decided to take classes on dog training, specifically leash training! Gianna is currently taking classes to learn training too!
                    <br/>
                    If you are looking for affordable dog walking or dog training in the Monroe Connecticut area, please sign up and make your next dog walking appointment today! We look forward to meeting you and your dog(s)!
                </p>
            </div>
        </div>
    )
}

export default Home;