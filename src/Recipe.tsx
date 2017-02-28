import * as React from 'react';
import {ListGroupItem} from 'react-bootstrap';

export interface IRecipeProps {
}

interface IRecipeState {
}

export class Recipe extends React.Component<IRecipeProps, IRecipeState> {
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