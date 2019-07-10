import React from 'react';

const CardContent = props =>{
    return (
      <div className="card-content">
        <p>{props.content.contentCard}</p>
      </div>
    )
}

export default CardContent;