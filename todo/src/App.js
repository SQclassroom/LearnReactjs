import React from 'react'


const Stock = [
  'this is car',
  'this is truck',
  'this is auto',
  'this is train'
];

const List =Stock.map(Stock => <li>{Stock}</li>);

const App = () => {
  return (
    <div>
      <ul>{List}</ul>
    </div>
  )
}

export default App