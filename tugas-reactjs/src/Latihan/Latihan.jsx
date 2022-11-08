import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Latihan = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(
      "https://backendexample.sanbercloud.com/api/student-scores"
    );
    setData(response.data);
  };
  console.log(datas);
  return (
    <div>
      {datas.map((data, index) => (
        <ul key={data.id}>
          <li>{data.score}</li>
        </ul>
      ))}
    </div>
  );
};

export default Latihan;
