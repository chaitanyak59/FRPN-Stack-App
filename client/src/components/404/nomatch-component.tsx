import React from 'react';
import {
    useLocation
} from "react-router-dom";

export function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h3>
                Welcome to Dark Hole <code>{location.pathname}</code>
            </h3>
        </div>
    );
}