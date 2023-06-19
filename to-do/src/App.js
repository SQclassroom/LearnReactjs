import React from 'react';
// import Header from './pages/header/header';
// import Footer from './components/footer';
// import Lists from './components/Page';
import Button from './components/button';


const App = () => {
  return (
    <div>
      <Button name="click" message="hi" onPlay={() => console.log("Play")} onPause={() => console.log("Pause")}></Button>  
    </div>
  )
}

export default App