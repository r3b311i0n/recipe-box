import * as React from "react";

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
            <div>
                <p className="Recipe-name"></p>
            </div>
        //    todo: create ingredients list with edit and delete buttons and wrap them around an if selection
        );
    }
}

