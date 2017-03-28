import * as React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup, Modal} from 'react-bootstrap';
import './Edit-recipe-dialog.css';

export interface IEditRecipeDialogProps {
    closeEditRecipe: () => void;
    isEditRecipeDialogVisible: boolean;
    recipeArrayIndexNo: number;
    recipeName: string;
    recipeIngredients: string;
    refreshRecipeList: () => void;
}

interface IEditRecipeDialogState {
    ingredientsString: string;
    recipeNameString: string;
}

export class EditRecipeDialog extends React.Component<IEditRecipeDialogProps, IEditRecipeDialogState> {
    constructor(props: any) {
        super(props);

        this.state = {
            ingredientsString: this.props.recipeIngredients,
            recipeNameString: this.props.recipeName,
        }
    }

    private setIngredients = (e: any): void => {
        this.setState({ingredientsString: e.target.value}, () => {
            this.checkEmptyFields();
        });
    };

    private setRecipeName = (e: any): void => {
        this.setState({recipeNameString: e.target.value}, () => {
            this.checkEmptyFields();
        });
    };

    private checkEmptyFields(): void {
        const noSpaceRecipeString = this.state.recipeNameString.trim();
        const noSpaceIngredientsString = this.state.ingredientsString.trim();

        if (noSpaceRecipeString.length <= 0 || noSpaceIngredientsString.length <= 0) {
            this.setState({
                ingredientsString: this.props.recipeIngredients,
                recipeNameString: this.props.recipeName,
            });
        }
    }

    private closeDialog(): void {
        this.setState({
            ingredientsString: this.props.recipeIngredients,
            recipeNameString: this.props.recipeName,
        });
        this.setState({recipeNameString: this.props.recipeName});
        this.setState({ingredientsString: this.props.recipeIngredients});
        this.props.closeEditRecipe();
    }

    private handleCloseDialogBtn = (): void => {
        this.closeDialog();
    };

    private handleModalExit = (): void => {
        this.closeDialog();
    };

    private handleConfirmEditRecipeDialogBtn = (): void => {
        const recipeNameString = (this.state.recipeNameString.trim().length < 1) ?
            this.props.recipeName : this.state.recipeNameString;
        const recipeIngredientsString = (this.state.ingredientsString.trim().length < 1) ?
            this.props.recipeIngredients : this.state.ingredientsString;
        const recipeObject = {
            "RecipeName": recipeNameString,
            "IngredientsList": recipeIngredientsString,
        };
        let recipeArray = JSON.parse(localStorage.getItem("_recipe_array"));
        recipeArray.forEach((elem: any, index: number, array: any[]) => {
            if (index === this.props.recipeArrayIndexNo) {
                array[index] = recipeObject;
            }
        });
        localStorage.setItem("_recipe_array", JSON.stringify(recipeArray));
        this.props.refreshRecipeList();
        this.closeDialog();
    };

    public render(): JSX.Element {
        return (
            <Modal onHide={this.props.closeEditRecipe} onExit={this.handleModalExit}
                   show={this.props.isEditRecipeDialogVisible}>
                <Modal.Header>
                    <h3>Edit Recipe Name and Ingredients</h3>
                </Modal.Header>
                <Modal.Body>
                    <Form className="Edit-recipe-form">
                        <FormGroup controlId="editRecipeNameText">
                            <ControlLabel>Recipe Name:</ControlLabel>
                            <FormControl className="Edit-recipe-form" type="text" placeholder={this.props.recipeName}
                                         onKeyUp={this.setRecipeName}/>
                        </FormGroup>
                        <FormGroup controlId="editRecipeIngredientsText">
                            <ControlLabel>Ingredients:</ControlLabel>
                            <FormControl autoFocus className="Edit-recipe-form" componentClass="textArea"
                                         style={{resize: "none", height: "10em"}} onKeyUp={this.setIngredients}>
                                {this.props.recipeIngredients}
                            </FormControl>
                        </FormGroup>
                    </Form>
                    <div className="Edit-recipe-dialog-block">
                        <Button bsStyle="success" bsSize="large" className="Confirm-dialog-btn"
                                onClick={this.handleConfirmEditRecipeDialogBtn}>Confirm</Button>
                        <Button bsStyle="danger" bsSize="large" className="Cancel-dialog-btn"
                                onClick={this.handleCloseDialogBtn}>
                            Cancel</Button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}