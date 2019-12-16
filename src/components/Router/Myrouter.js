import React, { Component } from 'react';
import{Route,Switch} from "react-router-dom";
import Home from '../Home/Home';
import Tour from '../tour/Tour';
import Tourlist from '../tourList/Tourlist';

class Myrouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route exact path="/" Component={Home}/>
                <Route exact path="/tour" Component={Tourlist} />
                </Switch>

            </div>
        );
    }
}

export default Myrouter;