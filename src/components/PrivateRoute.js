import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import auth  from '../auth/auth';

const PrivateRoute = () => {
   console.log("" + auth.isLoggedIn);
   return auth.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;