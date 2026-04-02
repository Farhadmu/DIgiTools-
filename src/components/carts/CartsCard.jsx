import React from "react";
import { toast } from "react-toastify";

const CartsCard = ({ cart, carts, setCarts }) => {

  const handleRemove = () => {
    const filteredCarts = carts.filter((item) => item.id !== cart.id);

    setCarts(filteredCarts);
    toast.warning("Item removed!");
  };

  return (
    <div className="py-6 px-5 bg-gray-100 w-full flex justify-between items-center rounded-3xl 
    hover:bg-gradient-to-r from-[#9614fa18] to-[#4f39f618] 
    hover:shadow-md hover:shadow-indigo-400/50 transition duration-300">

      {/* Left */}
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 p-2 border border-gray-300 bg-white rounded-full flex items-center justify-center">
          <img src={cart.icon} alt={cart.name} className="w-6 h-6 object-contain" />
        </div>

        <div>
          <h2 className="font-semibold text-lg">{cart.name}</h2>
          <p className="text-black/70 font-medium">${cart.price}</p>
        </div>
      </div>

      {/* Right */}
      <button
        onClick={handleRemove}
        className="text-red-500 font-medium px-4 py-2 rounded-xl 
        hover:bg-white hover:shadow-md hover:shadow-indigo-300/40 
        transition duration-300"
      >
        Remove
      </button>

    </div>
  );
};

export default CartsCard;