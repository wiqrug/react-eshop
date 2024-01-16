import CustomTable from "components/Admin/CustomTable";
///Certificate/:title/Status
const { default: React } = require("react");
const { useParams } = require("react-router-dom");

const CertificateStatus = () => {
  const { title: peos } = useParams();
  //I need to fetch the candidates certificates and then display them in a grid format
  // Then, there should appear 2 buttons, one for delete, one for update
  // The delete button should delete the certain certificate, while the update button should
  // open again a modal that could update
  console.log(peos);

  return (
    <CustomTable
      columns={undefined}
      rows={undefined}
      handleAdd={undefined}
      handleDelete={undefined}
      handleUpdate={undefined}
      identifierField={undefined}
    ></CustomTable>
  );
};

export default CertificateStatus;
