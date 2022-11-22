import React from 'react'
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Dashboard = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout();
    }

    return (
        <div>
            Welcome {user.username} to your Dashboard<br />
            <button onClick={handleClick}>Logout</button><br />
            <Link to='/classroom'><button>Classroom</button></Link>
        </div>
    )
}

export default Dashboard