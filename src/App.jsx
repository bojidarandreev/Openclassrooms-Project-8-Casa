import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'

import './App.css'
import { Outlet } from 'react-router'
import Carousel from './components/Carousel/Carousel'
import DropdownContainer from './components/Dropdown/Dropdown'
import CardData from './components/Card/Card'



function App() {

  

  return (
    <>
      <Navigation />
      <main>
        <Outlet />,
        {/* <Carousel />, */}
        {/* <DropdownContainer />, */}
        <CardData />
      </main>
      <Footer />
    </>

  )
}

export default App
