import React from 'react'
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Classroom = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout();
    }

    return (
        <div>
            Welcome {user.username} to your Classroom<br />
            <button onClick={handleClick}>Logout</button><br />
            <Link to='/dashboard'><button>Dashboard</button></Link>
        </div>
    )
}

export default Classroom