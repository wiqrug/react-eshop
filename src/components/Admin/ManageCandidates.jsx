import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import { getCandidates } from "api/candidates/getCandidates";

//rows and columns should have the same label

const ManageCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const fetchCandidates = async () => {
    try {
      const data = await getCandidates();
      setCandidates(data);

      if (data.length > 0) {
        const dynamicColumns = Object.keys(data[0]).map((key) => ({
          label: key,
        }));
        setColumns(dynamicColumns);
        setRows(data); // Set rows here after fetching data
      }
    } catch (error) {
      console.error("Failed to fetch candidates:", error);
    }
  };

  useEffect(() => {
    fetchCandidates();

    // Set up a polling mechanism to refetch candidates every X milliseconds
    const intervalId = setInterval(fetchCandidates, 5000); // Poll every 5 seconds, adjust as needed

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  //get the name of the properties
  // console.log(columns);
  console.log(candidates);

  const handleAdd = () => {
    // Not implemented yet
  };

  const handleUpdate = () => {
    // Not implemented yet
  };

  const handleDelete = () => {
    // Not implemented yet
  };

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />
  );
};

export default ManageCandidates;
