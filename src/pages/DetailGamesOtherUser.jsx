import React from 'react'
import Navbar from '../components/navbar/navbar'
import CardDetail from '../components/detailGames/CardDetail'

function DetailGamesOtherUser() {

    document.body.style.backgroundColor="rgba(206, 197, 202, 0.8)"

  return (
    <div>
        <nav style={{height : "7vh"}}>
            <Navbar />
        </nav>

        <div className="body" style={{padding : "5%", minHeight : "93vh"}}>
            <CardDetail/>
        </div>
    </div>
  )
}

export default DetailGamesOtherUser