import React from 'react';

const Location = ({location}) => {
    return (
        <div className='location-info'>
            <header><h1>{location.name}</h1></header>
            <section>
            <h2>Type: {location.type}</h2> <h2>Type: {location.dimension}</h2> <h2>Population: {location.residents?.length}</h2>
            </section>
       
        </div>
    );
};

export default Location;