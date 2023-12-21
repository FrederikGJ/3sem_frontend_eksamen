import { Navibar } from "./Navbar.jsx";
import { Menus } from "./Menu.jsx";
import { useEffect, useState } from "react";
import { getAllJewelry } from "../facades/JewelryFacade.js";

export function Forside() {
  
  return (
    <>
      <Navibar />
      <div className="workforfucksake">
      <Menus />
      <div className="penis">
      <JewelryComponent />
      </div></div>
    </>
  );
}

export function JewelryComponent() {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllJewelry();
        setJewelry(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Jewelry</h2>
      <ul>
        {jewelry.map((item) => (
          <li key={item.id}>
            <img src= {"src/" + item.image} alt="Picture of jewelry" className="jewelrypicture" />
            {item.name} {item.price} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JewelryComponent;
