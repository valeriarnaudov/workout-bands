import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function RequireAuth() {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <Navigate to="/signin" />
        )
    }
  return user
}

export default RequireAuth