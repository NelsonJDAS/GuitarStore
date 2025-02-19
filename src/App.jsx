import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ListaGuitarras from './Components/ListaGuitarras'

function App() {
    const [count, setCount] = useState(0)
    const [load, setLoad] = useState(false)


    return (
        <>
            <Header estado={load} funcion={setLoad} />

            {load ? <ListaGuitarras estado={load}/> : ""}

            <Footer/>
        </>
    )
}

export default App
