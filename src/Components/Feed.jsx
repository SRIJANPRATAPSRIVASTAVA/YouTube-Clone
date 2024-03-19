import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from './Sidebar';
import Videos from "./Video.jsx"

import { fetchFromApi } from '../Utility/fetchVideos.js';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items));
  }, [selectedCategory])
  
  return (
    <Stack sx={{
      flexDirection: {
        sx: "column",
        md: "row"
      }
    }}>
      <Box sx={{
        height: {
          // sx: "auto",
          md: "92vh"
        },
        borderRight: "1px solid #3d3d3d",
        px: { sx: 0, md: 2 }
      }}>
      <Sidebar selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory}/>
      {/* <Typography>

      </Typography> */}
      </Box>

      {/* start from here */}
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh", 
          flex: 2
        }}
        >
        <Typography variant='h4' fontWeight={"bold"} mb={2} color={"white"}> 
          {selectedCategory}
          <span style={{
            marginLeft: 10,
            color: '#F31503'
          }}>Videos</span>
        </Typography>

        {/* Videos */}
        <Videos videos = {videos}/>
      </Box>
    </Stack>
  )
}

export default Feed