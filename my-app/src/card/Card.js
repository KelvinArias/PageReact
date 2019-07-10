import React from 'react';
import CardImage from './cardImage';
import CardContent from './cardContent';
import CardFooter from './cardFooter'

const NewCard = props => {
    return(
        <div className="col s12 m6">
          <div className="card">
            <CardImage content={props.content} />
            <CardContent content={props.content} />
            <CardFooter content={props.content} />
          </div>
        </div>
    ) 
  }

export default NewCard;