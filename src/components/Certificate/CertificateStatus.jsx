import { deleteCandidateOfCertainCertificate } from "api/candidates/deleteCandidateOfCertainCertificate";
import { getCandidatesOfCertainCertificate } from "api/candidates/getCandidatesOfCertainCertificate";
import CustomTable from "components/Admin/CustomTable";
import AddCandidateInCertainCertificate from "components/Modals/AddCandidateInCertainCertificate";
import { useModal } from "hooks";
///Certificate/:title/Status
const { default: React, useState, useEffect } = require("react");
const { useParams } = require("react-router-dom");

const CertificateStatus = () => {
  const { isModalOpen, setIsModalOpen, handleCloseModal, handleOpenModal } =
    useModal();
  const [candidates, setCandidates] = useState([]);
  const [candidate, setCandidate] = useState();
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

  //Add should be a modal.
  //this modal is a form with candidateNumber
  //I should take using useParam the name of the Certificate
  //and do a post method with the title of the certificate and the candidate number
  const handleAdd = () => {
    handleOpenModal();
  };

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

  console.log(rows);
  return (
    <>
      <CustomTable
        columns={columns}
        rows={rows}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleUpdate={undefined}
        identifierField={"recordId"}
      ></CustomTable>
      <AddCandidateInCertainCertificate
        open={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleAdd}
      />
    </>
  );
};

export default CertificateStatus;
