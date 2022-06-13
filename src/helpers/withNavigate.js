import React from "react";
import { useNavigate } from "react-router-dom";

export default function withNavigate(Component) {
    function Navigate(props) {
        const navigate = useNavigate();
        return <Component navigate={navigate} {...props}/>;
    }
    return Navigate;
}