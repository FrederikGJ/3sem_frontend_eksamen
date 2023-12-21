import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './index.css'

import {Forside} from "./components/Forside.jsx";
import {Login} from "./components/Login.jsx";
import {Indkøbskurv} from "./components/Indkøbskurv.jsx";
import {Oversigt} from "./components/Oversigt.jsx";
import {AddProduct} from "./components/AddProduct.jsx";
import {Products} from "./components/Products.jsx";
import {Orders} from "./components/Orders.jsx";
import {Profil} from "./components/Profil.jsx";
import {Likede} from "./components/Likede.jsx";
import {Necklace} from "./components/Necklace.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Forside />} />
        <Route path="/login" element={<Login />} />
        <Route path="/indkøbskurv" element={<Indkøbskurv />} />
        <Route path="/oversigt" element={<Oversigt />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/likede" element={<Likede />} />
        <Route path="/necklace" element={<Necklace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
