import * as React from "react";

import "./App.css"
import {Recipe} from './Recipe';

export interface AppProps {
//    todo: get recipe array from __localStorage
}

interface AppState {
}

export class App extends React.Component<AppProps, AppState> {
    constructor(props: any) {
        super(props);
    }

    //todo: use an Array.map to initialise all recipes
    public render(): JSX.Element {
        return (
            <main>
                <div>
                    <ul>
                        <li><Recipe/></li>
                    </ul>
                </div>
                <div><label label="Add Recipe">
                    <button className="Add-recipe"/>
                </label></div>
            </main>
        );
    }
}