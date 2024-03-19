import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import ChannelCard from "./ChannelCard"
import Video from "./Video"
import { fetchFromApi } from "../Utility/fetchVideos"

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])

  console.log("videos", videos);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then((data) => (setChannelDetails(data?.items[0])))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data?.items);
        console.log(data);
      })
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: "linear-gradient(90deg, rgba(208,198,27,1) 0%, rgba(154,86,179,1) 54%, rgba(0,212,255,1) 99%)",
          zIndex: 10,
          height: "300px"
        }} />
        <ChannelCard channelDetail={channelDetails} marginTop="-120px" />
      </Box>
      <Box display="flex" p="2" >
        <Box sx={{ mr: { sm: "100px" } }} />
        <Video videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail