import { getNecklaces } from "../facades/JewelryFacade";
import { useEffect, useState } from "react";

export function Necklace() {
  return (
    <>
      <h1>Necklace</h1>
      <NecklaceComponent />
    </>
  );
}

export function NecklaceComponent() {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNecklaces();
        setJewelry(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Necklace</h2>
      <ul>
        {jewelry.map((item) => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NecklaceComponent;
