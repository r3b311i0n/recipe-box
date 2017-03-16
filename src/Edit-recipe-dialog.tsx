import * as React from 'react';
import {ControlLabel, Form, FormControl, FormGroup, Modal} from 'react-bootstrap';
import './Edit-recipe-btn.css';

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
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}