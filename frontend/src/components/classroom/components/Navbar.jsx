import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import logo from '../../../Home/img/icons8.svg'
// import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2}
        sx={{ position: "sticky", background: '#000000de', top: 0, justifyContent: "space-between" }} >
        <Link to="/classroom" style={{ display: "flex", alignItems: "center" }} >
            <img src={logo} alt="logo" height={45} />
        </Link >
        <SearchBar />
        <Link to="/dashboard" style={{ display: "flex", alignItems: "center" }} >
            <button className="bg-white">Dashboard</button>
        </Link >
    </Stack>
);

export default Navbar;