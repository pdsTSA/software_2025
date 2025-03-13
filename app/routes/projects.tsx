import type {Route} from "./+types/projects";
import {border, borderBottom, styled} from "@mui/system";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CoverImage = styled('div')`
    background-size: cover;
    width: 100%;
    margin: 0;
    padding: 15% 20px 15% 10%;
`

const SplashScreen = styled('div')`
    > h1 {
        font-size: xxx-large;
        font-weight: bold;
    }
    
    > p {
        font-size: xx-large;
    }
` 

function createData(location: string) {
    return {
        location
    };
}

const rows = [
    createData('Test Case 1'),
  ];


export default function projects() {
    return (
        <div>
            <CoverImage>
                <SplashScreen>
                    <h1>Projects</h1>
                    <p>Areas that need the most work</p>
                </SplashScreen>
            </CoverImage>
            <TableContainer component={Paper} sx={{paddingLeft: 5, paddingRight:5, paddingBottom: 2}}>
                <Table sx={{ minWidth: 650, border: 1}} aria-label="simple table">
                    <TableHead sx={{borderBottom: 2 }}>
                        <TableRow sx={{'th': {borderRight: 1}}}>
                            <TableCell component="th">Location</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.location}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, 'th': {borderRight:1} }}>
                        <TableCell component="th" scope="row">{row.location}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
