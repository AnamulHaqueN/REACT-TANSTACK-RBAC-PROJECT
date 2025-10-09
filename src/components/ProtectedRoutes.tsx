import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from '@tanstack/react-router';

const ProtectedRoutes = ({children, permission, allowGuest = false}: 
    {children:React.ReactNode, permission?: string[], allowGuest?: boolean}) => {
    const {user, hasPermission} = useAuth();
    console.log("User: ", user);
    
    // Allow guest user if `allowGuest` is true
    if(allowGuest && !user) {
        return children;
    }

    // Redirect to login if the user is not authenticated

    if(!user) {
        return <Navigate to="/login" />;
    }

    // Redirect to unauthorized if the user lacks required permission

    if(permission && !permission.every((p) => hasPermission(p))) {
        return <Navigate to="/unauthorized"></Navigate>
    }

    // Render the children if the user is authenticate and has Permission

    return children;
}

export default ProtectedRoutes