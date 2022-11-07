import React from "react";
import "./eight.css";

const Tugas8 = (props) => {
  return (
    <div className="box2">
      <h1>Data Diri</h1>
      <hr />
      <ul>
        <li>{props.name}</li>
        <li>{props.batch}</li>
        <li>{props.email}</li>
      </ul>
    </div>
  );
};

export default Tugas8;
