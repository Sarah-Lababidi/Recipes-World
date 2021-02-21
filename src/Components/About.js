import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="container about">
            <div className="row align-items-center my-3 my-md-5">
                <div className="col-12 col-md-6 text-center slideInLeft">
                    <h2 className="title my-3">
                        <span>Our Aim</span>
                    </h2>
                    <p>
                        Whether you live on your own or are a busy parent, finding the time and energy to prepare home-cooked meals can seem like a daunting task. At the end of a hectic day, eating out or ordering in might feel like the quickest, easiest option. But convenience and processed food can take a significant toll on your mood and health.
                    </p>
                    <p>
                        The good news is, cooking is easier than what people think. It can drastically improve your health and is more fun and cheaper than eating out.
                                                That's why we brought you the best recipes in the world all gathered in one place!
                    </p>
                </div>
                <div className="col-12 col-md-6 slideInRight">
                    <img src="assets/images/cooking.png" alt="cooking at home"/>
                </div>
            </div>
            <div className="row my-3 my-md-5">
                <div className="col-12">
                    <h2 className="title text-center my-3">
                        <span>Benefits of Cooking at Home</span>
                    </h2>
                </div>
            </div>
            <div className="row align-items-center my-5">
                <div className="col-12 col-md-6 order-last order-md-first">
                    <img src="assets/images/healthy-food.jpg" alt="healthy-food"/>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-10 mx-auto text-center">
                            <h4>You have more control over the ingredients</h4>
                            <p>By cooking for yourself, you can ensure that you and your family eat fresh, wholesome meals. This can help you look and feel healthier, boost your energy, stabilize your weight and mood, and improve your sleep and resilience to stress.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center my-5">
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-10 mx-auto text-center">
                            <h4>You pay more attention to your meal size</h4>
                            <p>
                                Many restaurants serve portions that are two to three times larger than the recommended dietary guidelines. This encourages you to eat more than you would at home, adversely affecting your waistline, blood pressure, and risk of diabetes.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src="assets/images/meal-size.jpg" alt="healthy-food"/>
                </div>
            </div>
            <div className="row align-items-center my-5">
                <div className="col-12 col-md-6 order-last order-md-first">
                    <img src="assets/images/family.jpg" alt="family-cooking"/>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-10 mx-auto text-center">
                            <h4>A great way to spend time with your family</h4>
                            <p>Cooking together gives families a time to share, bond and work together. The reality of today’s family is that most of us are busy, with work, school, kids’ activities, homework and other responsibilities gobbling up most of our time. Setting aside a time where the entire family can work together to create a meal gives us a chance to pause, catch up and just connect with each other.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <Link to="/recipes"><Button id="get-recipe" className="btn btn-danger py-2 px-4 mx-auto">Get A Recipe!</Button></Link>
            </div>
        </div>
    );
}
export default About;
