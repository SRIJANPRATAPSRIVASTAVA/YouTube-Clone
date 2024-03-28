import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

import Searchbar from './Searchbar.jsx';

const Navbar = () => {
    return (
        <Stack
            direction="row"
            spacing={2}
            p={2}
            sx={{
                position: "sticky",
                background: "#000",
                top: 0,
                justifyContent: "space-between"
            }}>
            <Link to="/"
                style={{ display: "flex", alignItems: "center" }}
            >
                <img src={"https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"} alt="logo" height={40} />
            </Link>
            <Searchbar />
        </Stack>
    )
}

export default Navbar