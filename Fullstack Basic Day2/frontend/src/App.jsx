/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setData([]);
      });
  });
  return (
    <>
      <h1>Data</h1>
      <p>data: {data.length}</p>
      {data.map((d, index) => (
        <div key={d.id}>
          <h3>{d.title}</h3>
          <p>{d.content}</p>
        </div>
      ))}
    </>
  );
};

export default App;
