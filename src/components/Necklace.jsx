import { useState, useEffect } from "react";
import { Navibar } from "./Navbar.jsx";
import { Menus } from "./Menu.jsx";
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
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
