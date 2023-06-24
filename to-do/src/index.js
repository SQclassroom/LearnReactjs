import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Buttonplay from './components/button/buttonplay';
// import Btn from './components/button/btn'
// import Datahook from './hooks/datahook';
// import Hdata from './hooks/hdata';
// import Form from './components/form/form';
import Form1 from './components/form/form1';
// import Dataeffect from './hooks/useEffect/dataeffect';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
      <Form1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
