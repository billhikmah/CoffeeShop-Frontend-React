import React from 'react'
import {Navigate} from 'react-router-dom'

function PrivateAuthRoute({children,  allowedRole, redirectedTo = "/", isRouteReplaced = true, extradData = undefined}) {
    const token = localStorage.getItem("token") || false;
    if(token){
        return <Navigate to = {redirectedTo} replace= {isRouteReplaced} state={extradData}/>
    }
    return children
}
export default PrivateAuthRoute