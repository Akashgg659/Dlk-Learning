import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CodeProvider } from './Component/CodeContext/CodeContext';
import { MobileSearchProvider } from './Component/SearchBox/MobileViewContext/MobileSearchContex';
import { RatingProvider } from './Component/StarRating/RatingContext';
import { SignUpAuthProvider } from './Component/SignUpAuthenticationContext/SignUpAuthenication';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignUpAuthProvider>
    <MobileSearchProvider>
      <CodeProvider>
        <RatingProvider>
          
    <App />
        </RatingProvider>
      </CodeProvider>
    </MobileSearchProvider>
    </SignUpAuthProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
