import Card from 'react-bootstrap/Card';

function Pups({pup}){
    return (
        <div className="pupcards">
        <Card className="pup-card" class="align-items-center">
            <Card.Img variant="top" className="PupCardImg" alt="puppy" src={pup.dog_image} />
            <Card.Body className='card-body'>
                <Card.Title className='card-text' id="card-title">{pup.dog_name}</Card.Title>
                <Card.Text className='card-text'>{`Gender: ${pup.gender}`}</Card.Text>
                <Card.Text className='card-text'>{`Age: ${pup.age}`}</Card.Text>
                <Card.Text className='card-text'>{`I am ${pup.size} size for my breed!`}</Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}
export default Pups;