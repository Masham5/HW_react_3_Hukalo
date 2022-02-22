import React from "react";

export class Hw2 extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0,
        };
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickDeduct = this.handleClickDeduct.bind(this);
    }

    handleClickAdd() {
        this.setState({ value: this.state.value + 1 });
    }

    handleClickDeduct() {
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.handleClickAdd}>+</button>
                <button onClick={this.handleClickDeduct}>-</button>
            </div>
        );
    }
}