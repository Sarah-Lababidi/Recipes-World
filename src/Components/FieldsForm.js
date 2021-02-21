import React from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Label, Row, Col, Button } from 'reactstrap';

const isNumber = (val) => !isNaN(Number(val))
const FieldsForm = ({ renderFields, fetchResults }) => {
    const handleSubmit = (values) => {
        let url = "https://api.spoonacular.com/recipes/complexSearch?"
        const keys = Object.keys(values);
        url = url + keys[0] + "=" + values[keys[0]]
        for (let i = 1; i < keys.length; i++) {
            url += "&" + keys[i] + "=" + values[keys[i]]
        }
        url += "&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&number=9&apiKey=3396f8e993fe45228a86ecd6c9081e4d"
        fetchResults(url);
    }

    const applyBtn = () => {
        if (renderFields !== null) {
            return (
                <div className="row justify-content-center">
                    <Button color="dark" className="px-5">Apply</Button>
                </div>
            );
        } else {
            return null
        }
    }
    let form = null
    if (renderFields!==null){
        form =  <div className="fieldsFormStyling px-5">
                    <LocalForm onSubmit={values => handleSubmit(values)}>
                        <Row>
                            {renderFields}
                        </Row>
                        {applyBtn()}
                    </LocalForm>
                </div>
    }
    return (
        <React.Fragment>
            <div className="my-3 d-flex align-items-center">
                <Button className="number btn btn-danger rounded-circle mr-2">2</Button> 
                <h4 className="d-inline-block mb-0 mr-2">Fill in some information</h4>
            </div>
            {form}
        </React.Fragment>
    );
}

export function renderField(field) {
    switch (field) {
        case "query":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="query" className="">Recipe Name</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".query" id="query" name="query"
                                placeholder="e.g. pasta"
                                className="form-control" required
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "includeIngredients":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="includeIngredients">Include Ingredients (Please add a comma separated list of items)</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".includeIngredients" id="includeIngredients" name="includeIngredients"
                                placeholder="e.g. apples, oranges"
                                className="form-control" required
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "excludeIngredients":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="excludeIngredients">Exclude Ingredients (Please add a comma separated list of items)</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".excludeIngredients" id="excludeIngredients" name="excludeIngredients"
                                placeholder="e.g. mayonaise, ketchup"
                                className="form-control" required
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "cuisine":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="cuisine">Cuisine</Label>
                        <Col xs={12} md={8}>
                            <Control.select model=".cuisine" id="cuisine" name="cuisine"
                                className="form-control" required>
                                <option disabled selected hidden value="">Select</option>
                                <option value="African">African</option>
                                <option value="American">American</option>
                                <option value="British">British</option>
                                <option value="Chinese">Chinese</option>
                                <option value="European">European</option>
                                <option value="French">French</option>
                                <option value="German">German</option>
                                <option value="Greek">Greek</option>
                                <option value="Indian">Indian</option>
                                <option value="Irish">Irish</option>
                                <option value="Italian">Italian</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Korean">Korean</option>
                                <option value="Mediterranean">Mediterranean</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Middle-Eastern">Middle Eastern</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Thai">Thai</option>
                                <option value="Vietnamese">Vietnamese</option>
                            </Control.select>
                        </Col>
                    </Row>
                </Col>
            );
        case "diet":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="diet">Diet</Label>
                        <Col xs={12} md={8}>
                            <Control.select model=".diet" id="diet" name="diet"
                                className="form-control" required>
                                <option disabled selected hidden value="">Select</option>
                                <option value="Gluten-Free">Gluten Free</option>
                                <option value="Ketogenic">Ketogenic</option>
                                <option value="Vegetarian">Vegetarian</option>
                                <option value="Vegan">Vegan</option>
                            </Control.select>
                        </Col>
                    </Row>
                </Col>
            );
        case "type":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="type">Type</Label>
                        <Col xs={12} md={8}>
                            <Control.select model=".type" id="type" name="type"
                                className="form-control" required>
                                <option disabled selected hidden value="">Select</option>
                                <option value="main-course">main course</option>
                                <option value="side-dish">side dish</option>
                                <option value="dessert">dessert</option>
                                <option value="appetizer">appetizer</option>
                                <option value="salad">salad</option>
                                <option value="breakfast">breakfast</option>
                                <option value="soup">soup</option>
                                <option value="fingerfood">fingerfood</option>
                                <option value="snack">snack</option>
                                <option value="drink">drink</option>
                            </Control.select>
                        </Col>
                    </Row>
                </Col>
            );
        case "maxReadyTime":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="maxReadyTime">Maximum Time to prepare</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".maxReadyTime" id="maxReadyTime" name="maxReadyTime"
                                placeholder="max time in minutes ..."
                                className="form-control" required
                                validators={{
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".maxReadyTime"
                                show="touched"
                                messages={{
                                    isNumber: "This field should only contain numbers "
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "minCarbs":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="minCarbs">Minimum Carbs</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".minCarbs" id="minCarbs" name="minCarbs"
                                placeholder="min amount of carbohydrates in grams"
                                className="form-control" required
                                validators={{
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".minCarbs"
                                show="touched"
                                messages={{
                                    isNumber: "This field should only contain numbers "
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "maxCarbs":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="maxCarbs">Maximum Carbs</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".maxCarbs" id="maxCarbs" name="maxCarbs"
                                placeholder="max amount of carbohydrates in grams"
                                className="form-control mx-0" required
                                validators={{
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".maxCarbs"
                                show="touched"
                                messages={{
                                    isNumber: "This field should only contain numbers "
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "minProtein":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="minProtein">Minimum Protein</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".minProtein" id="minProtein" name="minProtein"
                                placeholder="min amount of protein in grams"
                                className="form-control" required
                                validators={{
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".minProtein"
                                show="touched"
                                messages={{
                                    isNumber: "This field should only contain numbers "
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "maxProtein":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="maxProtein">Maximum Protein</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".maxProtein" id="maxProtein" name="maxProtein"
                                placeholder="max amount of protein in grams"
                                className="form-control mx-0" required
                                validators={{
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".maxProtein"
                                show="touched"
                                messages={{
                                    isNumber: "This field should only contain numbers "
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "minCalories":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="minCalories">Minimum Calories</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".minCalories" id="minCalories" name="minCalories"
                                placeholder="min amount of carbohydrates in grams"
                                className="form-control" required
                                validators={{
                                    isNumber
                                }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".minCalories"
                                    show="touched"
                                    messages={{
                                        isNumber: "This field should only contain numbers "
                                    }}
                                />
                        </Col>
                    </Row>
                </Col>
            );
        case "maxCalories":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="maxCalories">Maximum Calories</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".maxCalories" id="maxCalories" name="maxCalories"
                                placeholder="max amount of calories in grams"
                                className="form-control mx-0" required
                                validators ={{
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model =".maxCalories"
                                show = "touched"
                                messages ={{
                                    isNumber: "This field should only contain numbers "
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "minFat":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="minFat">Minimum Fat</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".minFat" id="minFat" name="minFat"
                                placeholder="min amount of fat in grams"
                                className="form-control" required
                                validators ={{
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model =".minFat"
                                show = "touched"
                                messages ={{
                                    isNumber: "This field should only contain numbers "
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "maxFat":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="maxFat">Maximum Fat</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".maxFat" id="maxFat" name="maxFat"
                                placeholder="max amount of fat in grams"
                                className="form-control mx-0" required
                                validators ={{
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model =".maxFat"
                                show = "touched"
                                messages ={{
                                    isNumber: "This field should only contain numbers "
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "minFiber":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="minFiber">Minimum Fiber</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".minFiber" id="minFiber" name="minFiber"
                                placeholder="min amount of fiber in grams"
                                className="form-control" required
                                validators ={{
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model =".minFiber"
                                show = "touched"
                                messages ={{
                                    isNumber: "This field should only contain numbers "
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "maxFiber":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="maxFiber">Maximum Fiber</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".maxFiber" id="maxFiber" name="maxFiber"
                                placeholder="max amount of fiber in grams"
                                className="form-control" required
                                validators ={{
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model =".maxFiber"
                                show = "touched"
                                messages ={{
                                    isNumber: "This field should only contain numbers "
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "minSugar":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="minSugar">Minimum Sugar</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".minSugar" id="minSugar" name="minSugar"
                                placeholder="min amount of sugar in grams"
                                className="form-control" required
                                validators ={{
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model =".minSugar"
                                show = "touched"
                                messages ={{
                                    isNumber: "This field should only contain numbers "
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "maxSugar":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="maxSugar">Maximum Sugar</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".maxSugar" id="maxSugar" name="maxSugar"
                                placeholder="max amount of sugar in grams"
                                className="form-control" required
                                validators ={{
                                    isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model =".maxSugar"
                                show = "touched"
                                messages ={{
                                    isNumber: "This field should only contain numbers "
                                }}
                            />
                        </Col>
                    </Row>
                </Col>
            );
        case "equipment":
            return (
                <Col xs={12}>
                    <Row className="form-group">
                        <Label xs={12} md={4} htmlFor="equipment">The equipments required (multiple values will be interpreted as or)</Label>
                        <Col xs={12} md={8}>
                            <Control.text model=".equipment" id="equipment" name="equipment"
                                placeholder="e.g. blender, frying pan, bowl"
                                className="form-control" required
                            />
                        </Col>
                    </Row>
                </Col>
            );

        default:
            return null;
    }
}

export default FieldsForm;