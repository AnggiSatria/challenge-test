import React from 'react'
import Navbar from '../components/navbar/navbar'
import Forms from '../components/editGames/Form'

function EditGames() {

    document.body.style.backgroundColor="rgba(206, 197, 202, 0.8)"

  return (
    <div>
         <nav style={{height : "7vh"}}> 
            <Navbar/>
        </nav>

        <div className="form" style={{padding : "5%", minHeight : "93vh"}}>
            <Forms/>
        </div>
    </div>
  )
}

export default EditGames