import React from 'react';
import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";
import "./TodoIcon.css"

function TodoIcon({type, color, onclick}) {
    
    const iconTypes = {
        "check": color => (
            <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
        ),
        "delete": color => (
            <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
        ),
    };
    
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onclick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };
