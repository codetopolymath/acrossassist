import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PolicyView from './components/PolicyView';
import PlanBenefits from './components/PlanBenefits';
import PolicyHistory from './components/PolicyHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/policy-view" element={<PolicyView />} />
        <Route path="/plan-benefits" element={<PlanBenefits />} />
        <Route path="/policy-history" element={<PolicyHistory />} />
      </Routes>
    </Router>
  );
}

export default App;