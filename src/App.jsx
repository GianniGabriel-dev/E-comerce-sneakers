import './styles/App.css'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'//navlink devuelve true o false si esta activo, esto me sirve paraestilizr el link si esta siendo usado
import { useState, useEffect } from 'react';
import { addProduct } from './utils/cart';


function App() {
    const [cart, setCart ] = useState([]);
    const[cartCount, setCartCount] = useState(0)

    const handleProductToCart= (id)=>{
        addProduct(id, cart, setCart)
        
    }
    useEffect(()=>{
      // Calcula la cantidad total de productos en el carrito sumando las cantidades (quantity) de cada producto.
      // Se ejecuta cada vez que el estado `cart` cambia.
      const newCartCount = cart.reduce((total, product) => total + product.quantity, 0);
      setCartCount(newCartCount);
      console.log(cart)
    },[cart])

  return (
    <>
      <header>
        <nav>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
            Home Page
          </NavLink>
          <NavLink to="shopPage" className={({ isActive }) => isActive ? "active-link" : ""}>
            Shop Page{cartCount}
          </NavLink>
          <NavLink to="cart" className={({ isActive }) => isActive ? "active-link" : ""}>
            Cart Page
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet context={{ handleProductToCart }}/>
      </main>
      <footer>
        <p>Made by Gianni</p>
      </footer>
    </>
  )
}

export default App
