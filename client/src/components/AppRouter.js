import React from 'react' 
import {Routes, Route, Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { Context } from '..'
import { useContext } from 'react'

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
    <Routes>
        {user.isAuth && authRoutes.map(({path, Component}) => 
        <Route path={path} element={<Component />} exact/>
        )}
         {publicRoutes.map(({path, Component}) => 
        <Route path={path} element={<Component />} exact/>
        )}
    </Routes>)
}

export default AppRouter