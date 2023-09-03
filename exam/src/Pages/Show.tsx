import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Show() {
  const [cart, setcart] = useState("add To cart");

  const [cardDet, setcardDet] = useState([]);
  localStorage.removeItem("id");
  const { id } = useParams();
  const CardData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res.data);
      setcardDet(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    CardData();
  }, []);
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-8/12 shadow flex flex-col items-center justify-center p-2 gap-3 rounded">
          <h1 className="text-xl w-2/3 text-center max-sm:w-full">{cardDet.title}</h1>
          <img className="w-2/6 max-sm:w-2/5" src= {cardDet.image}></img>
          <h3 className="w-2/3 max-sm:text-sm max-sm:w-full">{cardDet.description}</h3>
        </div>

        <button
          className="bg-red-400 w-2/6 text-slate-100 rounded-full px-3"
          onClick={(e) => {
            setcart("added");
            e.target.style.backgroundColor = "blue";
            console.log(e.target.id);

            axios.post(`https://fakestoreapi.com/carts`, {
              products: {
                productId: e.target.id,
                quantity: e.target.title,
              },
            });
          }}
        >
          {cart}
        </button>
      </div>
    </>
  );
}
