import {useState, useEffect} from "react"
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Videos from "../Videos/Videos";

export default function Feed() {
    return (
        <Stack sx={{flexDirection: { sx: "column", md: "row"}}} >
            <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <Sidebar />
                <Typography className="copyright" variant="body2" sx={{mt:1.5, color: "#fff"}}>
                    Copyright 2022
                </Typography>
            </Box>

            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typography p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>New
                    <span>Videos</span>
                </Typography>
            </Box>

            <Videos videos={[]}/>
        </Stack>
    )
}