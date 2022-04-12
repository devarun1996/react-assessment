import React, {useState} from 'react';
import './App.css';
import Header from './pages/Header';
import Register from './pages/Register';
import Home from './pages/home';
import Login from './pages/Login';
import Products from './pages/products';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [items, setItems] = useState([]);

  const changeItems = (items) => {
    setItems(items);
  }

  return (

    <Router>
      <div style={{width: '100%', height: '100%'}}>
        <Header 
          items={items}
          changeItems={changeItems.bind(this)}
          />
        <div style={{height: '90vh'}}>
          <Routes>
            <Route path='/' exact element={<Login />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/home' exact element={<Home />} />
            <Route path='/register' exact element={<Register />} />
            <Route path='/products' exact
             element={<Products  itemData={
              {
                items: items,
                changeItems: changeItems.bind(this)
              }

            }/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
