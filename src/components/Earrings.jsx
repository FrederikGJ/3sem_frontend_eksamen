import { useState, useEffect } from "react";
import { Navibar } from "./Navbar.jsx";
import { Menus } from "./Menu.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function Earrings() {
  return (
    <>
      <Navibar />
      <Menus />
      <ComponentEarrings />
    </>
  );
}

function ComponentEarrings() {
  const [earrings, setEarrings] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/jewelry");

      const data = await response.json();
      console.log("fetched data", data);

      const earringsItems = data.filter((item) => item.type === "earrings");
      console.log("earringsItems", earringsItems);

      setEarrings(earringsItems);
    };
    fetchData();
  }, []);

  // Lige nu er det bare ID 1 da det med login ikke virker endnu
  const addToCart = (earring) => {
    const userId = "1";

    fetch("http://localhost:3000/cart")
      .then((response) => response.json())
      .then((cartData) => {
        if (!cartData || !cartData[userId]) {
          cartData = { ...cartData, [userId]: { userId, items: [] } };
        }

        const updatedCart = {
          ...cartData[userId],
          items: [...cartData[userId].items, earring],
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
      {earrings.map((earring) => (
        <Card key={earring.id}>
          <Card.Img variant="top" src={earring.image} alt={earring.name} />
          <Card.Body>
            <Card.Title>{earring.name}</Card.Title>
            <Card.Text>
              Pris: {earring.price} kr. Stil: {earring.style}
            </Card.Text>
            <Button variant="primary" onClick={() => addToCart(earring)}>
              {" "}
              Køb{" "}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
