import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import Dashboard from './components/Dashboard';
import Routine from './components/Routine';
import CourseManager from './components/CourseManager';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Dashboard</Button>
          <Button color="inherit" component={Link} to="/routine">Routine</Button>
          <Button color="inherit" component={Link} to="/courses">Courses</Button>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/routine" element={<Routine />} />
          <Route path="/courses" element={<CourseManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;