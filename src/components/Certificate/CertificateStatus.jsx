import CustomTable from "components/Admin/CustomTable";
///Certificate/:title/Status
const { default: React } = require("react");
const { useParams } = require("react-router-dom");

const CertificateStatus = () => {
  const { title: peos } = useParams();

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
