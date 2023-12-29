import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'

import './App.css'
import { Outlet } from 'react-router'
import Carousel from './components/Carousel/Carousel'
import DropdownContainer from './components/Dropdown/Dropdown'
import GetData from './components/GetData/GetData'


function App() {

  return (
    <>
      <Navigation />
      <main>
        <Outlet />,
        {/* <Carousel />, */}
        <DropdownContainer />,
        <GetData />
      </main>
      <Footer />
    </>

  )
}

export default App
