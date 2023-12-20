import { useState, useEffect } from "react";
import { Navibar } from "./Navbar.jsx";
import { Menus } from "./Menu.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function Choker() {
  return (
    <>
      <Navibar />
      <Menus />
      <ComponentChoker />
    </>
  );
}

function ComponentChoker() {
  const [chokers, setChokers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/jewelry");

      const data = await response.json();
      console.log("fetched data:", data);

      // Parse numeric values if needed
      const chokerItems = data.filter((item) => item.type === "choker");
      console.log("chokerItems:", chokerItems);

      setChokers(chokerItems);
    };

    fetchData();
  }, []);

  // Lige nu er det bare ID 1 da det med login ikke virker endnu
  const addToCart = (choker) => {
    const userId = "1";

    fetch("http://localhost:3000/cart")
      .then((response) => response.json())
      .then((cartData) => {
        if (!cartData || !cartData[userId]) {
          cartData = { ...cartData, [userId]: { userId, items: [] } };
        }

        const updatedCart = {
          ...cartData[userId],
          items: [...cartData[userId].items, choker],
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
      {chokers.map((choker) => (
        <Card key={choker.id}>
          <Card.Img variant="top" src={choker.image} alt={choker.name} />
          <Card.Body>
            <Card.Title>{choker.name}</Card.Title>
            <Card.Text>
              Pris: {choker.price} <br />
              Stil: {choker.style}
            </Card.Text>
            <Button variant="primary" onClick={() => addToCart(choker)}>
              {" "}
              Køb{" "}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
