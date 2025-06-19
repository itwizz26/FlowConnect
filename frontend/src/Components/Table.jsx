import DataTable from "react-data-table-component";
import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Table = (props) => {

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Currency",
            selector: (row) => row.currency,
            sortable: true,
        },
        {
            name: "Alpha 2 code",
            selector: (row) => row.code_two,
            sortable: true,
        },
        {
            name: "Alpha 3 code",
            selector: (row) => row.code_three,
            sortable: true,
        },
        {
            name: "Actions",
            cell: (row) => (
                <Button className="btn btn-danger" label="Remove" onClick={()=> handleDelete(row.id)} />
            ),
        }
    ];

    const handleDelete = (id) => {
        if (rows.length > 1 || data.length > 1) {
            const newList = rows.filter(li => li.id !== id);
            setData(newList);
        }
    }

    const [data, setData] = useState(props.data);
    let rows = (!data.length) ? props.data : data;
    if (!Array.isArray(rows)) {
        rows = [rows];
    }

    // Handle Search
    const handleSearch = (e) => {
        let searchValue, countryId, nameValue, currency, codeTwo, codeThree;

        const newRows = rows.filter((row) => {
            countryId = row.id
                .toString().toLowerCase()
                .includes(e.target.value.toLowerCase());
            nameValue = row.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            currency = row.currency
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            codeTwo = row.code_two
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            codeThree = row.code_three
                .toLowerCase()
                .includes(e.target.value.toLowerCase());

            if (countryId) {
                searchValue = countryId;
            } else if (nameValue) {
                searchValue = nameValue;
            } else if (currency) {
                searchValue = currency;
            } else if (codeTwo) {
                searchValue = codeTwo;
            } else {
                searchValue = codeThree;
            }
            return searchValue;
        });
        setData(newRows);
    };

    return (
        <>
            <DataTable
            columns={columns}
            data={rows}
            fixedHeader
            pagination
            selectableRows />

            <div className="input-group">
                <Input
                    type="search"
                    placeholder="Search"
                    maxLength=""
                    onChange={handleSearch} />
            </div>
        </>
    );
}

export default Table;
