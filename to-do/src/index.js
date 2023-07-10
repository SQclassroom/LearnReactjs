import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
// import Buttonplay from './components/buttonplay';
// import Btn from './components/btn'
// import App from './App'
// import App from './App';
// import Dataeffect from './hooks/useEffect/dataeffect';
import Timer from './hooks/useEffect/Timer';
// import Useffect from './hooks/useEffect/useeffect';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
      <Timer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

