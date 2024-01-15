import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import { getCandidates } from "api/candidates/getCandidates";

//rows and columns should have the same label

const ManageCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await getCandidates();
        setCandidates(data);

        // Generate columns dynamically if data is not empty
        if (data.length > 0) {
          const dynamicColumns = Object.keys(data[0]).map((key) => ({
            label: key,
          }));
          setColumns(dynamicColumns);
        }
      } catch (error) {
        console.error("Failed to fetch candidates:", error);
      }
    };

    fetchCandidates();
  }, []);
  //get the name of the properties
  console.log(columns);
  // console.log(candidates);

  const handleAdd = () => {
    // Not implemented yet
  };

  const handleUpdate = () => {
    // Not implemented yet
  };

  const handleDelete = () => {
    // Not implemented yet
  };

  const rows = [];

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
