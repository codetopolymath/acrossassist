import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Login from './components/signin/Login';
import SubmitOTP from './components/signin/SubmitOTP';
import Dashboard from './components/dashboard/Dashboard';
import PolicyView from './components/policy/PolicyView';
import PlanBenefits from './components/policy/PlanBenefits';
import PolicyHistory from './components/policy/PolicyHistory';
import UserProfile from './components/header/UserProfile';
import AppHeader from './components/header/AppHeader';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  console.log('Sidebar state:', isSidebarOpen); // Debugging statement

  return (
    <Router>
      {/* <AppHeader toggleSidebar={toggleSidebar} /> */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div style={{ marginLeft: isSidebarOpen ? 240 : 70, transition: 'margin 0.3s' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/submitOTP" element={<SubmitOTP />} />
          <Route path="/profile" element={<UserProfile isOpen={isSidebarOpen} />} />
          <Route path="/dashboard" element={<Dashboard isOpen={isSidebarOpen} />} />
          <Route path="/policy-view" element={<PolicyView isOpen={isSidebarOpen} />} />
          <Route path="/plan-benefits" element={<PlanBenefits isOpen={isSidebarOpen} />} />
          <Route path="/policy-history" element={<PolicyHistory isOpen={isSidebarOpen} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;