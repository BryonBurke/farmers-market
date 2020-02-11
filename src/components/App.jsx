import React from 'react';
import Header from './Header';
import Schedule from './Schedule';
import Produce from './Produce';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Header />
            <Schedule />
            <Produce />
        </div>
    );
}

export default App;
