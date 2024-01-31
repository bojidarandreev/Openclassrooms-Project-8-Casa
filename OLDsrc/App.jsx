import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'

import './App.scss'
import { Outlet } from 'react-router'



function App() {

  

  return (
    <>
      <Navigation />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </>

  )
}

export default App
