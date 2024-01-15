import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { AddIcon, CreateIcon, DeleteIcon } from "components/mui";
import React, { useState } from "react";

const columns = [
  { id: "examId", label: "Exam ID", minwidth: 170, width: "auto" },
  {
    id: "certificateId",
    label: "Certificate ID",
    minwidth: 170,
    width: "auto",
  },
  { id: "title", label: "Title", minwidth: 170, width: "auto" },
  { id: "description", label: "Description", minwidth: 170, width: "auto" },
  { id: "time", label: "Time", minwidth: 170, width: "auto" },
];

const createData = (id, examId, certificateId, title, description, time) => {
  return { id, examId, certificateId, title, description, time };
};

const rows = [
  createData(
    1,
    "India",
    "IN",
    1324171354,
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    30
  ),
  createData(2, "China", "CN", 1403500365, 9596961, 30),
  createData(3, "Italy", "IT", 60483973, 301340, 30),
  createData(4, "United States", "US", 327167434, 9833520, 30),
  createData(5, "Canada", "CA", 37602103, 9984670, 30),
  createData(6, "Australia", "AU", 25475400, 7692024, 30),
  createData(7, "Germany", "DE", 83019200, 357578, 30),
  createData(8, "Ireland", "IE", 4857000, 70273, 30),
  createData(9, "Mexico", "MX", 126577691, 1972550, 30),
  createData(10, "Japan", "JP", 126317000, 377973, 30),
  createData(11, "France", "FR", 67022000, 640679, 30),
  createData(12, "United Kingdom", "GB", 67545757, 242495, 30),
  createData(13, "Russia", "RU", 146793744, 17098246, 30),
  createData(14, "Nigeria", "NG", 200962417, 923768, 30),
  createData(15, "Brazil", "BR", 210147125, 8515767, 30),
];

export default function ManageExams() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
    <Paper
      sx={{
        width: "80%",
        overflow: "hidden",
        position: "relative",
        margin: "0px auto",
      }}
    >
      <Button
        sx={{ margin: "30px 10px" }}
        variant="contained"
        disableElevation
        onClick={handleAdd}
        endIcon={<AddIcon />}
      >
        ADD NEW EXAM
      </Button>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{ minWidth: column.minwidth, width: column.width }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell style={{ minWidth: 10, width: 100 }} />
              <TableCell style={{ minWidth: 10, width: 100 }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="center">
                          {value === "UPDATE" || value === "DELETE" ? (
                            <Button
                              variant="contained"
                              color={value === "UPDATE" ? "success" : "error"}
                              onClick={
                                value === "UPDATE" ? handleUpdate : handleDelete
                              }
                              startIcon={<CreateIcon />}
                            >
                              {value}
                            </Button>
                          ) : (
                            <>{value}</>
                          )}
                        </TableCell>
                      );
                    })}
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="success"
                        onClick={handleUpdate}
                        startIcon={<CreateIcon />}
                      >
                        UPDATE
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={handleDelete}
                        startIcon={<DeleteIcon />}
                      >
                        DELETE
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
