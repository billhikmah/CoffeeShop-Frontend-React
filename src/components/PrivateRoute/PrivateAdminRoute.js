import React from 'react'
import {Navigate} from 'react-router-dom'

function PrivateAdminRoute({children,  allowedRole, redirectedTo = "/", isRouteReplaced = true, extradData = undefined}) {
    const role = localStorage.getItem("role");
    if(role !== "admin"){
        return <Navigate to = {redirectedTo} replace= {isRouteReplaced} state={extradData}/>
    }
    return children
}
export default PrivateAdminRoute