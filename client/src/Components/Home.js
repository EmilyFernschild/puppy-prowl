import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home(){

    return (
        <div>
            <h2>Welcome to Puppy Prowl!</h2>
            <Carousel >
                <div>
                    <img alt="dog walking" src="https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </div>
                <div>
                    <img alt="dog walking" src="https://images.unsplash.com/photo-1599406580992-46ab5d96f296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" />
                </div>
                <div>
                    <img alt="dog walking" src="https://images.unsplash.com/photo-1530700131180-d43d9b8cc41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwd2Fsa2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
            </Carousel>
        </div>
    )
}
export default Home;