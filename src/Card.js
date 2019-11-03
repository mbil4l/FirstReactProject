import React from 'react';

const Card = ({id, name, user}) => {
    return (
    <div className="bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?200x200`} alt=''/>
        <div>
            <h1>{name}</h1>
            <p>{user}</p>
        </div>
    </div>
    )
}

export default Card;