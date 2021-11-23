import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import {Route, Routes } from 'react-router-dom'
import ShopPage
 from './pages/shop/shop.component';
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
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route path='/hats' element={<HatsPage />}/>
        <Route path='/shop' element={<ShopPage />}/>
      </Routes>
    </div>
  );
}

export default App;
