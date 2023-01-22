import './App.css'
import { Navbar } from './components'
import Footer from './components/Footer'
import About from './pages/LandingPage/About'
import ContactUs from './pages/LandingPage/ContactUs'
import Home from './pages/LandingPage/Home'

function App ()
{
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
