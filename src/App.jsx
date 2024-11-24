import { useState } from 'react'
import Appheader from './components/AppHeader/AppHeader'
import AppForm from './components/AppForm/AppForm'
import AppPost from './components/AppPost/AppPost'

import './App.css'

function App() {


  return (
    <>
      <div className="container d-flex flex-column mb-3">

        <header className="d-flex justify-content-between p-5">
          <Appheader />

        </header>

        <main className="p-5">
          <AppForm />

          <AppPost />

        </main>





      </div>

    </>
  )
}

export default App
