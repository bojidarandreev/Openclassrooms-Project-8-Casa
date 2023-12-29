import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'

import './App.css'
import { Outlet } from 'react-router'
import Carousel from './components/Carousel/Carousel'
import Dropdown from './components/Dropdown/Dropdown'


function App() {

  return (
    <>
      <Navigation />
      <main>
        <Outlet />,
        <Carousel />,
        <Dropdown />
      </main>
      <Footer />
    </>

  )
}

export default App
