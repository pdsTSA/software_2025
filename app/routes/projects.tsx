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
import {Suspense, useEffect, useState} from "react";
import type {CleanupLocation} from "~/components/types/global.types";
import {Typography} from "@mui/material";

const CoverImage = styled('div')`
    background-size: cover; 
    width: 100%;
    margin: 0;
    padding: 20% 10%;
    background-image:url("/creek.jpg");
    background-blend-mode multiply;
    background-color: rba(0,0,0,0.2);
    color: white;
    text-align: center;
`;

const SplashScreen = styled('div')`
> h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-botttom: 1rem;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
    }
`;

const ClusterRows = ({clusters}: any) => {
    console.log(clusters)

    if (clusters == null) {
        return <TableBody>Loading...</TableBody>
    } else {
        return (
            <TableBody>
                {Object.values(clusters).map(e => {
                    const lat = (e.center[0].indexOf("-") == -1) ? "N" : "S";
                    const lng = (e.center[1].indexOf("-") == -1) ? "E" : "W";

                    return <TableRow
                        key={e.center.join(",")}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, 'th': {borderRight:1} }}>
                        <TableCell component="th" scope="row">{e.location}</TableCell>
                        <TableCell component="th" scope="row">{e.entries}</TableCell>
                        <TableCell component="th" scope="row">{e.latest}</TableCell>
                        <TableCell component="th" scope="row">
                            <a href={`https://www.google.com/maps/place/${e.center[0].replace("-", "")}${lat}+${e.center[1].replace("-", "")}${lng}`}>Link</a>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        )
    }
}


export default function Projects() {
    const [clusters, setClusters] = useState<CleanupLocation[] | null>(null);

    useEffect(() => {
        fetch(`http://localhost:5000/clusters`)
            .then((e) => e.json().then(
                (e) => setClusters(e)
            ))
    }, []);
    return (
        <div>
            <CoverImage style={{ backgroundImage: 'url(https://raw.githubusercontent.com/pdsTSA/software_2025/master/public/creek.jpg)' }}>
                <SplashScreen>
                <h1>Projects</h1>
                </SplashScreen>
            </CoverImage>
            <TableContainer component={Paper} sx={{marginTop: 2, paddingLeft: 5, paddingRight:5, paddingBottom: 2}}>
                <Table sx={{ minWidth: 650, border: 1}} aria-label="simple table">
                    <TableHead sx={{borderBottom: 2 }}>
                        <TableRow sx={{'th': {borderRight: 1}}}>
                            <TableCell component="th">Location</TableCell>
                            <TableCell component="th"># Reports</TableCell>
                            <TableCell component="th">Latest Entry</TableCell>
                            <TableCell component="th">Open With Google</TableCell>
                        </TableRow>
                    </TableHead>
                    <ClusterRows clusters={clusters}/>
                </Table>
            </TableContainer>
        </div>
    )
}
