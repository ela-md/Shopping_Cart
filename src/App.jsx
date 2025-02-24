import { AppProvider } from './context.jsx'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
  <>
    <AppProvider>
       <Navbar />
       <h1>App</h1>
    </AppProvider>
  </>
  )
}

export default App
