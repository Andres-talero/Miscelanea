import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Index = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<App />}/>
          <Route path="*" element={<App />} />

        </Routes>
      </BrowserRouter>
    </>
   );
}
 
export default Index;

ReactDOM.render(<Index />, document.getElementById('root'));


serviceWorkerRegistration.unregister();
