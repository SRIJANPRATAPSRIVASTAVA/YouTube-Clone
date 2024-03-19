import {BrowserRouter, Routes, Route} from "react-router-dom"
import  {Box} from "@mui/material"
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import VideoDetail from "./Components/VideoDetail";
import SearchFeed from "./Components/SearchFeed";
import ChannelDetail from "./Components/ChannelDetail";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor : "#000"}}>
        <Navbar/> 
        <Routes>
          <Route path="/" exact element = {<Feed/>}/>
          {/* start from videoDetail */}
          <Route path="/video/:id" exact element = {<VideoDetail/>}/> 
          <Route path="/channel/:id" exact element = {<ChannelDetail/>}/>
          <Route path="/search/:query" exact element = {<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
