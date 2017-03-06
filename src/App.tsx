import * as React from 'react';
import {Col, Grid, PageHeader, Panel, Row} from 'react-bootstrap';
import './App.css';
import {Recipe} from './Recipe';
import {AddRecipeBtn} from './Add-recipe-btn';

export interface IAppProps {
}

interface IAppState {
    recipeString: string;
}

export class App extends React.Component<IAppProps, IAppState> {
    constructor(props: any) {
        super(props);
        const initialRecipeArray = localStorage.getItem("RecipeArray") ? localStorage.getItem("RecipeArray") : JSON.stringify([{
                "RecipeName": "Boiled Egg",
                "Ingredients": "Egg, Water."
            }]);
        localStorage.setItem("RecipeArray", initialRecipeArray);
        this.state = {
            recipeString: initialRecipeArray,
        }
    }

    protected refreshRecipeList = (): void => {
        this.setState({recipeString: localStorage.getItem("RecipeArray")});
    }

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
                                    <Recipe recipeString={this.state.recipeString}/>
                                </Panel>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12} lg={12}>
                                <AddRecipeBtn refreshRecipeList={this.refreshRecipeList}/>
                            </Col>
                        </Row>
                    </Grid>
                </main>
            </div>
        );
    }
}