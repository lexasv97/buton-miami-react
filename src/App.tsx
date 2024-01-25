import React, { useContext } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import UserLogin from './pages/LoginPage';
import UserSignup from './pages/SignupPage';
import { AuthContext } from './context/auth.context';

function App() {

  const { isLoggedIn } = useContext(AuthContext)! || {}

  const LoggedIn = () => {
    return isLoggedIn ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !isLoggedIn ? <Outlet /> : <Navigate to='/' />
  }

  return (
    <div>
      <Navbar />

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route element={<NotLoggedIn />}>

          <Route path='/login' element={<UserLogin />} />
          <Route path='/signup' element={<UserSignup />} />

        </Route>

        <Route element={<LoggedIn />}>

          <Route path='/logout' />

        </Route>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
