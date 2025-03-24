import './styles/App.css'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'//navlink devuelve true o false si esta activo, esto me sirve paraestilizr el link si esta siendo usado
import { useState, useEffect } from 'react';
import { addProduct } from './utils/cart';
import { icons } from './assets/icons';
import Logo from "./assets/logo.svg"
import './styles/header.css'


function App() {
    const [cart, setCart ] = useState([]);
    const[cartCount, setCartCount] = useState(0)//estado que calcual la cantidad de productos que aparece en el icono del cart
    const[menuOpen, setMenuOpen]=useState(false)

    const handleProductToCart= (id, img, title, price)=>{
        addProduct(id, img, title, price, cart, setCart)
        
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
        <section className='logo'>
          <p>SneakIt</p>
          <img src={Logo} alt="logo of the page, its a sneaker" />
        </section>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}> {/*Boton que aparece con css para hacer la pagian responive, al hacer click, se pasa el estado contario al que tenga*/}
          {menuOpen ? "✖" : "☰"} {/* Icono de hamburguesa o cerrar */}
        </button>
        <nav className={menuOpen ? "open" : ""}> {/*Cuando menuOpen sea true se le añade la clase opne, y en el css se edita  */}
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
            Home
          </NavLink>
          <NavLink to="shopPage" className={({ isActive }) => isActive ? "active-link" : ""}>
            Shop
          </NavLink>
          <section className='cartLink'>
            <NavLink  to="cart" className={({ isActive }) => isActive ? "active-link" : ""}>
              <p>Cart</p>
              <span>
                {icons[0].cartSvg}
                <span className='cartCountBubble'>{cartCount}</span>
              </span>
            </NavLink>
          </section>
        </nav>
      </header>
      <main>
        <Outlet context={{ handleProductToCart, cart, setCart}}/>
      </main>
      <footer>
        <p>Made by Gianni</p>
      </footer>
    </>
  )
}

export default App
