import * as React from 'react';
import {Col, Grid, ListGroup, ListGroupItem, PageHeader, Row} from 'react-bootstrap';
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
        const initialRecipeArray = localStorage.getItem("_recipe_array") ? localStorage.getItem("_recipe_array") : JSON.stringify(
                [
                    {
                        "RecipeName": "Boiled Egg",
                        "IngredientsList": "Egg, Water"
                    },
                    {
                        "RecipeName": "Coffee",
                        "IngredientsList": "Coffee Beans, Sugar, Water"
                    },
                    {
                        "RecipeName": "Powerpuff Girls",
                        "IngredientsList": "Sugar, Spice, Everything Nice"
                    }
                ]);
        localStorage.setItem("_recipe_array", initialRecipeArray);
        this.state = {
            recipeString: initialRecipeArray,
        }
    }

    private initialiseRecipeList(): JSX.Element {
        const recipeArray = JSON.parse(this.state.recipeString);
        const recipeList = recipeArray.map((value: any, index: number): JSX.Element => {
            return <ListGroupItem key={value["RecipeName"]}>
                <Recipe eventKey={index.toString()} recipeArrayIndexNo={index} recipeName={value["RecipeName"]}
                        recipeIngredients={value["IngredientsList"]} refreshRecipeList={this.refreshRecipeList}/>
            </ListGroupItem>;
        });
        return <ListGroup componentClass="ul">{recipeList}</ListGroup>;
    }

    protected refreshRecipeList = (): void => {
        this.setState({recipeString: localStorage.getItem("_recipe_array")});
    };

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
                                {this.initialiseRecipeList()}
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