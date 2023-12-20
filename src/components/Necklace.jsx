import { useState, useEffect } from "react";
import { Navibar } from "./Navbar.jsx";
import { Menus } from "./Menu.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function Necklace() {
  return (
    <>
      <Navibar />
      <Menus />
      <ComponentNecklace />
    </>
  );
}

function ComponentNecklace() {
  const [necklaces, setNecklaces] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/jewelry");

      const data = await response.json();
      console.log("fetched data:", data);

      const necklaceItems = data.filter((item) => item.type === "necklace");
      console.log("necklaceItems:", necklaceItems);

      setNecklaces(necklaceItems);
    };
    fetchData();
  }, []);

  // Lige nu er det bare ID 1 da det med login ikke virker endnu
  const addToCart = (necklace) => {
    const userId = "1";

    fetch("http://localhost:3000/cart")
      .then((response) => response.json())
      .then((cartData) => {
        const userCart =
          cartData && cartData[userId]
            ? cartData[userId]
            : { userId, items: [] };
        const updatedCart = {
          ...userCart,
          items: [...userCart.items, necklace],
        };

        fetch("http://localhost:3000/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...cartData, [userId]: updatedCart }),
        })
          .then((response) => response.json())
          .then((updatedCartData) => {
            console.log(updatedCartData);
            setCart(updatedCart);
          });
      });
  };

  // Lige nu er det bare ID 1 da det med login ikke virker endnu
  const addToFavourite = (necklace) => {
    const userId = "1";

    fetch("http://localhost:3000/cart")
      .then((response) => response.json())
      .then((cartData) => {
        const userCart =
          cartData && cartData[userId]
            ? cartData[userId]
            : { userId, items: [] };
        const updatedCart = {
          ...userCart,
          items: [...userCart.items, necklace],
        };

        fetch("http://localhost:3000/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...cartData, [userId]: updatedCart }),
        })
          .then((response) => response.json())
          .then((updatedCartData) => {
            console.log(updatedCartData);
            setCart(updatedCart);
          });
      });
  };

  return (
    <div>
      {necklaces.map((necklace) => (
        <Card key={necklace.id}>
          <Card.Img variant="top" src={necklace.image} alt={necklace.name} />
          <Card.Body>
            <Card.Title>{necklace.name}</Card.Title>
            <Card.Text>
              Pris: {necklace.price} kr. Stil: {necklace.style}
            </Card.Text>
            <Button variant="primary" onClick={() => addToCart(necklace)}>
              Køb
            </Button>
            <Button variant="primary" onClick={() => addToFavourite(necklace)}>
              Favourite
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
