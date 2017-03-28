import * as React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Modal} from 'react-bootstrap';
import './Add-recipe-dialog.css';

export interface IAddRecipeDialogProps {
    closeAddRecipe: () => void;
    isAddRecipeDialogVisible: boolean;
    refreshRecipeList: () => void;
}

interface IAddRecipeDialogState {
    ingredientsString: string;
    recipeNameString: string;
    emptyFields: boolean;
}

export class AddRecipeDialog extends React.Component<IAddRecipeDialogProps, IAddRecipeDialogState> {
    constructor(props: any) {
        super(props);

        this.state = {
            emptyFields: true,
            ingredientsString: "",
            recipeNameString: "",
        };
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

        if (noSpaceRecipeString.length > 0 && noSpaceIngredientsString.length > 0) {
            this.setState({emptyFields: false});
        }
        else {
            this.setState({emptyFields: true});
        }
    }

    private closeDialog(): void {
        this.setState({emptyFields: true});
        this.setState({recipeNameString: ""});
        this.setState({ingredientsString: ""});
        this.props.closeAddRecipe();
    }

    private handleAddRecipeDialogBtn = (): void => {
        const recipeObject = {
            "RecipeName": this.state.recipeNameString,
            "IngredientsList": this.state.ingredientsString,
        };
        const localRecipeString = localStorage.getItem("_recipe_array");
        let recipeArray = (localRecipeString) ? JSON.parse(localRecipeString) : [];
        recipeArray.push(recipeObject);
        localStorage.setItem("_recipe_array", JSON.stringify(recipeArray));
        this.props.refreshRecipeList();
        this.closeDialog();
    };

    private handleCloseDialogBtn = (): void => {
        this.closeDialog();
    };

    private handleModalExit = (): void => {
        this.closeDialog();
    };

    public render(): JSX.Element {
        return (
            <Modal
                onHide={this.props.closeAddRecipe} show={this.props.isAddRecipeDialogVisible}
                onExit={this.handleModalExit}>
                <Modal.Header>
                    <h3>Enter Recipe Name and Ingredients</h3>
                </Modal.Header>
                <Modal.Body>
                    <form className="Add-recipe-form">
                        <FormGroup controlId="addRecipeNameText">
                            <ControlLabel>Recipe Name:</ControlLabel>
                            <FormControl autoFocus className="Add-recipe-form" type="text"
                                         placeholder="Enter Recipe Name"
                                         onKeyUp={this.setRecipeName}/>
                        </FormGroup>
                        <FormGroup controlId="recipeIngredientsText">
                            <ControlLabel>Ingredients:</ControlLabel>
                            <FormControl className="Add-recipe-form" componentClass="textArea"
                                         style={{resize: "none", height: "10em"}}
                                         placeholder="Enter Ingredients" onKeyUp={this.setIngredients}/>
                        </FormGroup>
                    </form>
                    <div className="Recipe-dialog-block">
                        <Button className="Add-dialog-btn" disabled={this.state.emptyFields}
                                bsStyle="success" bsSize="large"
                                onClick={this.handleAddRecipeDialogBtn}>Add</Button>
                        <Button className="Close-dialog-btn" bsSize="large" bsStyle="danger"
                                onClick={this.handleCloseDialogBtn}>Close</Button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}
