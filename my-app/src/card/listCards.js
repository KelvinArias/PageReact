import React from 'react';
import NewCard from './Card';

const ElementCard = props =>{
    const ListCards = props.list.map((content,i) => <NewCard content={content} key={i} />);
    return ListCards;
}

export default ElementCard;