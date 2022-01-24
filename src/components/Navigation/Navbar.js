import { Link } from "react-router-dom";    
import "./Navbar.css"
import logo from '../../assets/icon_logo.png'
export function Navbar() {
  return (
    <header>
    <nav className="navbar">
      <div className="logo">
      {/* <Link to="/">
        <img src={logo} alt="Spider"></img></Link> */}
      <h1 className="intro"> SPIDER FANS</h1>
      </div>
      
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/villan">Villan</Link>
        </li>
      </ul>
    </nav>
    </header>
  );
}
