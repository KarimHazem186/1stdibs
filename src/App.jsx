import React from 'react'
import './App.css'
import NotificationBar from './components/NotificationBar'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {

  return (
    <>
     <div className="min-h-screen flex flex-col">
      <NotificationBar />
        <Header />
        <main className='flex-grow'>
          <Home />
        </main>
        <Footer />
    </div>  
    </>
  )
}

export default App
