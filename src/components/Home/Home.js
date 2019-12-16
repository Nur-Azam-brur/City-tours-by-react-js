import React, { Component } from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import './Home.scss'
import image1 from './img/image1.jpeg'
import image2 from './img/image2.jpeg'
import image3 from './img/image3.jpeg'
import image4 from './img/image4.jpeg'
import image5 from './img/image5.jpeg'
import image6 from './img/image6.jpeg'
import bg1 from './img/bg1.jpeg'
import Carousel from 'react-bootstrap/Carousel'
class Home extends Component {
    render() {
        return (
            <div>

              {/* Carousel Slider  */}
              <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image1}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image2}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={image3}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

                {/* Home Icon */}
            <section id="home-icon" class="py-5 text-center">
                <div class="container">
                  <div class="row">
                    <div class="col-md-4">
                      <i class="fa fa-gear"></i>
                      <h3 class="my-2">Turning Gears</h3>
                      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, maxime.</p>
                    </div>
                    <div class="col-md-4">
                      <i class="fa fa-cloud"></i>
                      <h3 class="my-2">Sending Data</h3>
                      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, maxime.</p>
                    </div>
                    <div class="col-md-4">
                      <i class="fa fa-cart-plus"></i>
                      <h3 class="my-2">Making Money</h3>
                      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, maxime.</p>
                    </div>
                  </div>
                </div>
              </section>


               {/* Home Get Started */}
                <section id="home-getstarted" class="text-center text-light">
                  <div class="dark-overlay">
                    <div class="container">
                      <div class="row py-5">
                        <div class="col">
                          <h2>Are You Ready To Get Started?</h2>
                          <p class="lead mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quaerat voluptatem laboriosam vero recusandae repellendus? Impedit iure est sit voluptatum blanditiis cum sequi laudantium quod dicta, a quaerat vel, obcaecati!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Home Info */}
                <section id="home-info">
                <div class="container">
                  <div class="row py-5">
                    <div class="col-md-6 align-self-center">
                      <h3>Lorem Ipsum Dolor Sit</h3>
                      <p class="lead my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, quaerat unde labore sequi facilis possimus nulla a! Aliquam, saepe illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, praesentium!</p>
                      <a href="#" class="btn btn-dark">Read More</a>
                    </div>
                    <div class="col-md-6">
                      <img src={image5} class="img-fluid rounded my-3" alt="PC"/>
                    </div>
                  </div>
                </div>
              </section>

              {/* <Home Video */}
              <section id="home-video" class="text-center text-light">
                <div class="dark-overlay">
                  <div class="container">
                    <div class="row py-5 my-3">
                      <div class="col">
                        <div uk-lightbox>
                          <a href="https://youtu.be/WPYFzqK5yTU" class="text-light">
                            <i class="fa fa-youtube-square"></i>
                          </a>
                        </div>
                        <h2 class="mt-4 text-light">A 3D Short Film</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


              {/* Photo Gallery */}
                  <section id="gallery" class="py-5 text-center" uk-lightbox>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <h2>Photo Gallery</h2>
                          <p class="lead">Check out our photos</p>
                        </div>
                      </div>
                      <div class="row py-0 py-sm-3">
                        <div class="col-md-4">
                          <div>
                            <a href="img/image1.jpeg">
                              <img src={image1} class="img-fluid" alt="Can't Show!!"/>
                            </a>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div>
                            <a href="img/bg1.jpeg">
                              <img src={bg1} class="img-fluid" alt="Can't Show!!"/>
                            </a>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div>
                            <a href="img/image3.jpeg">
                              <img src={image3} class="img-fluid" alt="Can't Show!!"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="row py-0 py-sm-2">
                        <div class="col-md-4">
                          <div>
                            <a href="img/image4.jpeg">
                              <img src={image4} class="img-fluid" alt="Can't Show!!"/>
                            </a>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div>
                            <a href="img/image5.jpeg">
                              <img src={image5} class="img-fluid" alt="Can't Show!!"/>
                            </a>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div>
                            <a href="img/image6.jpeg">
                              <img src={image6} class="img-fluid" alt="Can't Show!!"/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>


                   {/* Newletter */}
                <section id="newsletter" class="py-5 bg-dark text-center text-light">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <h2 class="text-light">Signup For Our Newsletter</h2>
                        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magnam similique esse assumenda quasi repellendus illum perferendis quos aliquid possimus.</p>
                        <form action="#" class="form-inline justify-content-center mt-4" method="POST">
                          <label class="sr-only" for="name">name</label>
                          <input type="text" placeholder="Enter name" class="form-control m-2"/>
                          <label class="sr-only" for="email">Email</label>
                          <input type="email" placeholder="Enter Email" class="form-control m-2"/>
                          <input type="submit" class="btn btn-primary m-2" value="Subscribe"/>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Footer */}
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

export default Home;