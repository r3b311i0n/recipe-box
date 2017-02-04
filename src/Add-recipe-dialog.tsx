import * as React from "react";
import {Modal, Grid, Row, Col, Button, FormControl, FormGroup, ControlLabel} from "react-bootstrap";

import "./Add-recipe-dialog.css";

interface AddRecipeDialogState {
    isAddRecipeDialogVisible: boolean,
    ingredientsString: string,
    areIngredientsEmpty: boolean
}

export interface AddRecipeDialogProps {
}

export class AddRecipeDialog extends React.Component<AddRecipeDialogProps, AddRecipeDialogState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isAddRecipeDialogVisible: false,
            areIngredientsEmpty: true,
            ingredientsString: ""
        }
    }

    showAddRecipe = (): void => {
        this.setState({ingredientsString: ""});
        this.setState({areIngredientsEmpty: true});

        this.setState({isAddRecipeDialogVisible: true});
    };

    closeAddRecipe = (): void => {
        this.setState({isAddRecipeDialogVisible: false});
    };

    checkEmptyIngredients = (e: any): void => {
        if (e.target.value.length > 0) {
            this.setState({areIngredientsEmpty: false});
        }
        else {
            this.setState({areIngredientsEmpty: true});
        }

        this.setState({ingredientsString: e.target.value});
    };

    handleAddRecipeDialogBtn = (): void => {
        console.log(this.state.ingredientsString);
    };

    public render(): JSX.Element {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <Button onClick={this.showAddRecipe} bsStyle="primary"
                                    bsSize="large">
                                Add Recipe
                            </Button>
                        </Col>
                    </Row>
                </Grid>
                <Modal
                    onHide={this.closeAddRecipe} show={this.state.isAddRecipeDialogVisible}>
                    <Modal.Header>
                        <h3>Enter Recipe Name and Ingredients</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup controlId="recipeNameText">
                                <ControlLabel>Recipe Name:</ControlLabel>
                                <FormControl type="text" placeholder="Enter Recipe Name"/>
                            </FormGroup>
                            <FormGroup controlId="recipeIngredientsText">
                                <ControlLabel>Ingredients:</ControlLabel>
                                <FormControl componentClass="textArea" style={{resize: "none", height: "10em"}}
                                             placeholder="Enter Ingredients" onChange={this.checkEmptyIngredients}/>
                            </FormGroup>
                        </form>
                        <div className="Recipe-dialog-block">
                            <Button className="Add-dialog-btn" disabled={this.state.areIngredientsEmpty}
                                    bsStyle="success" bsSize="large"
                                    onClick={this.handleAddRecipeDialogBtn}>Add</Button>
                            <Button className="Close-dialog-btn" bsSize="large" bsStyle="danger"
                                    onClick={this.closeAddRecipe}>Close</Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}