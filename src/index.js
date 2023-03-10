import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Find all widget divs
const widgetDivs = document.querySelectorAll('.nicoraynaud-finance-widget');

// Inject our React App into each class
widgetDivs.forEach(div => {
  console.log("><>>>>>>>>>>>>>>>>>>>", div.dataset.symbol, div.dataset.param2, div.dataset.param)
    ReactDOM.render(
      <React.StrictMode>
        <App symbol={div.dataset.symbol}/>
      </React.StrictMode>,
        div
    );
});