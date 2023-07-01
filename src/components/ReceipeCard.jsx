import React from "react";

function ReceipeCard({ receipe }) {
  return (
    <div className="flex flex-col max-w-sm m-auto  shadow md rounded-md  p-5">
      <div>
        <img src={receipe.image} alt="" />
      </div>
      <p className=" font-bold">{receipe.name}</p>

      <p className=" font-semibold  ">Cuisine Type: {receipe.cuisine} </p>
      <p className=" font-semibold  ">Ingredients: See Receipe {">"}</p>
      <p className=" font-semibold  ">Instructions: See Receipe {" >"} </p>
    </div>
  );
}

export default ReceipeCard;
