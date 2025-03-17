import './styles/App.css'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {


  return (
    <>
      <header>
        <Link to="/">Home Page</Link>
        <Link to="shopPage">Shop page</Link>
        <Link to="cart">Cart page</Link>
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
