import React, { useEffect, useState } from "react";
import FetchData from "../Data/ApiFetch";
import Cards from "./Card";

const Html = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      let data = await FetchData("HTML");
      setData(data.items);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (isLoading) {
    return <h1>Loading......</h1>;
  }
  console.log(data);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
      {data.map((el) => (
        <Cards {...el} />
      ))}
    </div>
  );
};

export default Html;
