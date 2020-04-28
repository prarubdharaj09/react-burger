import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


class BurgerBuilder extends Component {
    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = Object.assign(this.state.ingredients);
        updatedIngredients[type] = updatedCount;
        this.setState({ingredients :updatedIngredients})
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){return;}
        const updatedCount = oldCount - 1;
        const updatedIngredients = Object.assign(this.state.ingredients);
        updatedIngredients[type] = updatedCount;
        this.setState({ingredients :updatedIngredients})
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;
