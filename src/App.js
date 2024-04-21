import React from "react";
import "./App.css";
import logo from "./logo.svg";
import PropertyCard from "./components/PropertyCard/PropertyCard";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>Welcome to Real Estate Website</h1>
        <h2>Featured Properties</h2>

        <PropertyCard
          property={{
            title: "Beautiful Home in Suburb",
            description: "Spacious 3 bedroom home with modern amenities",
            price: "$300,000",
            imageUrl:
              "https://images.ctfassets.net/0gqf8nju6pz6/3w36aYvCCihRoxvfhd5c32/dd185cb2b5bb97153c6feed640262693/real-estate-asset-classes-hero.jpeg",
          }}
        />
      </main>
    </div>
  );
}

export default App;
