import { Check } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, carts, setCarts }) => {
  const [isAddToCart, setIsAddToCart] = useState(false);

  // check if already in cart
  useEffect(() => {
    const exists = carts.find((item) => item.id === product.id);
    setIsAddToCart(!!exists);
  }, [carts, product.id]);

  const handleBuyNow = () => {
    const exists = carts.find((item) => item.id === product.id);

    if (exists) {
      toast.error("Item already in your cart!");
      return;
    }

    setCarts([...carts, product]);
    setIsAddToCart(true);
    toast.success("Added to cart!");
  };

  return (
    <div className="shadow-md text-left rounded-2xl flex flex-col hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">

      <div className="pt-12 pb-8 px-8 flex flex-col space-y-4 relative">

        {/* Badge */}
        <div
          className={`badge absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold
          ${
            product.tagType === "Best seller"
              ? "bg-yellow-100 text-yellow-600"
              : product.tagType === "Popular"
              ? "bg-purple-100 text-purple-600"
              : product.tagType === "New"
              ? "bg-green-100 text-green-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {product.tagType || "Default"}
        </div>

        {/* Icon */}
        <div className="w-12 h-12 p-2 border border-gray-100 rounded-full flex items-center justify-center">
          <img src={product.icon} alt={product.name} />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold">{product.name}</h2>

        {/* Description */}
        <p className="text-black/80 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-6 mb-6">
          {product.price === 0 ? (
            <span className="text-3xl font-bold text-green-400">Free</span>
          ) : (
            <>
              <span className="text-3xl font-bold">
                ${product.price}
              </span>
              <span className="text-md text-black/70">
                /{product.period}
              </span>
            </>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6 text-gray-600">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="text-green-400 w-5 h-5 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          onClick={handleBuyNow}
          className={`w-full text-white mt-auto rounded-full py-3 font-semibold
          transition duration-300
          ${
            isAddToCart
              ? "bg-gradient-to-r from-green-300 to-green-500 hover:shadow-green-400/50"
              : "gradient-bg hover:shadow-indigo-400/50"
          }`}
        >
          {isAddToCart ? "Added to Cart ✓" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;