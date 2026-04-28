import React from "react";

type BusinessCardType = {
  name: string;
  occupation: string;
  hobby: string;
};

export const BusinessCard = ({ name, occupation, hobby }: BusinessCardType) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{occupation}</p>
      <div>{hobby}</div>
    </div>
  );
};
