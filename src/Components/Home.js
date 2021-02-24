import React, {useState} from 'react';
import Loading from './Loading';
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay, Carousel, CarouselItem, CarouselControl,
        CarouselIndicators, CarouselCaption, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Feast from "../assets/images/Feast.jpg";
import Waffles from "../assets/images/Waffles.jpg";
import Healthy from "../assets/images/Healthy.jpg";

function Home(props) {

    const items = [
        {
          src: Feast,
          altText: 'Welcome',
          caption: "This is the place where you'll get the best recipes in the world!",
          header: 'Welcome to RecipesWorld!',
          key: '1'
        },
        {
          src: Waffles,
          altText: 'Variety of cuisines',
          caption: "Explore classic recipes from around the world and try new cuisines",
          header: 'Variety of Cuisines',
          key: '2'
        },
        {
          src: Healthy,
          altText: 'Different Diets',
          caption: "Pick recipes that are compatible with your diet",
          header: 'Different Diets',
          key: '3'
        }
      ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item, index) => {
      return (
        <CarouselItem
          className="custom-tag"
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <div className="overlay"></div>
          <CarouselCaption captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
      );
    });
  
    let view = null;

    if (props.featuredState.isLoading) {
            view = <Loading />
    } else if (props.featuredState.errMsg) {
        view =  <div className="col-12 text-center">
                    <h1>{props.featuredState.errMsg}</h1>
                </div>
    } else {
        if (!props.featuredState.featured || props.featuredState.featured.length === 0) {
               view= <div className="col-12 text-center text-danger">
                            <h3>Sorry, you have exceeded the number of allowed requests ...</h3>
                    </div>
        } else {
          view = props.featuredState.featured.map(recipe => {
                  const to = "recipes/"+recipe.id;
                  return (
                      <div className="col-12 col-md-4 recipe-card py-3">
                          <Link to={to}>
                              <Card className="h-100">
                                  <CardImg top width="100%" src={recipe.image} alt={recipe.title} className="img-thumbnail" />
                                  <CardImgOverlay className="d-flex justify-content-center align-items-center">
                                      <Button className="btn btn-danger">View Details</Button>
                                  </CardImgOverlay>
                                  <CardBody className="d-flex flex-column justify-content-between pb-1">
                                      <CardTitle tag="h5" className="mb-2">{recipe.title}</CardTitle>
                                      <CardText className="d-flex justify-content-between flex-wrap">
                                          <p><i class="far fa-clock"></i> {recipe.readyInMinutes} Minutes</p>
                                          <p><i class="fas fa-user"></i> servings: {recipe.servings}</p>
                                      </CardText>
                                  </CardBody>
                              </Card>
                          </Link>
                      </div>
                  );
              })
        }
    }
    return (
        <React.Fragment>
            <Carousel
                className="relative-content"
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
            <div className="home-featured mt-3">
                <div className="container">
                    <h2 className="title text-center my-4 pb-4"><span>Our Most Popular Recipes</span></h2>
                    <div className="row my-5">
                      {view}
                    </div>
                    <div className="row justify-content-center">
                        <Link to="/recipes"><Button id="get-recipe" className="btn btn-danger py-2 px-4 mx-auto">Get A Recipe!</Button></Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Home;