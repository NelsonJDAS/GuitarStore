import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ListaGuitarras from './Components/ListaGuitarras'
import { useCart } from './hooks/useCart'
function App() {
    const {    load,
    cart,
    setLoad,
    setCart,
    RemoveFromCart,
    Incrementar,
    Disminuir,
    VaciarCarrito,
    AddToCart,
isEmpty, cartTotal } = useCart()
    return (
        <>
            <Header estado={load} funcion={setLoad} remove={RemoveFromCart} cart={cart} incrementar={Incrementar} disminuir={Disminuir} vaciar={VaciarCarrito} isEmpty={isEmpty} cartTotal={cartTotal}/>

            {load && <ListaGuitarras cart={setCart} funcion={AddToCart} />}

            {load && <Footer />}
        </>
    )
}

export default App
