import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from '../Pages/admin/Dashboard';
import AdminUsers from '../Pages/admin/Users';
//import HomePage from '../pages/HomePage'; // Example regular page

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        
        {/* Admin routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
