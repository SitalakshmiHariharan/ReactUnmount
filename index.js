import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   <Header/>
   <Main content="I deliver the content"/>
   <Footer message= "happy" tagline="Always be happy"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
