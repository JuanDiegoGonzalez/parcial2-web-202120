import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Chart } from "../components/Chart";

export const Report = () => {
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
    <section id="report">
      <div className="report-container">
        <h1>
          <FormattedMessage id="units_in_stock" />
        </h1>
        <Chart data={products}></Chart>
      </div>
    </section>
  );
};
