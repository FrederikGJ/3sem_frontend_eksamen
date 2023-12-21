

import { Navibar } from './Navbar.jsx';
import { Menus } from './Menu.jsx';


export function Forside() {
  return (
    <>
      < Navibar />
      <div className='maincontainer'>
      <div className='menudiv'>
      < Menus /></div>
      <div className='maincontent'>
      <h1>Velkommen til vores smykke shop</h1>
      </div>
      <div className='fillerdiv'></div>
      </div>
    </>
  )
}

