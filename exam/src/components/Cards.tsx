import { useState, useEffect } from "react";
import React from "react";
import logo from "../assets/logo.png";
import Card from "./Card";
import { Link } from "react-router-dom";

import axios from "axios";

export default function Cards() {
  const [cardDet, setcardDet] = useState([]);

  const CardData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setcardDet(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    CardData();
  }, []);

  const deleteCard = (id: string) => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        setcardDet(
            cardDet.filter((del) => {
            return del.id !== id;
          })
        );
      });
    console.log(id);
  };

  return (
    <>
      <div className="w-11/12 min-h-screen grid grid-cols-4 gap-3 h-fit max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {cardDet.map((el) => {
          return (
            <div className="flex flex-col">
            <div
              key={el.id}
              className="p-0 m-0 h-fit"
              onClick={() => {
                console.log(el.id);

                location.href = `/${el.id}`
              }}
            >
              <Card title={el.title} img={el.image} btn="more det.."></Card>

            </div>
            <div className="flex gap-2  justify-center">

              <button className="bg-red-600 w-2/6 text-white  rounded-full" onClick={()=>deleteCard(el.id)}>delete</button>
              {/* <button className="bg-cyan-500 text-white w-48 rounded-full">apdate</button> */}
            </div>
              </div>
          );
        })}
      </div>
    </>
  );
}
