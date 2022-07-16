import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IMG from "../../assets/img/outlast.png"


function Cards() {

    const card = [
        {
            img : IMG,
            name : 'Outlast',
            desc : 'Too Much JumpScare',
            genre : 'Horror',
            platform : 'windows',
            by : 'Red Barrels'
        }
    ]

  return (
    <div style={{display : "flex", flexWrap : "wrap"}}>
        {card.map((value) => {
            return <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={value.img} />
            <Card.Body style={{padding : '15px'}}>
              <div className="title" style={{display : 'flex', flex : '50%'}}>
                <Card.Title style={{display : 'flex', flex : '1'}}>{value.name}</Card.Title>
                <Card.Text style={{display : "flex", justifyContent : 'flex-end', flex : '1'}}>{value.by}</Card.Text>
              </div>
              <Card.Text style={{marginTop : '20px', wordWrap : 'break-word'}}>
                {value.desc}
              </Card.Text>
              <Card.Text style={{marginTop : '20px', wordWrap : 'break-word'}}>
                {value.desc}
              </Card.Text>
              <Button variant="primary" style={{marginTop : '20px'}}>Go somewhere</Button>
            </Card.Body>
          </Card>
        })}
    </div>
  )
}

export default Cards