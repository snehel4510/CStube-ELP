import React from 'react'
// import { Link } from "react-router-dom";
// import { useLogout } from "../../hooks/useLogout";
// import { useAuthContext } from "../../hooks/useAuthContext";

// import Favbar from "../Favbar";

import { Box } from '@mui/material';
import { Navbar, Feed } from './components';

const Classroom = () => {

    // const { logout } = useLogout()
    // const { user } = useAuthContext()

    // const handleClick = () => {
    //     logout();
    // }

    return (
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Feed />
        </Box>
    )
}

export default Classroom