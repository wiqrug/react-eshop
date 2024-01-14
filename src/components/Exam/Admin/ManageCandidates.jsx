import React, { useState } from 'react';
import CustomTable from './CustomTable'

const columns = [
    { id: 'FirstName', label: 'Question ID', },
    { id: 'MiddleName', label: 'Exam ID', },
    { id: 'LastName', label: 'LastName', },
    { id: 'Email', label: 'Option A', },
    { id: 'Password', label: 'Option B', },
    { id: 'Gender', label: 'Option C', },
    { id: 'NativeLanguage', label: 'Option D', },
    { id: 'BirthDate', label: 'Image URL', },
    { id: 'PhotoIDType', label: 'Correct Answer', },
    { id: 'PhotoIDNumber', label: 'Option C', },
    { id: 'PhotoIDIssueDate', label: 'Option D', },
    { id: 'Address', label: 'Image URL', },
    { id: 'AddressLine2', label: 'Correct Answer', },
    { id: 'CountryOfResidence', label: 'Image URL', },
    { id: 'StateOrTerritoryOrProvince', label: 'Correct Answer', },
    { id: 'TownOrCity', label: 'Option C', },
    { id: 'PostalCode', label: 'Option D', },
    { id: 'LandlineNumber', label: 'Image URL', },
    { id: 'MobileNumber', label: 'Correct Answer', },
];

const createData = (id, FirstName, MiddleName, LastName, Email, Password, Gender, NativeLanguage, BirthDate, PhotoIDType, PhotoIDNumber,
    PhotoIDIssueDate, Address, AddressLine2, CountryOfResidence, StateOrTerritoryOrProvince, TownOrCity, PostalCode, LandlineNumber, MobileNumber) => {
    return { id, FirstName, MiddleName, LastName, Email, Password, Gender, NativeLanguage, BirthDate, PhotoIDType, PhotoIDNumber,
        PhotoIDIssueDate, Address, AddressLine2, CountryOfResidence, StateOrTerritoryOrProvince, TownOrCity, PostalCode, LandlineNumber, MobileNumber };
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
