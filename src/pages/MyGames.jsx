import React from 'react'
import Navbar from '../components/navbar/navbar'
import Cards from '../components/MyGames/Card'

function MyGames() {

    document.body.style.backgroundColor="rgba(206, 197, 202, 0.8)"

  return (
    <div>
        <nav>
            <Navbar />
        </nav>

        <div className="body">
            <Cards/>
        </div>
    </div> 
  )
}

export default MyGames