import React from 'react'
import { Typography, Card, CardContent, CardMedia, Box, } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../Utility/constants'

const ChannelCard = ({ channelDetail, marginTop }) => {
    // console.log("channelDetail", channelDetail);
    // console.log("channel", channelDetail?.snippet?.thumbnails?.high?.url);
    return (
        <Box
            sx={{
                boxShadow: 'none',
                // borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '356px', md: '320px' },
                height: '320px',
                margin: 'auto',
                marginTop,
                // background: "#e4f4e4"
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{
                    display: "flex", flexDirection: "column",
                    justifyContent: "center", textAlign: "center", color: "#fff"
                }}>
                    <CardMedia sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }} image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} />
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}{' '}
                        <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '1px' }} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box >
    )
}

export default ChannelCard