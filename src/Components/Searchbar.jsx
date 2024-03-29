import React, { useState } from 'react'
import {Paper, IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [query, setQuery] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(query) {
      navigate(`/search/${query}`);
      setQuery('')
    } 
  }
  
  return (
    <Paper
        component= "form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: "1px solid #e3e3e3",
            pl: 2,
            boxShadow: "none",
            mr: {sm : 5}
        }}
        
    >
    <input type="text" className='search-bar' placeholder='search...'
        onChange={(e)=>{setQuery(e.target.value)}}
        value={query}
    />
    <IconButton type = "submit" sx={{
            p: "10px",
            color: "red"
        }}>
        <Search />
    </IconButton>
    </Paper>
  )
}

export default Searchbar