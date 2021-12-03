import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const Home = ({ searchKey }) => {
  const url = "http://localhost:3001/api/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section id="home">
      <div className="home-container">
        <h1>Gallery</h1>
        <div className="home-card">
          {products &&
            products.map((elem) => (
              <Card
                key={elem.id}
                name={elem.name}
                picture={elem.picture}
                price={elem.price}
                isActive={elem.isActive}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
