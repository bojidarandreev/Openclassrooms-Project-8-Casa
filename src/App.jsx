import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'

import './App.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>

  )
}

export default App
