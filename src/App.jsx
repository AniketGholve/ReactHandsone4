import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Student from './components/Student'
import Contactus from './components/Contactus'
import data from './components/Data'
import { createContext } from 'react'
export let Store = createContext();

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Store.Provider value={data}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/student' element={<Student />}></Route>
            <Route path='/contactus' element={<Contactus />}></Route>
          </Routes>
        </Store.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
