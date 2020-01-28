// import react, {component} from 'react/react-in-jsx-scope';
import React from "react";
// import React from "react/react-in-jsx-scope";

export function Maps({ children }) {
    return (
        <div>
            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDlZ4dF4fcNeM89PdX-GjBzTqtSb4BK6-s&q=Richmond+VA"></iframe>
        </div>
    );
}

export default Maps;