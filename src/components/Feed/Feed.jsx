import {useState, useEffect} from "react"
import { Box, Stack, Typography, Grid } from "@mui/material";
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
        <>
            <Grid container >
                <Grid item md={2}>
                    <Sidebar 
                        selectedCategory={selectedCategory} 
                        setSelectedCategory={setSelectedCategory}
                    />
                </Grid>
                <Grid item xs={10} style={{maxHeight: "100vh", overflow:"scroll"}}>
                    <Stack sx={{flexDirection: "column"}} >
                        <Box p={2} sx={{ overflowY: "auto", overflow:"visible", flex: 2 }}>
                            <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white"}}>
                                {selectedCategory}<span style={{ color: "#FC1503" }}> Videos</span>
                            </Typography>
                        </Box>
                        <Videos videos={videos}/>
                    </Stack>
                </Grid>
            </Grid>           
        </>
    )
}
