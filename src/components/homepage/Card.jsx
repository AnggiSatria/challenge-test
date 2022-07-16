import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
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
        },
        {
          img : IMG,
          name : 'Outlast',
          desc : 'Too Much JumpScare',
          genre : 'Horror',
          platform : 'windows',
          by : 'Red Barrels'
      },
      {
        img : IMG,
        name : 'Outlast',
        desc : 'Too Much JumpScare',
        genre : 'Horror',
        platform : 'windows',
        by : 'Red Barrels'
    },
    ]

  return (
    <div style={{display : "flex", flexWrap : "wrap"}}>
        {card.map((value) => {
            return <Link to="/games" style={{marginLeft : '10px', textDecoration : "none"}}><Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={value.img} />
            <Card.Body style={{padding : '15px'}}>
              <div className="title" style={{display : 'flex', flex : '50%'}}>
                <Card.Title style={{display : 'flex', flex : '1'}}>{value.name}</Card.Title>
                <Card.Text style={{display : "flex", justifyContent : 'flex-end', flex : '1'}}>{value.by}</Card.Text>
              </div>
              <Card.Text style={{marginTop : '10px', wordWrap : 'break-word'}}>
                {value.desc}
              </Card.Text>
              <Card.Text style={{marginTop : '10px', wordWrap : 'break-word'}}>
                {value.desc}
              </Card.Text>
              <div className="footer" style={{marginTop : '20px', display : "flex"}}>
              <Card.Text style={{wordWrap : 'break-word'}}>
                {value.genre}
              </Card.Text>
              <Card.Text style={{wordWrap : 'break-word', marginLeft : '20px'}}>
                {value.platform}
              </Card.Text>
              </div>
            </Card.Body>
          </Card>
          </Link>
        })}
    </div>
  )
}

export default Cards