import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import GetAllEssay from './components/GetAllEssay';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Router from './Router'
function App() {
  return (
     <Provider store={store}>
       <div className="App">
         <Router />
         <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
       </div>
     </Provider>
  );
}

export default App;
