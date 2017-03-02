import * as React from 'react';
import {Button, Col, Grid, Row} from 'react-bootstrap';
import './Add-recipe-dialog.css';
import {RecipeControlDialog} from './Recipe-control-dialog';

export interface IAddRecipeDialogProps {
}

interface IAddRecipeDialogState {
    isRecipeControlDialogVisible: boolean;
}

export class AddRecipeDialog extends React.Component<IAddRecipeDialogProps, IAddRecipeDialogState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isRecipeControlDialogVisible: false,
        };
    }

    private showRecipeControl = (): void => {
        this.setState({isRecipeControlDialogVisible: true});
    };

    protected closeRecipeControl = (): void => {
        this.setState({isRecipeControlDialogVisible: false});
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
                <RecipeControlDialog isRecipeControlDialogVisible={this.state.isRecipeControlDialogVisible}
                                     closeRecipeControl={this.closeRecipeControl} dialogType="Add"/>
            </div>
        );
    }
}
