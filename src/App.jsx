import './App.css'
import { Navbar } from './components'
import Footer from './components/Footer'
import MainLayout from './layouts/MainLayout'
import About from './pages/LandingPage/About'
import ContactUs from './pages/LandingPage/ContactUs'
import Home from './pages/LandingPage/Home'
import Routed from './routes/routes'

function App ()
{
  return (
    <>
      <Routed />
    </>
  )
}

export default App
