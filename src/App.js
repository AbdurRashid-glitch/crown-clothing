import './App.css';
import {Route, Routes } from 'react-router-dom'

import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

const HatsPage = ()=>{
  return(
    <div>
      This is Hats page
    </div>
  )
}
function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route path='/hats' element={<HatsPage />}/>
        <Route path='/shop' element={<ShopPage />}/>
      </Routes>
    </div>
  );
}

export default App;
