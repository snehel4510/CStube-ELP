import React from 'react'
import Favbar from '../Favbar'

const Dashboard = () => {

    return (
        <div>
            <Favbar comp={"Dashboard"} />
        </div>
    )
}

export default Dashboard

// import { Routes,Route } from 'react-router-dom';
// import BookMarks from './BookMarks';
// import Sidebar from './Sidebar';
// import NewNote from './NewNote';
// import Notes from './Notes';
// import Community from './Community';
// import Profile from './Profile';

// const Dashboard = () => {
//   return (
//     <div>
//       <Routes>
//         <Route  path='/' element={<Sidebar/>}/>
//         <Route  path='/Community' element={<Sidebar comp={<Community/>}/>}/>
//         <Route  path='/BookMarks' element={<Sidebar comp={<BookMarks/>}/>}/>
//         <Route  path='/Notes' element={<Sidebar comp={<Notes/>}/>}/>
//         <Route  path='/NewNote' element={<Sidebar comp={<NewNote/>}/>}/>
//         <Route  path='/Profile' element={<Sidebar comp={<Profile/>}/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default Dashboard;