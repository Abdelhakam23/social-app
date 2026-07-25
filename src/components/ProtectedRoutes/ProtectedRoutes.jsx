import React, { useContext } from 'react'
import { AuthContext } from '../../Context/Auth.context'
import { Navigate } from 'react-router';

export default function ProtectedRoutes({ children }) {
    const { token } = useContext(AuthContext);

    if (token) {
        return children
    } else {
      return  <Navigate to={'/signin'}/>
    }
}
