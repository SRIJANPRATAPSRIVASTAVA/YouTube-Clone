import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import Videos from "./Video.jsx"
import { useParams } from 'react-router-dom';

import { fetchFromApi } from '../Utility/fetchVideos.js';

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const { query } = useParams();

  console.log("search", videos);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${query}`).then((data) => {setVideos(data.items);console.log("search", data);});
  }, [query])

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2
      }}
    >
      <Typography variant='h4' fontWeight={"bold"} mb={2} color={"white"}>
        Search Results For
        <span style={{
          marginLeft: 10,
          color: '#F31503'
        }}>{query}</span>
      </Typography>

      {/* Videos */}
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed