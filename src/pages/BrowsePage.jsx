import React from 'react'
import Navbar from '../components/navbar/navbar'
import Cards from '../components/homepage/Card'

function BrowsePage() {

    document.body.style.backgroundColor="rgba(206, 197, 202, 0.8)"

  return (
    <div>
        <nav style={{height : "7vh"}}>
            <Navbar />
        </nav>

        <div className="card" style={{marginTop : '20px', minHeight : "93vh", padding : "3%", backgroundColor : "rgba(206, 197, 202, 0.8)", border : 'none'}}>
            <Cards />
        </div>
    </div>
  )
}

export default BrowsePage