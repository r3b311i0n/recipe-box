import * as React from 'react';
import {Button} from 'react-bootstrap';
import {EditRecipeDialog} from './Edit-recipe-dialog';
import './Edit-recipe-btn.css';

export interface IEditRecipeBtnProps {
    recipeIngredients: string;
    recipeName: string;
}

interface IEditRecipeBtnState {
    isEditRecipeDialogVisible: boolean;
}

export class EditRecipeBtn extends React.Component<IEditRecipeBtnProps, IEditRecipeBtnState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isEditRecipeDialogVisible: false,
        };
    }

    private showEditRecipeBtnHandler = (): void => {
        this.setState({isEditRecipeDialogVisible: true});
    };

    protected closeEditRecipe = (): void => {
        this.setState({isEditRecipeDialogVisible: false});
    };

    public render(): JSX.Element {
        return (
            <div>
                <div className="Edit-recipe-btn-block">
                    <Button bsStyle="success" className="Dialog-btn"
                            onClick={this.showEditRecipeBtnHandler}>Edit</Button>
                    <Button bsStyle="danger" className="Dialog-btn">Delete!</Button>
                </div>
                <EditRecipeDialog closeEditRecipe={this.closeEditRecipe}
                                  isEditRecipeDialogVisible={this.state.isEditRecipeDialogVisible}
                                  recipeName={this.props.recipeName} recipeIngredients={this.props.recipeIngredients}/>
            </div>
        );
    }
}