import React from 'react'
import Favbar from '../Favbar'
// import { Link } from "react-router-dom";
// import { useLogout } from "../../hooks/useLogout";
// import { useAuthContext } from "../../hooks/useAuthContext";

const Dashboard = () => {

    // const { logout } = useLogout()
    // const { user } = useAuthContext()

    // const handleClick = () => {
    //     logout();
    // }

    return (
        <div>
            <Favbar comp={"Dashboard"} />
        </div>
    )
}

export default Dashboard