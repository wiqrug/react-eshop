import React, { useState } from 'react';
import CustomTable from './CustomTable'

const columns = [
    { id: 'questionId', label: 'Question ID', },
    { id: 'examId', label: 'Exam ID', },
    { id: 'question', label: 'Question', },
    { id: 'optionA', label: 'Option A', },
    { id: 'optionB', label: 'Option B', },
    { id: 'optionC', label: 'Option C', },
    { id: 'optionD', label: 'Option D', },
    { id: 'imageSrc', label: 'Image URL', },
    { id: 'correctAnswer', label: 'Correct Answer', },
];

const createData = (id, questionId, examId, question, optionA, optionB, optionC, optionD, imageSrc, correctAnswer) => {
    return { id, questionId, examId, question, optionA, optionB, optionC, optionD, imageSrc, correctAnswer };
}

const rows = [
    createData(1, 'India', 'IN', 1324171354, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', 30),
    createData(2, 'China', 'CN', 1403500365, 9596961, 30),
    createData(3, 'Italy', 'IT', 60483973, 301340, 30),
    createData(4, 'United States', 'US', 327167434, 9833520, 30, 'US', 327167434, 9833520, 30),
    createData(5, 'Canada', 'CA', 37602103, 9984670, 30),
    createData(6, 'Australia', 'AU', 25475400, 7692024, 30),
    createData(7, 'Germany', 'DE', 83019200, 357578, 30),
    createData(8, 'Ireland', 'IE', 4857000, 70273, 30),
    createData(9, 'Mexico', 'MX', 126577691, 1972550, 30),
    createData(10, 'Japan', 'JP', 126317000, 377973, 30),
    createData(11, 'France', 'FR', 67022000, 640679, 30),
    createData(12, 'United Kingdom', 'GB', 67545757, 242495, 30, 'US', 327167434, 9833520, 30),
    createData(13, 'Russia', 'RU', 146793744, 17098246, 30),
    createData(14, 'Nigeria', 'NG', 200962417, 923768, 30),
    createData(15, 'Brazil', 'BR', 210147125, 8515767, 30),
];

const ManageQuestions = () => {
    const handleAdd = () => {
        // Not implemented yet
    }

    const handleUpdate = () => {
        // Not implemented yet
    }

    const handleDelete = () => {
        // Not implemented yet
    }

    return (
        <CustomTable columns={columns} rows={rows} handleAdd={handleAdd} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    )
}

export default ManageQuestions
