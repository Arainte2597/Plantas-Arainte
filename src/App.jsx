
import './App.css';
import Cartwidget from './components/navbar/cartwidget';
import NavBar from './components/navbar/navBar';
import ItemListContainer from './itemList/itemListContainer';

function App() {
  return (
   <>
      <div className='titulo'>
          <h1>Las Macetas De Sandri</h1>
      </div>
      <div className='nav'>
        <NavBar/>
      </div>
      <div className='titulo'>
      <ItemListContainer greeting="Bienvenidos al E-Commerce de tomi"/>
      </div>
     
   </>
  );
}

export default App;
