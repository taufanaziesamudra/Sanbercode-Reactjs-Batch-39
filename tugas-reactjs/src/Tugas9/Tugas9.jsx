import React from "react";
import { useState } from "react";
import "./nine.css";

const Tugas9 = () => {
  const [state, setState] = useState({
    order: 1,
  });

  const handlePlus = () => {
    setState({
      order: state.order + 1,
    });
  };
  return (
    <div className="box3">
      <div className="count">{state.order}</div>
      <button onClick={handlePlus}>Tambah</button>
    </div>
  );
};

export default Tugas9;
