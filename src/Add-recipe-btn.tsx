import * as React from 'react';
import {Button, Col, Grid, Row} from 'react-bootstrap';
import {AddRecipeDialog} from './Add-recipe-dialog';

export interface IAddRecipeBtnProps {
    refreshRecipeList: () => void;
}

interface IAddRecipeBtnState {
    isAddRecipeDialogVisible: boolean;
}

export class AddRecipeBtn extends React.Component<IAddRecipeBtnProps, IAddRecipeBtnState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isAddRecipeDialogVisible: false,
        };
    }

    private showRecipeControl = (): void => {
        this.setState({isAddRecipeDialogVisible: true});
    };

    protected closeAddRecipe = (): void => {
        this.setState({isAddRecipeDialogVisible: false});
    };

    public render(): JSX.Element {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <Button onClick={this.showRecipeControl} bsStyle="primary"
                                    bsSize="large">
                                Add Recipe
                            </Button>
                        </Col>
                    </Row>
                </Grid>
                <AddRecipeDialog refreshRecipeList={this.props.refreshRecipeList}
                                 isAddRecipeDialogVisible={this.state.isAddRecipeDialogVisible}
                                 closeAddRecipe={this.closeAddRecipe}/>
            </div>
        );
    }
}
