import React from 'react'

import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Favbar = ({ comp }) => {

    let compx = ""
    if (comp === "Classroom") {
        compx = "Dashboard"
    } else {
        compx = "Classroom"
    }

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout();
    }

    return (
        <div>
            Welcome {user.username} to your {comp}<br />
            <button onClick={handleClick}>Logout</button><br />
            <Link to={`/${compx}`}>Go to {compx}</Link>
        </div>
    )
}

export default Favbar