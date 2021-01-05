import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useSelector, useDispatch } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';

import { SelectData, OperationMode } from '../Actions'
import './TableComponent.css'
import axios from 'axios';
const columns = [
    { id: 'checkbox', minWidth: 5 },
    { id: 'name', label: 'Name', align: 'center', minWidth: 170 },
    {
        id: 'type',
        label: 'Type',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    { id: 'course', label: 'Course', minWidth: 100 },
    {
        id: 'specialization',
        label: 'Specialization',
        minWidth: 120,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'university',
        label: 'University',
        minWidth: 150,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'country',
        label: 'Country',
        minWidth: 120,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'city',
        label: 'City',
        minWidth: 120,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'mobilenumber',
        label: 'MobileNumber',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    }
];
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        height: 440,
    },
    rowstyle: {
        height: '50px',

    },
    rowFont: {
        fontWeight: "800"
    },
    columnFont: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "400"
    }
});

export default function StickyHeadTable() {
    const TableData = useSelector(state => state.candidateinfo)
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [rows, setrows] = useState([])
    const [record, setrecord] = useState(" ")
    const [dummy, setdummy] = useState(false)
    const [tabledata, settabledata] = useState(TableData)
    const [radio, setradio] = useState(" ")
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const dispatch = useDispatch();
    const handleChange = (event) => {
        console.log(event.target.value)
        setrecord(event.target.value)
        dispatch(SelectData(event.target.value))
        dispatch(OperationMode("Update"))
        setdummy(!dummy)
    }
    function createData(id, name, course, specialization, university, type, country, city, mobilenumber, email) {
        var checkbox = <FormControlLabel style={{ marginLeft: "5%" }} value={id} keys={id} control={<Radio />} />

        return { id, checkbox, name, course, specialization, university, type, country, city, mobilenumber, email };
    }
    useEffect(() => {
        let temp = []
        for (let i = 0; i < TableData.length; i++) {
            temp.push(createData(TableData[i]._id, TableData[i].name, TableData[i].education.course, TableData[i].education.specialization, TableData[i].education.university, TableData[i].experience, TableData[i].currentcountry, TableData[i].currentcity, TableData[i].mobilenumber, TableData[i].email))
        }
        setrows(temp)
        console.log("eee", rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
    }, [TableData, tabledata])


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };
    return (
        <div className="parent_container_table">
            <RadioGroup aria-label="gender" name="gender1" value={record} onChange={handleChange}>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            style={{ fontFamily: "Poppins,sans-serif" }}
                                            key={column.id}
                                            align={column.align}
                                            className={classes.rowFont}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>

                            <TableBody>

                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow style={row.id === record ? { backgroundColor: "rgba(220, 0, 78, 0.08)" } : {}} hover role="checkbox" tabIndex={-1} className={classes.rowstyle} key={row.id}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell className={classes.columnFont} key={column.id} align={column.align}>
                                                        {value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </RadioGroup>

        </div>

    );
}