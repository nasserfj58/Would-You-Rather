import React from "react";
import { Badge } from "react-bootstrap";
export const NotFound = (props) => {
    return (
        <div style={{
            position: 'absolute', left: '25%', top: '25%',
        }}>
            <h1>
                This Page is Not Found <Badge variant="danger">404</Badge>
            </h1>
        </div>
    );
}