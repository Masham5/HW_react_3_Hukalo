import React from "react";
import { v4 } from 'uuid';


export class Hw1 extends React.Component {

    render() {
        return (
            <ul>
                {this.props.list.map((item) =>
                    <li key={v4()}>{item}</li>
                )}
            </ul>
        );
    }
}