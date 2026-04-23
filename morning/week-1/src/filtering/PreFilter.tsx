import React from "react";
import ProblemCard from "../extras/ProblemCard";
// map, filter, reduce | someArray.method(() => )

export const PreFilter = () => {
  const products = [
    { id: 1, name: "Notebook", inStock: true },
    { id: 2, name: "Pen", inStock: false },
    { id: 3, name: "Backpack", inStock: true },
  ];

  // whats in product filters?
  // [{ notebook }, {backpack}]
  const productsFilter = products.filter((product) => product.inStock);

  return (
    <ProblemCard
      title="Filter 10 — Pre-filtered rendering"
      method="filter"
      question="Filter to in-stock products first, then map into a reusable component."
      dataPreview={products}
    >
      {/* code here */}
      {productsFilter.map((product) => (
        <ProductCard product={product} />
      ))}
    </ProblemCard>
  );
};

// CREATE COMPONENT HERE FOR RENDERING PRODUCT

type ProductCardType = {
  product: {
    id: number;
    name: string;
    inStock: boolean;
  };
};

// ternary operator: conditional ? "success value" : "failed value";

const ProductCard = ({ product: { id, name, inStock } }: ProductCardType) => {
  return (
    <div>
      {inStock ? <div>In Stock!</div> : <div>Out of Stock!</div>}
      <p>{name}</p>
    </div>
  );
};
