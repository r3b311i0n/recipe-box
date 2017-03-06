import * as React from 'react';
import {Button, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import './Recipe.css';

export interface IRecipeProps {
    eventKey: string;
    recipeName: string;
    recipeIngredients: string;
}

interface IRecipeState {
    areIngredientsVisible: boolean;
}

export class Recipe extends React.Component<IRecipeProps, IRecipeState> {
    constructor(props: any) {
        super(props);

        this.state = {
            areIngredientsVisible: false,
        }
        ;
    }

    private generateIngredientsList(): JSX.Element {
        const ingredientsArray = this.props.recipeIngredients.split(",");
        const ingredientsList = ingredientsArray.map((value: string, index: number): JSX.Element => {
            return <ListGroupItem bsStyle="info" key={index.toString()}>{value.trim()}</ListGroupItem>;
        });
        return <ListGroup>{ingredientsList}</ListGroup>;
    }

    private handleIngredientsVisibilityBtn = (): void => {
        this.setState({areIngredientsVisible: !this.state.areIngredientsVisible});
    };

    public render(): JSX.Element {
        return (
            <div>
                <Button className="Recipe-item" bsStyle="success"
                        onClick={this.handleIngredientsVisibilityBtn}>{this.props.recipeName}</Button>
                <Panel collapsible expanded={this.state.areIngredientsVisible}>
                    {this.generateIngredientsList()}
                </Panel>
            </div>
        );
        // todo: create edit and delete buttons and wrap them around an if selection
    }
}