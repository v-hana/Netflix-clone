import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar'
import {action,originals} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={
             isAuthenticated ? (<Navigate to="/home" />) : (<Login setIsAuthenticated={setIsAuthenticated} /> )
            }/>
          
          {/* Protected Route: Dashboard */}
          <Route path="/home" element={
              isAuthenticated ? (
                <>
                  <NavBar setIsAuthenticated={setIsAuthenticated} />
                  <Banner />
                  <RowPost url={originals} title="Netflix Originals" />
                  <RowPost url={action} title="Action" isSmall />
                </>
              ) : ( <Navigate to="/login" />)
            }/>
        </Routes>
      </div>
    </Router>
  );
}


export default App
