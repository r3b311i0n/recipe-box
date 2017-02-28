import * as React from 'react';
import {Modal, Grid, Row, Col, Button, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import './Add-recipe-dialog.css';

interface IAddRecipeDialogState {
    isAddRecipeDialogVisible: boolean;
    ingredientsString: string;
    recipeNameString: string;
    emptyFields: boolean;
}

export interface IAddRecipeDialogProps {
}

export class AddRecipeDialog extends React.Component<IAddRecipeDialogProps, IAddRecipeDialogState> {
    constructor(props: any) {
        super(props);

        this.state = {
            emptyFields: true,
            ingredientsString: "",
            isAddRecipeDialogVisible: false,
            recipeNameString: "",
        };
    }

    private showAddRecipe = (): void => {
        this.setState({ingredientsString: ""});
        this.setState({recipeNameString: ""});
        this.setState({emptyFields: true});

        this.setState({isAddRecipeDialogVisible: true});
    };

    private closeAddRecipe = (): void => {
        this.setState({isAddRecipeDialogVisible: false});
    };

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

    private handleAddRecipeDialogBtn = (): void => {
        const ingredientsArray = this.state.ingredientsString.split(",");
        const recipeObject = {
            ingredients: ingredientsArray,
            name: this.state.recipeNameString,
        };
        console.log(recipeObject);
    };

    // todo: make new component from modal code for use in recipe editing

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
