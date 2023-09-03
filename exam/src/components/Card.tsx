import React from "react";

interface card {
  title: string;
  img: string;
  btn: string;
}

export default function cards(props: card) {
  return (
    <div>
      <div className="shadow rounded p-3 w-full h-96 flex flex-col justify-between gap-2 hover:scale-105">
        <h2>{props.title}</h2>
        <img className="h-2/3" src={props.img}></img>
        <a  href="#">{props.btn}</a>
      </div>
    </div>
  );
}
