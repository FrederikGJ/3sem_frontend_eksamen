
import { Link } from 'react-router-dom'; 
import { Navibar } from './Navbar.jsx';
import { Menus } from './Menu.jsx';


export function Forside() {
  return (
    <>
    <div>
       <h1> Forside </h1>
       </div>
       <div>
       <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login/profil</Link></li>
        <li><Link to="/likede">Favoritter</Link></li>
        <li><Link to="/indkøbskurv">Indkøbskurv</Link></li>
      </ul>
    </nav>
       </div>
      < Navibar />
      < Menus />
    </>
  )
}

