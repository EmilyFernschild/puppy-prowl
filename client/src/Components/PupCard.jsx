import Card from 'react-bootstrap/Card';
import ScrollToTop from "react-scroll-to-top";

function Pups({pup}){
    const name = pup.client.client_name.split(' ')
    return (
        <div className="pupcards">
        <div className="pup-card" >
            <img variant="top" className="PupCardImg" alt="puppy" src={pup.dog_image} />
            <div className='card-body'>
                <h3 className='card-text' id="card-title">{pup.dog_name}</h3>
                <Card.Text className='card-text'>{`Owner: ${name[0]}`}</Card.Text>
                <Card.Text className='card-text'>{`Gender: ${pup.gender}`}</Card.Text>
                <Card.Text className='card-text'>{`Age: ${pup.age}`}</Card.Text>
                <Card.Text className='card-text'>{`My size is ${pup.size} for my breed!`}</Card.Text>
            </div>
            <ScrollToTop smooth color="#7DE186" viewBox="0 0 24 24" svgPath="M18 15l-6-6-6 6" className='scroll' />
        </div>
        </div>
    )
}
export default Pups;