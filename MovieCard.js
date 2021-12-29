import React from 'react'
import {Card} from 'react-bootstrap'

function MovieCard({Aflem}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {Aflem.image} />
    <Card.Body>
    <Card.Title>{Aflem.name}</Card.Title>

    <Card.Text>
        {Aflem.Description}
    </Card.Text>

    <Card.Text>
        {Aflem.rate}
    </Card.Text>
    
    </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
