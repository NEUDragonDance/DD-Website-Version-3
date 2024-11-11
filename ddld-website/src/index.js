import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { fadeIn } from './scripts/fadeAnimations.js'

const root = document.getElementById('root')
const react_root = ReactDOM.createRoot(root);

const observer = new IntersectionObserver(() => fadeIn(document));
observer.observe(root)

react_root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


