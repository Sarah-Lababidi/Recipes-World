import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from "./About";
import Services from './Services';
import Recipes from './Recipes';
import  RecipeDetail from './RecipeDetail'
import { connect } from 'react-redux';
import { fetchFeatured, fetchResults, clearResults } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        featuredState: state.featuredState,
        resultState: state.resultState
    }
}
const mapDispatchToProps = dispatch => ({
    fetchFeatured: () => dispatch(fetchFeatured()),
    fetchResults: (url) => dispatch(fetchResults(url)),
    clearResults: () => dispatch(clearResults())
})
class Main extends Component {
    componentDidMount() {
        this.props.fetchFeatured();
    }
    render() {
        const RecipeDetailPage = ({ match }) => {
            let recipe = this.props.resultState.result.find(recipe => recipe.id === parseInt(match.params.recipeId, 10))
            if(!recipe){
                recipe = this.props.featuredState.featured.find(recipe => recipe.id === parseInt(match.params.recipeId, 10))
            }
            return (
                <RecipeDetail recipe={recipe} />
            );
        }
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path="/home">
                            <Home featuredState={this.props.featuredState} />
                        </Route>
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route exact path="/recipes">
                            <Recipes fetchResults={this.props.fetchResults} clearResults={this.props.clearResults}
                                    resultState={this.props.resultState}/>
                        </Route>
                        <Route path="/recipes/:recipeId" component={RecipeDetailPage}/>
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));