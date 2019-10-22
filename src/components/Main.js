import React from 'react';
import {Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp() {
    return (
        <div>
        <Alert key={1} variant='primary'>
            This is a alert—check it out!
        </Alert>
      </div>
    );
}

export default MyApp;