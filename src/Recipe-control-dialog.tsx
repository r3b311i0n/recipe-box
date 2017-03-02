import * as React from 'react';
import {Button, ControlLabel, FormControl, FormGroup, Modal} from 'react-bootstrap';

export interface IRecipeControlDialogProps {
    closeRecipeControl: () => void;
    dialogType: string;
    isRecipeControlDialogVisible: boolean;
}

interface IRecipeControlDialogState {
    ingredientsString: string;
    recipeNameString: string;
    emptyFields: boolean;
}

export class RecipeControlDialog extends React.Component<IRecipeControlDialogProps, IRecipeControlDialogState> {
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

    private handleRecipeControlDialogBtn = (): void => {
        localStorage.setItem(this.state.recipeNameString, this.state.ingredientsString);
    };

    public render() {
        return (
            <Modal
                onHide={this.props.closeRecipeControl} show={this.props.isRecipeControlDialogVisible}>
                <Modal.Header>
                    <h3>Enter Recipe Name and Ingredients</h3>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup controlId="recipeNameText">
                            <ControlLabel>Recipe Name:</ControlLabel>
                            <FormControl type="text" placeholder="Enter Recipe Name"
                                         onKeyUp={this.setRecipeName}/>
                        </FormGroup>
                        <FormGroup controlId="recipeIngredientsText">
                            <ControlLabel>Ingredients:</ControlLabel>
                            <FormControl componentClass="textArea" style={{resize: "none", height: "10em"}}
                                         placeholder="Enter Ingredients" onKeyUp={this.setIngredients}/>
                        </FormGroup>
                    </form>
                    <div className="Recipe-dialog-block">
                        <Button className="Add-dialog-btn" disabled={this.state.emptyFields}
                                bsStyle="success" bsSize="large"
                                onClick={this.handleRecipeControlDialogBtn}>{this.props.dialogType}</Button>
                        <Button className="Close-dialog-btn" bsSize="large" bsStyle="danger"
                                onClick={this.props.closeRecipeControl}>Close</Button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}
