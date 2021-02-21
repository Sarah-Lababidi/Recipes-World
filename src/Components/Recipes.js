import React, { useState } from 'react';
import Loading from './Loading';
import { Card, CardImg, CardBody, CardTitle, CardImgOverlay, CardText, Button } from 'reactstrap';
import FiltersForm from './FiltersForm';
import FieldsForm, { renderField } from './FieldsForm';
import { Link } from 'react-router-dom';

const Info = ({ text }) => {
    return (
        <div className="row">
            <div className="col-12 text-center text-danger">
                <h2>{text}</h2>
            </div>
        </div>
    );
}
const renderRecipe = (recipe) => {
    const to = "recipes/"+recipe.id;
    return (
        <div className="col-12 col-md-4 recipe-card py-3">
            <Link to={to}>
                <Card className="h-100 fadeIn">
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
}
function Recipes(props) {

    const [secondForm, setSecondForm] = useState(null)

    let view = null;

    if (props.resultState.isEmpty) {
        view = <Info text="Sorry, no results were found" />
    }
    else if (props.resultState.isLoading) {
        view = <Loading />
    } else if (props.resultState.errMsg) {
        view = <Info text={props.resultState.errMsg} />
    } else {
        if(props.resultState.result.length !== 0){
            const recipes = props.resultState.result.map(recipe => renderRecipe(recipe))
            view = <div className="container">
                        <h2 className="title text-center my-3">
                            <span>Available Recipes</span>
                        </h2>
                        <div className="row">
                            {recipes}
                        </div>
                    </div>
        }
    }
    function addFields(fields) {
        if (fields.length === 0) return
        const renderFields = fields.map(field => {
            return renderField(field)
        })
        setSecondForm(renderFields);
    }

    function resetSecondForm() {
        setSecondForm(null)
    }

    return (
        <React.Fragment>
        <div className="clock-div position-relative fadeIn">
            <img id="clock" src={require("../assets/images/Clock.jpg")} alt="clock"/>
            <div className="overlay"></div>
            <div className="text text-center my-5">
                    <p>You are only few steps away from getting your recipe ...</p>
            </div>
        </div>
        <div className="container my-4">
            <h5 className="my-5 text-center">
                Please follow the steps below and get your recipe in less than a minute! <br />
                Remember: you can always reset everything and explore new recipes that suit your taste ...
            </h5>
            <FiltersForm addFields={addFields} resetSecondForm={resetSecondForm} clearResults={props.clearResults}/>
            <FieldsForm renderFields={secondForm} fetchResults={props.fetchResults} />
            <div className="my-3 d-flex align-items-center">
                <Button className="number btn btn-danger rounded-circle mr-2">3</Button> 
                <h4 className="d-inline-block mb-0 mr-2">Get your recipe!</h4>
            </div>
            {view}
        </div>
        </React.Fragment>
    );
}
export default Recipes;