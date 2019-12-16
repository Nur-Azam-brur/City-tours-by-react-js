import React, { Component } from 'react';
import "./Tourlist.scss"
import Tour from '../tour/Tour';
import {tourData} from '../tourData'

class Tourlist extends Component {
    state={
        tours: tourData
    };
    removeTour =id =>{
        const {tours}=this.state
        const sortedTours=tours.filter(tour => tour.id !=id)
        this.setState({
            tours:sortedTours
        })
    }
    render() {
        
        const {tours} = this.state;

        return (
            <div>
            <section className="tourlist"> 
                {tours.map(tour=>{
                    return <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                })}
            </section>

                <footer id="copyright" class="py-3 text-light text-center">
                <div class="container">
                <div class="row">
                    <div class="col">
                    <p class="lead">Copyright 2019 © City-Tours</p>
                    <p class="mb-0"> Designed By Nur Azam</p>
                    </div>
                </div>
                </div>
                </footer>

                </div>

        );
    }
}

export default Tourlist;