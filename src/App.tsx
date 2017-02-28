import * as React from 'react';
import {Col, Row, Grid, Panel, PageHeader, ListGroup} from 'react-bootstrap';
import './App.css';
import {Recipe} from './Recipe';
import {AddRecipeDialog} from './Add-recipe-dialog';

export interface IAppProps {
//    todo: get recipe array from __localStorage
}

interface IAppState {
}

export class App extends React.Component<IAppProps, IAppState> {
    constructor(props: any) {
        super(props);
    }

    //todo: use an Array.map to initialise all recipes
    public render(): JSX.Element {
        return (
            <div>
                <header>
                    <Grid>
                        <Row>
                            <Col sm={12} md={12} lg={12}><PageHeader
                                className="App-heading">Recipe Box</PageHeader></Col>
                        </Row>
                    </Grid>
                </header>
                <main>
                    <Grid>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <Panel>
                                    <ListGroup componentClass="ul">
                                        <Recipe/>
                                    </ListGroup>
                                </Panel>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <AddRecipeDialog/>
                            </Col>
                        </Row>
                    </Grid>
                </main>
            </div>
        );
    }
}