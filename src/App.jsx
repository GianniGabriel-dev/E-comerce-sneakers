import './styles/App.css'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function App() {


  return (
    <>
      <header>
        <nav>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
            Home Page
          </NavLink>
          <NavLink to="shopPage" className={({ isActive }) => isActive ? "active-link" : ""}>
            Shop Page
          </NavLink>
          <NavLink to="cart" className={({ isActive }) => isActive ? "active-link" : ""}>
            Cart Page
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <p>Made by Gianni</p>
      </footer>
    </>
  )
}

export default App
