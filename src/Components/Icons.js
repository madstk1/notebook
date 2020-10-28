import React from 'react';

/* Font Awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon(props) {
    return (
        <a href={props.href}>
            <FontAwesomeIcon size={props.size} icon={props.icon} />
        </a>
    );
}

export default Icon;
