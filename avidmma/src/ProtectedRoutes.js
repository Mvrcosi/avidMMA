import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Admin from './Components/Admin/Admin'
import useAuth from './Context/useAuth'


const ProtectedRoutes = () => {
    const user = useAuth()

    useEffect(() => {
        if (!user.user) {
            return
        }
    }, [])


    return user.user.uid !== '"yOrlg8xrQMMAuHiu5SuwCzyQwdu1"' ? <Outlet /> : <Admin />
}

export default ProtectedRoutes