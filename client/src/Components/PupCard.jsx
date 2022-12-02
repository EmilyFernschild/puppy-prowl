import Card from 'react-bootstrap/Card';

function Pups({pup}){
    const name = pup.client.client_name.split(' ')
    return (
        <div className="pupcards">
        <Card className="pup-card" >
            <Card.Img variant="top" className="PupCardImg" alt="puppy" src={pup.dog_image} />
            <Card.Body className='card-body'>
                <Card.Title className='card-text' id="card-title">{pup.dog_name}</Card.Title>
                <Card.Text className='card-text'>{`Owner: ${name[0]}`}</Card.Text>
                <Card.Text className='card-text'>{`Gender: ${pup.gender}`}</Card.Text>
                <Card.Text className='card-text'>{`Age: ${pup.age}`}</Card.Text>
                <Card.Text className='card-text'>{`My size is ${pup.size} for my breed!`}</Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}
export default Pups;