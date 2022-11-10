import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'

const ResidentInfo = ({ characters }) => {
    const [citizen, setcityzen] = useState([])
    useEffect(() => {
        axios.get(`${characters}`)
            .then(res => (setcityzen(res.data)))
    }, [])


    console.log(citizen);
    return (
        <div className='container-grid'>

        <div className='residentsContainer'>
            <li className='residentInfo'>
                <div  style={citizen.status=== "Alive"? {background:"green"}:{backgroundColor:"red"}} className="status-color"></div> <h3 className='status'>Status: {citizen.status}</h3>
                <img src={citizen.image} alt="" /> 
                <h2>{citizen.name}</h2>
                <h4 id='Race'>Race: </h4>
                <h3 >{citizen.species}</h3>
                <h4>Origin: </h4>
                <h3 >{citizen.origin?.name}</h3>
                <h4>Appearences in Episodes:</h4>
                <h3> {citizen.episode?.length}</h3>

                
            </li>
        </div>
        </div>
    );
};

export default ResidentInfo;