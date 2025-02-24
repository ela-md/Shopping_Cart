import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/HomePage.jsx'
import CartPage from './pages/cart/CartPage.jsx'



function App() {

return (
 <BrowserRouter>
   <Routes>
    <Route path='/' element ={<HomePage />} />
    <Route path='/cart' element ={<CartPage />} />
   </Routes>
 </BrowserRouter>
  )
}

export default App
