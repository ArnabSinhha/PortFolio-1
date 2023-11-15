import React from 'react'
import './client.css'

import Khadi from './../Client/Khadi.jpg'
import Mahindra from './../Client/Mahindra.jpg'
import Apllo from './../Client/Apllo.jpg'

const  Client = () => {
  return (
    <section id="client">
        <h2 className="clientHeading">My Clients</h2>
        <span className="ClientDesc">I have had the oppertunity to with the adverse group of companies . Some of the notable clients I have worked with .</span>
        <div className="clients">
            <img src={Khadi} alt="" className="ClientImg" />
            <img src={Mahindra} alt="" className="ClientImg" />
            <img src={Apllo} alt="" className="ClientImg" />
        </div>

        
    </section>
  )
}

export default Client
