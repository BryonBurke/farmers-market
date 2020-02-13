import React from 'react';
import Header from './Header';
import Schedule from './Schedule';
import Produce from './Produce';
import { Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Header />
            <Switch>
              <Route exact path='/' render={props =>
                  <div>
                    <Schedule />
                    <Produce />
                  </div>
              } />
              <Route path='/produce' component={Produce} />
              <Route path='/schedule' component={Schedule} />
            </Switch>
        </div>
    );
}

export default App;
