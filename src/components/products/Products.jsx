import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({ productsPromise, carts, setCarts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsPromise.then((data) => {
      setProducts(data);
    });
  }, [productsPromise]);

  return (
    <div className="my-20">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold gradient-text">
          Our Products
        </h1>
        <p className="text-gray-500 mt-3">
          Choose your perfect digital tools
        </p>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 xl:gap-20">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      </div>

    </div>
  );
};

export default Products;