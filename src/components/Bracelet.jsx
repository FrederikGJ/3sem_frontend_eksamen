import { useState, useEffect } from "react";
import { Navibar } from "./Navbar.jsx";
import { Menus } from "./Menu.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function Bracelet() {
  return (
    <>
      <Navibar />
      <Menus />
      <ComponentBracelet />
    </>
  );
}

function ComponentBracelet() {
  const [bracelets, setBracelets] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/jewelry");

      const data = await response.json();
      console.log(data);

      const braceletItems = data.filter((item) => item.type === "bracelet");
      console.log(braceletItems);

      setBracelets(braceletItems);
    };

    fetchData();
  }, []);

  // Lige nu er det bare ID 1 da det med login ikke virker endnu
  const addToCart = (bracelet) => {
    const userId = "1";

    fetch("http://localhost:3000/cart")
      .then((response) => response.json())
      .then((cartData) => {
        if (!cartData || !cartData[userId]) {
          cartData = { ...cartData, [userId]: { userId, items: [] } };
        }

        const updatedCart = {
          ...cartData[userId],
          items: [...cartData[userId].items, bracelet],
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
      {bracelets.map((bracelet) => (
        <Card key={bracelet.id}>
          <Card.Img variant="top" src={bracelet.image} alt={bracelet.name} />
          <Card.Body>
            <Card.Title>{bracelet.name}</Card.Title>
            <Card.Text>
              Pris: {bracelet.price} kr. Stil: {bracelet.style}
            </Card.Text>
            <Button variant="primary" onClick={() => addToCart(bracelet)}>
              {" "}
              Køb{" "}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
