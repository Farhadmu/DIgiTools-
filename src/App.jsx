import { Suspense, useState } from "react";
import "./App.css";

import NavBar from "./components/homePage/NavBar/NavBar.jsx";
import DigitalTools from "./components/homePage/digitalTools/DigitalTools";
import Footer from "./components/homePage/footer/Footer";
import Hero from "./components/homePage/hero/Hero";
import Pricing from "./components/homePage/pricing/Pricing";
import Stat from "./components/homePage/stat/Stat";
import Steps from "./components/homePage/steps/Steps";
import Workflow from "./components/homePage/workflow/Workflow";
import Products from "./components/products/Products";
import Carts from "./components/carts/Carts";

// Fetch products data
const fetchProductsData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const productsPromise = fetchProductsData();

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]);

  return (
    <>
      {/* Navbar */}
      <NavBar carts={carts} />

      {/* Hero Section */}
      <Hero />

      {/* Stats */}
      <Stat />

      {/* Digital Tools Tabs */}
      <DigitalTools
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        carts={carts}
      />

      {/* Products / Cart Section */}
      {activeTab === "product" ? (
        <Products
          productsPromise={productsPromise}
          carts={carts}
          setCarts={setCarts}
        />
      ) : (
        <Carts carts={carts} setCarts={setCarts} />
      )}

      {/* Other Sections */}
      <Steps />
      <Pricing />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;