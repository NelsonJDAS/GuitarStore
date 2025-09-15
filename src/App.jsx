import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ListaGuitarras from './Components/ListaGuitarras'

function App() {
    const [load, setLoad] = useState(false)
    const [cart, setCart] = useState([])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const AddToCard = (item) => {
        console.log(item)
        console.log(cart)
        const itemExist = cart.findIndex(guitar => guitar.id === item.id)
        if (itemExist >= 0) {
            const ItemCart = [...cart]
            ItemCart[itemExist].quantity++
            setCart(ItemCart)
        } else {
            item.quantity = 1
            setCart([...cart, item])
        }
    }

    const RemoveFromCart = (id) => {
        setCart(prevCart => prevCart.filter(guitar => guitar.id != id))
    }

    const Incrementar = (id) => {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity < 5) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updateCart)
    }

    const Disminuir = (id) => {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updateCart)
    }
    const VaciarCarrito = () => {
        setCart([])
    }



    return (
        <>
            <Header estado={load} funcion={setLoad} remove={RemoveFromCart} cart={cart} incrementar={Incrementar} disminuir={Disminuir} vaciar={VaciarCarrito} />

            {load && <ListaGuitarras cart={setCart} funcion={AddToCard} />}

            {load && <Footer />}
            <button onClick={() => console.log(cart)}>adas</button>
        </>
    )
}

export default App
