import React from 'react'
import {Navigate} from 'react-router-dom'

function PrivateRoute({children,  allowedRole, redirectedTo = "/login", isRouteReplaced = true, extradData = undefined}) {
    const token = localStorage.getItem("token") || false;
    if(!token){
        return <Navigate to = {redirectedTo} replace= {isRouteReplaced} state={extradData}/>
    }
    return children
}
export default PrivateRoute