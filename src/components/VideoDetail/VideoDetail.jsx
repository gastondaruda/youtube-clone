import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import Loader from "../Loader/Loader";
import Videos from "../Videos/Videos";
import {VisibilityIcon, ThumbUpIcon} from '@mui/icons-material/';

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => {
            console.log(data.items[0].snippet)
            setVideoDetail(data.items[0])})

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data) => setVideos(data.items))
    }, [id]);

    if(!videoDetail?.snippet) return <Loader />;

    const { snippet: { title, channelId, channelTitle, thumbnails }, statistics: { viewCount, likeCount } } = videoDetail;

    return (
        <Grid container justifyContent="center" alignItems="center" style={{maxHeight:"100vh", width:"100%", margin:"0 3rem"}}>
            <Grid item md={8}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                        {title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
                        <Link to={`/channel/${channelId}`}>
                            <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                            {channelTitle}
                            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                            </Typography>
                        </Link>
                        <Stack direction="row" gap="20px" alignItems="center">
                            <Stack direction="column">
                                <VisibilityIcon />
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                            </Stack>
                            <Stack direction="column">
                                <ThumbUpIcon />
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                        </Stack>
                    
            </Grid>
            <Grid item xs={6} md={4} style={{maxHeight:"100vh", overflow:"scroll", display:"flex", justifyContent:"center"}}>
                <Box px={2} py={{ md: 1, xs: 5 }}  alignItems="center"  sx={{ width: '50%' }}>
                    <Videos videos={videos} direction="column" style={{maxHeigh:"100vh", overflow:"scroll"}}/>
                </Box>
            </Grid>  
        </Grid>
    );
    };

export default VideoDetail;