import { Navibar } from './Navbar.jsx';
import { Menus } from './Menu.jsx';
import { useState, useEffect } from 'react';


export function Cart() {
  return (
    <>
      <Navibar />
      <Menus />
      <ComponentCart /> 
    </>
  );
}

function ComponentCart() {
  const userId = '1';
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cart')
      .then((response) => response.json())
      .then((cartData) => {
        if (!cartData || !cartData[userId]) {
          setCartItems([]);
        } else {
          setCartItems(cartData[userId].items);
        }
      })
  }, [userId]);

  return (
    <div>
      <h2>Indkøbskurv</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            Navn: {item.name} 
            Pris: {item.price} kr.
            Stil: {item.style}
          </li>
        ))}
      </ul>
    </div>
  );
}