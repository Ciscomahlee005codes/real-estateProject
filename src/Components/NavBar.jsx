import './NavBar.css'
import { NavLink } from "react-router-dom"

const NavBar = () => {
  window.addEventListener('scroll', () => {
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
  })

  return (
    <header>
      <li className="logo">VISUAL.</li>
      <ul>
        <NavLink className='nav-link' to='/'><li>
          <span className="remove">Check Out</span> Our Towers</li></NavLink>
      </ul>
    </header>
  )
}

export default NavBar
