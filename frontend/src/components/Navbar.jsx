import React from 'react'

import Login from '../components/userAuth/Login';
import Signup from '../components/userAuth/Signup';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout();
    }

    return (
        <div>Navbar</div>
    )
}

export default Navbar