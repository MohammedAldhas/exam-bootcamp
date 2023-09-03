import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";

export default function Cart() {
  const [cartDet, setcartDet] = useState([]);
  const CartData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/carts`);
      setcartDet(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    CartData();
  }, []);
  return (
    <div>
      {cartDet.map((el) => {
        return (
          <div className="flex gap-2" key={el.id}>
            <h2>{el.id}</h2>
            <h2>{el.date}</h2>
            <h2>{el.userId}</h2>
          </div>
        );
      })}
    </div>
  );
}
