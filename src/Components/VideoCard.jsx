import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, IconButton, Divider, Box } from '@mui/material'
import { AspectRatio, CheckCircle, Favorite } from '@mui/icons-material'
// import CardOverflow from '@mui/joy/CardOverflow';

import {
    demoThumbnailUrl, demoVideoUrl, demoChannelTitle,
    demoVideoTitle, demoChannelUrl
} from '../Utility/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    // console.log(videoId, snippet);
    return (
<Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px', md: "320px"}, height: 180 }} 
                />
            </Link>
            <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight={"bold"} color="#FFF">
                        {snippet?.title.slice(0, 60) || demoVideoTitle}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight={"bold"} color="gray">
                        {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
                        <CheckCircle sx={{ color: "gray", fontSize: 12, ml: "1px" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard