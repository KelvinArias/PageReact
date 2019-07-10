import React from 'react';

const CardImage = props =>{
    return (
      <div className="card-image">
        <img src={props.content.url} />
        <span className="card-title">{props.content.title}</span>
      </div>
    )
}

export default CardImage;
