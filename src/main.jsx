import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './index.css'

import {Forside} from "./components/Forside.jsx";
import {Login} from "./components/Login.jsx";
import {Cart} from "./components/Cart.jsx";
import {Oversigt} from "./components/Oversigt.jsx";
import {AddProduct} from "./components/AddProduct.jsx";
import {Products} from "./components/Products.jsx";
import {Orders} from "./components/Orders.jsx";
import {Profil} from "./components/Profil.jsx";
import {Likede} from "./components/Likede.jsx";
import {Necklace} from "./components/Necklace.jsx";
import {Bracelet} from "./components/Bracelet.jsx";
import {Choker} from "./components/Choker.jsx";
import {Earrings} from "./components/Earrings.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/oversigt" element={<Oversigt />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/likede" element={<Likede />} />
        <Route path="/necklace" element={<Necklace />} />
        <Route path="/bracelet" element={<Bracelet />} />
        <Route path="/choker" element={<Choker />} />
        <Route path="/earrings" element={<Earrings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
