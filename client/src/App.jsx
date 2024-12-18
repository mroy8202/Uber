import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import all the pages for routing
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Captainlogin from './pages/Captainlogin';
import CaptainSignup from './pages/CaptainSignup';
import Home from './pages/Home';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import CaptainLogout from './pages/CaptainLogout';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';

// import styling assets
import 'remixicon/fonts/remixicon.css';

const App = () => {

  return (
    <div>
      <Routes>
        {/* Public route for the start page */}
        <Route path='/' element={<Start />} />

        {/* Public routes for user login and signup */}
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />

        {/* Public routes for captain login and signup */}
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />

        {/* Route for the Riding page */}
        <Route path='/riding' element={<Riding />} />
        <Route path='/captain-riding' element={<CaptainRiding />} />

        {/* Protected route for the user home page */}
        <Route path='/home'
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } 
        />

        {/* Protected route for user logout */}
        <Route path='/user/logout'
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          } 
        />

        {/* Protected route for captain home page */}
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        } />

        {/* Protected route for captain logout */}
        <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>
        } />
      </Routes>
    </div>
  );
};

export default App;