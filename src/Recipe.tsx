import * as React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './Recipe.css';

export interface IRecipeProps {
    recipeString: string;
}

interface IRecipeState {
}

export class Recipe extends React.Component<IRecipeProps, IRecipeState> {
    constructor(props: any) {
        super(props);
    }

    private initialiseRecipeList(): JSX.Element[] {
        const recipeArray = JSON.parse(this.props.recipeString);
        let recipeList: JSX.Element[];
        recipeList = recipeArray.map((value: any): JSX.Element => {
            return <ListGroupItem className="Recipe-item" bsStyle="success">{value["RecipeName"]}</ListGroupItem>;
        });
        return recipeList;
    }

    //todo: pass edit to Recipe-control-dialog
    public render(): JSX.Element {
        return (
            <ListGroup componentClass="ul">
                {this.initialiseRecipeList()}
            </ListGroup>
            //    todo: create ingredients list with edit and delete buttons and wrap them around an if selection
        );
    }
}