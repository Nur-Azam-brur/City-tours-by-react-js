import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import Home from '../Home/Home';
import Tourlist from '../tourList/Tourlist';
import Notfound from '../Notfound/Notfound';
class Myroute extends Component {
    render() {
        return (
            <div>
            <Switch>
            <Route  exact path="/" component={Home} />
            <Route exact  path="/tour" component={Tourlist} />
            <Route  component={Notfound} />
            </Switch> 
            </div>
        );
    }
}

export default Myroute;