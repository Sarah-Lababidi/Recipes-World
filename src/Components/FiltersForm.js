import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button, Collapse } from 'reactstrap';

const FiltersForm = ({ addFields, resetSecondForm, clearResults }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const resetFiltersForm = ()=>{
        const formElements = Array.from(document.getElementById("filtersForm"));

        for(let i=0; i<formElements.length; i++){
            formElements[i].disabled = false;
            formElements[i].checked = false;
        }
        setIsOpen(false);
        resetSecondForm();
        clearResults();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        resetSecondForm();
        const elements = Array.from(e.target.elements);
        let objects = elements.map(el => {
            if(el.id === "reset-btn"){
                return null
            } else if(el.id === "select-btn"){
                el.disabled = true;
                return null;
            } else {
                el.disabled = true;
                return {
                    [el.id]: el.checked
                }
            }
        })

        objects = objects.filter(value => value !== null)

        const result = objects.filter(obj => Object.values(obj)[0] === true).map(obj => Object.keys(obj)[0]);
        addFields(result);
    }

    const createCheckbox = (info, title, index) => {
        return (
            <Col xs={6} md={3} key={index}>
                <FormGroup check>
                    <Label htmlFor={info} check>
                        <Input type="checkbox" id={info} name={info}/>{' '}
                            {title}
                    </Label>
                </FormGroup>
            </Col>
        );
    }

    const checkboxes = [["query", "Recipe Name"], ["includeIngredients", "Include Ingredients"], ["excludeIngredients", "Exclude Ingredients"],
                        ["cuisine", "cuisine"], ["diet", "diet"], ["type", "type"], ["maxReadyTime", "Maximum Time to Prepare"],
                        ["minCarbs", "Minimum Carbs"], ["maxCarbs", "Maximum Carbs"], ["minProtein", "Minimum Protein"], ["maxProtein", "Maximum Protein"],
                        ["minCalories", "Minimum Calories"], ["maxCalories", "Maximum Calories"], ["minFat", "Minimum Fat"], ["maxFat", "Maximum Fat"],
                        ["minFiber", "Minimum Fiber"], ["maxFiber", "Maximum Fiber"], ["minSugar", "Minimum Sugar"], ["maxSugar", "Maximum Sugar"],
                        ["equipment", "Needed Equipments"]];
    const renderCheckboxes = checkboxes.map((box, index) => createCheckbox(box[0], box[1], index));

    return (
        <React.Fragment>
            <div className="my-3 d-flex align-items-center">
                <Button className="number btn btn-danger rounded-circle mr-2">1</Button> 
                <h4 className="d-inline-block mb-0 mr-2">Select what to include</h4>
                <Button className="mx-1 px-2 py-1"  outline color="secondary" onClick={toggle}>
                    <i class="fas fa-chevron-down"></i>
                </Button>
                <Button className="ml-auto px-3" id="reset-btn" outline color="secondary" onClick={resetFiltersForm}>Reset Everything</Button>
            </div>
            <Collapse isOpen={isOpen}>
                <div id="filtersFormStyling" className="bg-cover px-5 pt-3 rounded">
                    <Form id="filtersForm" onSubmit={handleSubmit}>
                        <Row form>
                            {renderCheckboxes}
                        </Row>
                        <div className="row justify-content-center">
                            <Button id="select-btn" type="submit" color="dark" className="px-5 my-3 rounded">Select</Button>
                        </div>
                    </Form>
                </div>
            </Collapse>
        </React.Fragment>
    );
}
export default FiltersForm;