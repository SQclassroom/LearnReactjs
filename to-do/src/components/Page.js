import React from 'react';
import {Books} from './data';

const List= Books.filter(person => person.type === 'Action');

const listItems = List.map(person =>
  <li>
     <img
       src={person.image}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
     </p>
  </li>
);

export default function Lists(){
  return(
    <>
      <ul>
        {listItems}
      </ul>
    </>
  )
}
