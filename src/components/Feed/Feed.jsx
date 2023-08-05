import {useState, useEffect} from "react"
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Videos from "../Videos/Videos";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

export default function Feed() {
    const [selectedCategory, setSelectedCategory] = useState("")
    const [videos, setVideos] = useState([])

    useEffect(() => {
        setVideos([])
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
    },[selectedCategory])

    return (
        <Stack sx={{flexDirection: { sx: "column", md: "row"}}} >
            <Box sx={{ height: { sx: "auto", md: "92vh" },width: {md: "30vw"}, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <Sidebar 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography className="copyright" variant="body2" sx={{mt:1.5, color: "#fff"}}>
                    Copyright 2022
                </Typography>
            </Box>

            <Stack sx={{flexDirection: "column"}} >
                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                        {selectedCategory}<span style={{ color: "#FC1503" }}> Videos</span>
                    </Typography>
                </Box>

                <Videos videos={videos}/>
            </Stack>
        </Stack>
    )
}
