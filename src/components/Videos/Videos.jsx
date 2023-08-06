import { Stack, Box } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import Loader from "../Loader/Loader";
import ChannelCard from "../ChannelCard/ChannelCard";

export default function Videos({videos}) {
    if(!videos?.length) return <Loader />;

    console.log(videos)

    return (
        <Stack direction={"row"} flexWrap="wrap" justifyContent="space-evenly" alignItems="center" gap={2}>
            {videos.map((item, idx) => (
                <Box key={idx}  sx={{ borderRadius: '16px' }}>
                    {item.id.videoId && <VideoCard video={item} /> }
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
            </Stack>
    )
}

