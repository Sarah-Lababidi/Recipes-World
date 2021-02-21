import * as ActionTypes from './ActionTypes';

export const fetchFeatured = () => (dispatch) => {
    dispatch(loadingFeatured());
    fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=American,Italian,Indian&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&number=6&apiKey=3396f8e993fe45228a86ecd6c9081e4d")
        .then(response => {
            if (response.ok){
                return response.json();
            } else {
                const err = new Error("Error "+response.status+": "+response.statusText);
                throw err;
            }
        }, error => {
            const err = new Error(error.message)
            throw err;
        })
        .then(response => dispatch(addFeatured(response.results)))
        .catch(err => dispatch(featuredFailed(err.message)))
}
export const loadingFeatured = () => {
    return {
        type: ActionTypes.LOADING_FEATURED,
    }
}
export const addFeatured = (featured) => {
    const recipesList = featured.map(recipe => {
        return createRecipe(recipe)
    })
    return {
        type: ActionTypes.ADD_FEATURED,
        payload: recipesList
    }
}
export const featuredFailed = (errMsg) => {
    return {
        type: ActionTypes.FEATURED_FAILED,
        payload: errMsg
    }
}
export const fetchResults = (url) => (dispatch) => {
    dispatch(loadingResult())
    fetch(url)
        .then(response => {
            if (response.ok){
                return response.json();
            } else {
                const err = new Error("Error "+response.status+": "+response.statusText);
                throw err;
            }
        }, error=> {
            const err = new Error(error.message)
            throw err;
        })
        .then(response => {
            setTimeout(() => {
                if(response.results.length === 0){
                    dispatch(emptyResult())
                } else {
                    dispatch(addResult(response.results))
                }
            }, 1000)}
        )
        .catch(err => dispatch(resultFailed(err.message)))
}
export const loadingResult = () => {
    return {
        type: ActionTypes.LOADING_RESULT,
    }
}
export const addResult = (result) => {
    const recipesList = result.map(recipe => {
        return createRecipe(recipe)
    })
    return {
        type: ActionTypes.ADD_RESULT,
        payload: recipesList
    } 
}
export const resultFailed = (errMsg) => {
    return {
        type: ActionTypes.RESULT_FAILED,
        payload: errMsg
    }
}
export const emptyResult = () => {
    return {
        type: ActionTypes.EMPTY_RESULT,
    }
}
export const clearResults = () => {
    return {
        type: ActionTypes.CLEAR_RESULTS,
        payload: []
    }
}
const createRecipe = (recipe) => {
    console.log(recipe);
    const id = recipe.id;
    const title = recipe.title;
    const image = recipe.image;
    const readyInMinutes = recipe.readyInMinutes;
    const servings = recipe.servings;
    const ingredients = recipe.nutrition.ingredients.map(item => {
        return {
            name: item.name,
            amount: item.amount + " " + item.unit
        }
    })
    let instructions = ["Sorry, no instructions available ..."]
    if(recipe.analyzedInstructions.length !== 0)
        instructions = recipe.analyzedInstructions[0].steps.map(obj => obj.step);
    const nutrients = recipe.nutrition.nutrients.map(item => {
        return {
            name: item.name,
            amount: item.amount + " " + item.unit,
            percentOfDailyNeeds: item.percentOfDailyNeeds
        }
    })
    const resultRecipe = {
        id,
        title,
        image,
        readyInMinutes,
        servings,
        ingredients,
        instructions,
        nutrients
    }
    return resultRecipe
}