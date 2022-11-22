import React from 'react';
import './App.css';
import ItemListContainer from './itemList/itemListContainer';
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import Navbar from './components/navbar/navBar';
import ItemDetailContainer from './itemDetail/itemDetailContainter';


function App() { 
  return (
    
   <BrowserRouter>
    <Navbar />
      <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:idCategory' element={<ItemListContainer/>} />
            <Route path='/category/:idItem' element={<ItemDetailContainer/>} />

            <Route path='*' element={<h1>ERROR 404!</h1> } />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
