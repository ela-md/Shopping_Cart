import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/HomePage.jsx'
import CartPage from './pages/cart/CartPage.jsx'
import AppProvider from './context.jsx'


function App() {

return (
 <BrowserRouter>
  <AppProvider>
  <Routes>
    <Route path='/' element ={<HomePage />} />
    <Route path='/cart' element ={<CartPage />} />
   </Routes>
  </AppProvider>
  </BrowserRouter>
  )
}

export default App
