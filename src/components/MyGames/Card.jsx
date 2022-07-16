import React, { useState } from 'react'
import IMG from "../../assets/img/outlast.png"
import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap"
import { useQuery } from 'react-query'
import { API } from '../../config/api'


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

    const [games, setGames] = useState([]);
    const [sortType, setSortType] = useState('id');

    // useEffect(() => {
    //     const sortArray = type => {
    //       const types = {
    //         price: 'price',
    //         qty: 'qty'
    //       };
    //       const sortProperty = types[type];
    //       const sorted = [...datas].sort((a, b) => a[sortProperty] - b[sortProperty]);
    //       setDatas(sorted);
    //     };
    //     sortArray(sortType);
    //   }, [sortType]);

    let { data: game } = useQuery('games', async () => {
        const response = await API.get('/games');
        console.log(response)
        return setGames(response.data.games);
    });



  return (
    <div>
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