import * as React from "react";
import {Modal, Grid, Row, Col, Button} from "react-bootstrap";

interface AddRecipeDialogState {
    isAddRecipeDialogVisible: boolean,
    showAddRecipe: () => void,
    closeAddRecipe: () => void
}

interface AddRecipeDialogProps {
}

export class AddRecipeDialog extends React.Component<AddRecipeDialogProps, AddRecipeDialogState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isAddRecipeDialogVisible: false,
            showAddRecipe: this.showAddRecipe,
            closeAddRecipe: this.closeAddRecipe
        }
    }

    showAddRecipe = () => {
        this.setState({isAddRecipeDialogVisible: true});
    };

    closeAddRecipe = () => {
        this.setState({isAddRecipeDialogVisible: false});
    };

    public render(): JSX.Element {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Button onClick={this.showAddRecipe} bsStyle="primary" bsSize="large"
                                    className="Add-recipe-btn">
                                Add Recipe
                            </Button>
                        </Col>
                    </Row>
                    <Row><Col sm={12}><Modal
                        onHide={this.closeAddRecipe} show={this.state.isAddRecipeDialogVisible}>
                        <Modal.Header>
                            WORKS!
                        </Modal.Header>
                    </Modal></Col></Row>
                </Grid>
            </div>
        );
    }
}