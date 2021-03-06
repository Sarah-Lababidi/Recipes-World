import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Fridge from "../assets/images/Fridge.jpg";
import Diet from "../assets/images/Diet.jpg";
import Noodles from "../assets/images/Noodles.jpg";

function Services() {
    return (
        <div className="container services">
            <h2 className="title text-center my-5"><span>Our Services</span></h2>
            <div className="row align-items-center my-5">
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-10 mx-auto text-center">
                            <p className="service"><button className="number btn btn-danger rounded-circle mr-2 mb-1">1</button> We provide you with recipes using ingredients you already have in your fridge</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src={Fridge} alt="fridge"/>
                </div>
            </div>
            <div className="row align-items-center my-5">
                <div className="col-12 col-md-6 order-last order-md-first">
                    <img src={Diet} alt="diet"/>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-10 mx-auto text-center">
                            <p className="service"><button className="number btn btn-danger rounded-circle mr-2 mb-1">2</button> You can specify nutritional values that you want your meal to have</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center my-5">
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-10 mx-auto text-center">
                            <p className="service"><button className="number btn btn-danger rounded-circle mr-2 mb-1">3</button> We have thousands of recipes from different cuisines</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src={Noodles} alt="noodles"/>
                </div>
            </div>
            <div className="row justify-content-center">
                <Link to="/recipes"><Button id="get-recipe" className="btn btn-danger py-2 px-4 mx-auto">Get A Recipe!</Button></Link>
            </div>
        </div>
    );
}
export default Services;
