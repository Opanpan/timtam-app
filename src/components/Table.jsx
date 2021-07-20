import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name) {
    return { name };
}

const news = [
    createData("PPKM diperpanjang hingga akhir Juli"),
    createData("Maverick Vinales meninggalkan Yamaha pada Moto GP 2022"),
    createData(
        "PSG baru merekrut Donnaruma dari MIlan sebagai pelapis Keylow Navas"
    ),
];

export default function BasicTable() {
    const classes = useStyles();

    React.useEffect(() => {
        axios.get("/api/news/list-news").then((res) => {
            if (res.status === 200) {
                console.log(res.data);
            }
        });
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>News</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {news.map((news, index) => (
                        <TableRow key={news.name}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell>{news.name}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
