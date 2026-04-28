import ProblemCard from "../extras/ProblemCard";

// array.filter((item) => some condition);

export const PriceGreaterThan20 = () => {
  const products = [
    { id: 1, name: "Sticker Pack", price: 5 },
    { id: 2, name: "Keyboard", price: 55 },
    { id: 3, name: "Mousepad", price: 22 },
  ];

  return (
    <ProblemCard
      title="Filter 04 — Filter by value"
      method="filter"
      question="Render products with price > 20."
      dataPreview={products}
    >
      {/* [keyboard, mousepad].map(() => {}) */}
      {products
        .filter((product) => product.price > 20)
        .map((product) => {
          
          const productTransformed = product.name.toLowerCase()


          return (
            <div>
              <h3>{productTransformed}</h3>
            </div>
          );
        })}
    </ProblemCard>
  );
};
