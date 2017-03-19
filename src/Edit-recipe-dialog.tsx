import * as React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup, Modal} from 'react-bootstrap';
import './Edit-recipe-dialog.css';

export interface IEditRecipeDialogProps {
    closeEditRecipe: () => void;
    isEditRecipeDialogVisible: boolean;
    recipeName: string;
    recipeIngredients: string;
}

interface IEditRecipeDialogState {
}

export class EditRecipeDialog extends React.Component<IEditRecipeDialogProps, IEditRecipeDialogState> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Modal onHide={this.props.closeEditRecipe} show={this.props.isEditRecipeDialogVisible}>
                <Modal.Header>
                    <h3>Edit Recipe Name and Ingredients</h3>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormGroup controlId="editRecipeNameText">
                            <ControlLabel>Recipe Name:</ControlLabel>
                            <FormControl type="text" placeholder={this.props.recipeName}/>
                        </FormGroup>
                        <FormGroup controlId="editRecipeIngredientsText">
                            <ControlLabel>Ingredients:</ControlLabel>
                            <FormControl componentClass="textArea" style={{resize: "none", height: "10em"}}>
                                {this.props.recipeIngredients}
                            </FormControl>
                        </FormGroup>
                    </Form>
                    <div className="Edit-recipe-dialog-block">
                        <Button bsStyle="success" className="Confirm-dialog-btn">Confirm</Button>
                        <Button bsStyle="danger" className="Cancel-dialog-btn" onClick={this.props.closeEditRecipe}>
                            Cancel</Button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}