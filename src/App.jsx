import { useState } from 'react'
import './App.css'
import { Navbar } from './components'
import Footer from './components/Footer'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'

function App ()
{
  const [ count, setCount ] = useState( 0 )

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
