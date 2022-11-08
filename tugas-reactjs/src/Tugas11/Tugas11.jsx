import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import axios from "axios";
const Tugas11 = () => {
  const [datas, setData] = useState([]);
  const [nilai, setNilai] = useState("");
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

  //   nilai >= 80, return "A"
  // nilai >= 70 dan nilai < 80, return "B"
  // nilai >= 60 dan nilai < 70, return "C"
  // nilai >= 50 dan nilai < 60, return "D"
  // nilai < 50 return "E"

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>No</Table.HeadCell>
        <Table.HeadCell>Nama</Table.HeadCell>
        <Table.HeadCell>Mata Kuliah</Table.HeadCell>
        <Table.HeadCell>Nilai</Table.HeadCell>
        <Table.HeadCell>Index Nilai</Table.HeadCell>
      </Table.Head>

      <Table.Body className="divide-y">
        {datas.map((data, index) => (
          <Table.Row
            key={data.id}
            className="bg-white dark:border-gray-700 dark:sm-gray-800"
          >
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell>{data.name}</Table.Cell>
            <Table.Cell>{data.course}</Table.Cell>
            <Table.Cell>{data.score}</Table.Cell>
            <Table.Cell>Edit</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default Tugas11;
