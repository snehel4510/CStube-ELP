import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Landing from "./Home/Landing";
import Login from "./components/userAuth/Login";
import Signup from "./components/userAuth/Signup";
// import Favbar from "./components/Favbar";
// import Dashboard from "./components/dashboard/Dashboard";
import Classroom from "./components/classroom/Classroom"
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar } from './components/classroom/components';

import BookMarks from './components/dashboard/BookMarks';
import Sidebar from './components/dashboard/Sidebar';
import NewNote from './components/dashboard/NewNote';
import Notes from './components/dashboard/Notes';
import Community from './components/dashboard/Community';
import Profile from './components/dashboard/Profile';

function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={!user ? <Landing /> : <Navigate to="/classroom" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/classroom" />}/>
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/classroom" />}/>

            <Route path="/classroom" element={user ? <Classroom /> : <Navigate to="/" />} />
            <Route path='/classroom/video/:id' element={
                <Box sx={{ backgroundColor: '#000' }}>
                  <Navbar />
                  <VideoDetail />
                </Box> }/>
            <Route path='/classroom/channel/:id' element={
                <Box sx={{ backgroundColor: '#000' }}>
                  <Navbar />
                  <ChannelDetail />
                </Box> }/>
            <Route path='/classroom/search/:searchTerm' element={
                <Box sx={{ backgroundColor: '#000' }}>
                  <Navbar />
                  <SearchFeed />
                </Box> }/>
            
            {/* <Route  path='/' element={<Sidebar/>}/> */}
            <Route path="/dashboard" element={user ? <Sidebar/> : <Navigate to="/" />}/>
            <Route  path='/dashboard/Community' element={user ? <Sidebar comp={<Community/>}/> : <Navigate to="/" />}/>
            <Route  path='/dashboard/BookMarks' element={user ? <Sidebar comp={<BookMarks/>}/> : <Navigate to="/" />}/>
            <Route  path='/dashboard/Notes' element={user ? <Sidebar comp={<Notes/>}/> : <Navigate to="/" />}/>
            <Route  path='/dashboard/NewNote' element={user ? <Sidebar comp={<NewNote/>}/> : <Navigate to="/" />}/>
            <Route  path='/dashboard/Profile' element={user ? <Sidebar comp={<Profile/>}/> : <Navigate to="/" />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
