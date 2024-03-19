import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from 'react-player';
import { CheckCircle } from '@mui/icons-material';

import Video from './Video';
import { fetchFromApi } from '../Utility/fetchVideos';

// const VideoDetail = () => {
//   const [VideoDetails, setVideoDetails] = useState(null)
//   const [loaded, setLoaded] = useState(false)
//   const [videos, setVideos] = useState([])

//   // useEffect(() => {
//   //   // if(VideoDetail !== null)
//   //   setLoaded(true);
//   //   console.log("werfg");
//   // }, [VideoDetail])


//   const { id } = useParams();

//   console.log("VideoDetails", VideoDetails);

//   useEffect(() => {
//     fetchFromApi(`videos?part=snippets,statistics&id=${id}`)
//       .then(data => {
//         setVideoDetails(data.items[0])
//         // setLoaded(true);
//       }
//         )

//     fetchFromApi(`videos?part=snippets&relatedToVideoId=${id}&type=video`)
//     .then(data => setVideos(data.items))
//   }, [id])

//   // if (!VideoDetail?.snippet) { return "Loading..."}

//   const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = VideoDetail

//   return (
//     loaded === true ? <Box
//       minHeight="95vh"
//     >
//     {/* VideoPlayer and stats */}
//       <Stack direction={{ xs: "column", md: "row" }}>
//         <Box flex={1}>
//           <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
//             <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player" />
//             <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
//               {title}
//             </Typography>
//             <Stack direction={"row"} justifyContent={"space-between"} py={1} px={2} sx={{ color: "#fff" }}>
//               <Link to={`/channel/${channelId}`}>
//                 <Typography variant={{ sm: "subtitle1", md: "h6" }} color={"#fff"}>
//                   {channelTitle}
//                   <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }}></CheckCircle>
//                 </Typography>
//               </Link>
//               <Stack direction="row" gap="20px" alignItems="center">
//                 <Typography variant='body1' sx={{opacity: 0.7}}>
//                   {parseInt(viewCount).toLocaleString()} views
//                 </Typography>
//                 <Typography variant='body1' sx={{opacity: 0.7}}>
//                   {parseInt(likeCount).toLocaleString()} likes
//                 </Typography>
//               </Stack>
//             </Stack>
//           </Box>
//         </Box>
//       </Stack>

//       {/* videos related to main video */}

//     </Box>
//     : 
//     <Box color={"white"}> Loading... </Box>
//   )
// }

// export default VideoDetail

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippets,statistics&id=${id}`)
      .then(data => {
        setVideoDetails(data.items[0]);
        setLoaded(true);
      })
      .catch(error => {
        console.error('Error fetching video details:', error);
        setLoaded(true); // Ensure that the loading state is updated even in case of an error
      });

    fetchFromApi(`search?part=snippets&relatedToVideoId=${id}&type=video`)
      .then(data => {
        setVideos(data.items);
        console.log("data.items: ", data);
      })

      // fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video

  }, [id]);

  if (!loaded) {
    return <Box color="white">Loading...</Box>;
  }

  if (!videoDetails) {
    return <Box color="white">Video not found.</Box>;
  }

  const { snippet: { title, channelId, channelTitle } = {}, statistics: { viewCount, likeCount } = {} } = videoDetails;

  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={videoUrl} controls className="react-player" />
            <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"} py={1} px={2} sx={{ color: "#fff" }}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: "h6" }} color={"#fff"}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }}></CheckCircle>
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, sx: 5 }} justifyContent="center" alignItems="center">
          <Video videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
