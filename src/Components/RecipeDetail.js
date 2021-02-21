import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const renderRecipe = (recipe) => {
    return (
        <Card>
            <CardImg top width="100%" src={recipe.image} alt={recipe.title} className="img-thumbnail" />
            <CardBody className="d-flex flex-column justify-content-between pb-1">
                <CardTitle tag="h5" className="mb-2">{recipe.title}</CardTitle>
                {/* <p className="red-border w-75"></p> */}
                <CardText className="d-flex justify-content-between flex-wrap">
                    <p><i class="far fa-clock"></i> {recipe.readyInMinutes} Minutes</p>
                    <p><i class="fas fa-user"></i> servings: {recipe.servings}</p>
                </CardText>
            </CardBody>
        </Card>
    );
}

const renderIngredients = (ingredients) => {
    const items = ingredients.map((curr, index) => {
        return(
            <li key={index} className="list-group-item">
                {curr.amount + "  " + curr.name}
            </li>
        );
    })
    return(
        <React.Fragment>
            <h3 className="title mb-4 text-center">
                <span>Ingredients</span>
            </h3>
            <ul className="list-group ingredients">
                {items}
            </ul>
        </React.Fragment>
    );
}

const renderInstructions = (instructions) => {
    const items = instructions.map((curr, index) => {
        return(
            <li key={index}>
                {curr}
            </li>
        );
    })
    return(
        <React.Fragment>
            <h3 className="title mb-4">
                <span>Detailed Instructions</span>
            </h3>
            <ol className="">
                {items}
            </ol>
        </React.Fragment>        
    );
}

const renderNutrients = (nutrients) => {
    const bad = ["Calories", "Fat", "Saturated Fat", "Carbohydrates", "Net Carbohydrates" , "Sugar", "Cholesterol", "Sodium", "Alcohol"]
    const items = nutrients.map((curr, index) => {
        const cl = bad.includes(curr.name)? "table-danger" : "table-success";
        return(
            <tr>
                <td className="py-1">{curr.name}</td>
                <td className="py-1">{curr.amount}</td>
                <td className="py-1"><span className={cl}>{curr.percentOfDailyNeeds} %</span></td>
            </tr>
        );
    })
    return(
        <React.Fragment>
            <h3 className="title mb-4">
                <span>Nutritional Information</span>
            </h3>
            <div className="table-responsive">
                <table class="table w-75 my-4">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Percentage Of Daily Needs</th>
                        </tr>  
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        </React.Fragment>        
    );
}

const RecipeDetail = ({ recipe }) => {
    return(
        <React.Fragment>
            <div className="container mt-4">
            <h2 className="text-center my-3"><span className="float-left"><Link to="/recipes"><Button className="btn btn-light bg-grey">Back</Button></Link></span>{recipe.title}</h2>
                <div className="row my-5">
                    <div className="col-12 col-md-6">
                        {renderRecipe(recipe)}                    
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                {renderIngredients(recipe.ingredients)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 instructions">
                    <div className="col-12">
                        {renderInstructions(recipe.instructions)}
                    </div>
                </div>
                <div className="row my-5 justify-content-center">
                    <div className="col-12">
                        {renderNutrients(recipe.nutrients)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RecipeDetail;