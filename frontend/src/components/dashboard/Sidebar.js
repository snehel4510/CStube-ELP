import React, { useState } from 'react';
import './dash.css';
import { Link } from 'react-router-dom';
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

import { CiBookmark } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { BiNote } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

// import NewNote from './NewNote';

const Sidebar = ({comp}) => {

  const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout();
    }

  const [show, setShow] = useState(false);
  const [select,selected]=useState(false);

  return (
    // <main className={show ? 'dash space-toggle' : 'dash'}>
    <main className={'dash space-toggle'}>
      {/* <header className={`dash header ${show ? 'space-toggle' : null}`}> */}
      <header className={'dash header space-toggle'}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
        <h2>Welcome {user.username} to your Dashboard</h2>
        <Link to='/classroom'><button>Classroom</button></Link>
        <button onClick={handleClick}>Logout</button>
      </header>

      <aside className={`dash sidebar ${show ? 'show' : null}`}>
        <nav className='nav dash'>
        
          <div>

            <Link to='/dashboard/Profile' className='nav-logo'>
             <AiOutlineUser color='#f5c382'/>
              <span className='nav-logo-name'>Profile</span>
            </Link>

            <div className='nav-list'>

              <div onClick={()=>selected(!select)}>
              <Link to='/dashboard/Community' className={`nav-link ${select?"nav-link active":null}`}>
                <BsFillPeopleFill/>
                <span className='nav-link-name'>Community</span>
              </Link>
              </div>

              <div onClick={()=>selected(!select)}>
              <Link to='/dashboard/Notes' className={`nav-link ${select?"nav-link active":null}`}>
                <BiNote/>
                <span className='nav-link-name'>Notes</span>
              </Link>
              </div>

              <Link to='/dashboard/NewNote' className='nav-link'>
                <CiEdit/>
                <span className='nav-link-name'>New Note</span>
              </Link>

              <Link to='/dashboard/BookMarks' className='nav-link'>
                <CiBookmark />
                <span className='nav-link-name'>BookMarks</span>
              </Link>


            </div>
          </div>

              <i className='fas fa-sign-out nav-link-icon'></i>
              <span onClick={handleClick} className='nav-link-name'>Logout</span>
            
        </nav>
      </aside>

      {/* <h1>Content</h1> */}
      {comp}

    </main>
  );
};

export default Sidebar;