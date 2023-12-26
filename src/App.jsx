import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'

import './App.css'
import { Outlet } from 'react-router'
import Carousel from './components/Carousel/Carousel'

function App() {

  return (
    <>
      <Navigation />
      <main>
        <Outlet />,
        <Carousel />
      </main>
      <Footer />
    </>

  )
}

export default App
