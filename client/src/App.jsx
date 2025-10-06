import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminDashboardPage from './pages/AdminDashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import ClientDashboardPage from './pages/ClientDashboardPage';
import AdminRoute from './components/AdminRoute';


function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <ClientDashboardPage />
            </ProtectedRoute>} />
          <Route path='/admin/dashboard' element={<AdminRoute>
            <AdminDashboardPage />
          </AdminRoute>} />
          <Route path='*' element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;