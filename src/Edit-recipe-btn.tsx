import * as React from 'react';
import {Button} from 'react-bootstrap';
import {EditRecipeDialog} from './Edit-recipe-dialog';
import './Edit-recipe-btn.css';

export interface IEditRecipeBtnProps {
    recipeArrayIndexNo: number;
    recipeIngredients: string;
    recipeName: string;
    refreshRecipeList: () => void;
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

    private deleteRecipeBtnHandler = (): void => {
        const recipeArray = JSON.parse(localStorage.getItem("RecipeArray"));
        const newRecipeArray = recipeArray.filter((value: any, index: number) => {
            return index !== this.props.recipeArrayIndexNo;
        });
        localStorage.setItem("RecipeArray", JSON.stringify(newRecipeArray));
        this.props.refreshRecipeList();
        this.closeEditRecipe();
    };

    public render(): JSX.Element {
        return (
            <div>
                <div className="Edit-recipe-btn-block">
                    <Button bsStyle="success" className="Dialog-btn"
                            onClick={this.showEditRecipeBtnHandler}>Edit</Button>
                    <Button bsStyle="danger" className="Dialog-btn"
                            onClick={this.deleteRecipeBtnHandler}>Delete!</Button>
                </div>
                <EditRecipeDialog closeEditRecipe={this.closeEditRecipe}
                                  isEditRecipeDialogVisible={this.state.isEditRecipeDialogVisible}
                                  recipeName={this.props.recipeName} recipeIngredients={this.props.recipeIngredients}/>
            </div>
        );
    }
}