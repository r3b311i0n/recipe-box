import * as React from 'react';
import {Button, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import './Recipe.css';
import {EditRecipeBtn} from './Edit-recipe-btn';

export interface IRecipeProps {
    eventKey: string;
    recipeArrayIndexNo: number;
    recipeName: string;
    recipeIngredients: string;
    refreshRecipeList: () => void;
}

interface IRecipeState {
    areIngredientsVisible: boolean;
}

export class Recipe extends React.Component<IRecipeProps, IRecipeState> {
    constructor(props: any) {
        super(props);

        this.state = {
            areIngredientsVisible: false,
        };
    }

    private generateIngredientsList(): JSX.Element {
        const ingredientsArray = this.props.recipeIngredients.split(",");
        const ingredientsList = ingredientsArray.map((value: string, index: number): JSX.Element => {
            return <ListGroupItem bsStyle="info" key={index.toString()}>{value.trim()}</ListGroupItem>;
        });
        return <ListGroup>{ingredientsList}<EditRecipeBtn recipeArrayIndexNo={this.props.recipeArrayIndexNo}
                                                          recipeIngredients={this.props.recipeIngredients}
                                                          recipeName={this.props.recipeName}
                                                          refreshRecipeList={this.props.refreshRecipeList}/></ListGroup>;
    }

    private handleIngredientsVisibilityBtn = (): void => {
        this.setState({areIngredientsVisible: !this.state.areIngredientsVisible});
    };

    public render(): JSX.Element {
        return (
            <div>
                <Button className="Recipe-item" bsStyle="primary"
                        onClick={this.handleIngredientsVisibilityBtn}>{this.props.recipeName}</Button>
                <Panel collapsible expanded={this.state.areIngredientsVisible}>
                    {this.generateIngredientsList()}
                </Panel>
            </div>
        );
    }
}