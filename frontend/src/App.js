import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Landing from "./Home/Landing";
import Login from "./components/userAuth/Login";
import Signup from "./components/userAuth/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import Classroom from "./components/classroom/Classroom"

function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={!user ? <Landing /> : <Navigate to="/dashboard" />}/>
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />}/>
            <Route path="/classroom" element={user ? <Classroom /> : <Navigate to="/" />}/>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />}/>
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
