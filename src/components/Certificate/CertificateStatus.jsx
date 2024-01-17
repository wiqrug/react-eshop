import { deleteCandidateOfCertainCertificate } from "api/candidates/deleteCandidateOfCertainCertificate";
import { getCandidatesOfCertainCertificate } from "api/candidates/getCandidatesOfCertainCertificate";
import CustomTable from "components/Admin/CustomTable";
///Certificate/:title/Status
const { default: React, useState, useEffect } = require("react");
const { useParams } = require("react-router-dom");

const CertificateStatus = () => {
  const [candidates, setCandidates] = useState([]);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const { title } = useParams();

  const fetchCandidates = async () => {
    try {
      const data = await getCandidatesOfCertainCertificate(title);
      setCandidates(data);

      //creating the columns of the array
      if (data.length > 0) {
        const dynamicColumns = Object.keys(data[0]).map((key) => ({
          label: key,
        }));
        setColumns(dynamicColumns);
        //creating the rows of the array
        setRows(data);
      }
    } catch (error) {
      console.error("Failed to fetch candidates:", error);
    }
  };
  useEffect(() => {
    fetchCandidates();
  }, [title]);

  //Needs implementation
  const handleAdd = () => {};

  const handleDelete = async (recordId) => {
    try {
      await deleteCandidateOfCertainCertificate(recordId);

      const updatedCandidates = candidates.filter(
        (c) => c.recordId !== recordId
      );
      setCandidates(updatedCandidates);
      setRows(updatedCandidates);
    } catch (error) {
      console.error("poli diskolo file!");
    }
  };

  //needs implementation
  const handleUpdate = () => {};

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      handleAdd={undefined}
      handleDelete={handleDelete}
      handleUpdate={undefined}
      identifierField={"recordId"}
    ></CustomTable>
  );
};

export default CertificateStatus;
