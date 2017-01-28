import * as React from "react";
import {ListGroupItem} from "react-bootstrap";

export interface RecipeProps {
}

interface RecipeState {
}

export class Recipe extends React.Component<RecipeProps, RecipeState> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <ListGroupItem>recipe placeholder</ListGroupItem>
            //    todo: create ingredients list with edit and delete buttons and wrap them around an if selection
        );
    }
}

