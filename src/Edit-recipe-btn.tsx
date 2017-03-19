import * as React from 'react';
import {Button, Modal} from 'react-bootstrap';
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
    isRecipeDeleteConfirmationDialogVisible: boolean;
}

export class EditRecipeBtn extends React.Component<IEditRecipeBtnProps, IEditRecipeBtnState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isEditRecipeDialogVisible: false,
            isRecipeDeleteConfirmationDialogVisible: false,
        };
    }

    private handleShowEditRecipeBtn = (): void => {
        this.setState({isEditRecipeDialogVisible: true});
    };

    protected closeEditRecipe = (): void => {
        this.setState({isEditRecipeDialogVisible: false});
    };

    private handleConfirmDeleteRecipeBtn = (): void => {
        const recipeArray = JSON.parse(localStorage.getItem("RecipeArray"));
        const newRecipeArray = recipeArray.filter((value: any, index: number) => {
            return index !== this.props.recipeArrayIndexNo;
        });
        localStorage.setItem("RecipeArray", JSON.stringify(newRecipeArray));
        this.props.refreshRecipeList();
        this.closeEditRecipe();
    };

    private handleDeleteRecipeBtn = (): void => {
        this.setState({isRecipeDeleteConfirmationDialogVisible: true});
    };

    private closeDeleteConfirmationDialog = (): void => {
        this.setState({isRecipeDeleteConfirmationDialogVisible: false});
    };

    public render(): JSX.Element {
        return (
            <div>
                <div className="Edit-recipe-btn-block">
                    <Button bsStyle="success" className="Dialog-btn"
                            onClick={this.handleShowEditRecipeBtn}>Edit</Button>
                    <Button bsStyle="danger" className="Dialog-btn"
                            onClick={this.handleDeleteRecipeBtn}>Delete!</Button>
                </div>
                <Modal onHide={this.closeDeleteConfirmationDialog}
                       show={this.state.isRecipeDeleteConfirmationDialogVisible}>
                    <Modal.Header>
                        <h3>Are you sure you want to delete the recipe for making {this.props.recipeName}?</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="Edit-recipe-btn-block">
                            <Button bsStyle="success" bsSize="large" className="Dialog-btn"
                                    onClick={this.closeDeleteConfirmationDialog}>No</Button>
                            <Button bsStyle="danger" bsSize="large" className="Dialog-btn"
                                    onClick={this.handleConfirmDeleteRecipeBtn}>Yes</Button>
                        </div>
                    </Modal.Body>
                </Modal>
                <EditRecipeDialog closeEditRecipe={this.closeEditRecipe}
                                  isEditRecipeDialogVisible={this.state.isEditRecipeDialogVisible}
                                  recipeName={this.props.recipeName} recipeIngredients={this.props.recipeIngredients}/>
            </div>
        );
    }
}