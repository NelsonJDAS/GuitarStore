import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ListaGuitarras from './Components/ListaGuitarras'

function App() {
    const [count, setCount] = useState(0)
    const [load, setLoad] = useState(false)
    const [cart, setCart] = useState([])

    return (
        <>
        <button onClick={() => console.log(cart)}>adas</button>
            <Header estado={load} funcion={setLoad} cart={cart} />

            {load && <ListaGuitarras cart={setCart} estado={load}/>}

            {load && <Footer/>}
        </>
    )
}

export default App
