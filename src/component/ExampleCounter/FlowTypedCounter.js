/* @flow */
//https://github.com/facebook/flow/issues/1517
import React, {Component} from 'react';

type Props = {
    title: string,
    visited: boolean,
    value: number
}

type State = {
    value: number
}

export class FlowTypedCounter extends Component {
    state: State;
    props: {
        title: string,
        value: number
    }
    constructor(props: Props){
        super(props);
        this.state = {
            value : this.props.value
        }
        const self: any = this
        self._increment = this._increment.bind(this);
        self._decrement = this._decrement.bind(this);
    };
    _increment (e:any) {
        this.setState({
            value: this.state.value + 1
        })
    }
    _decrement (e:any) {
        this.setState({
            value: this.state.value -1
        })
    }
    render(){
        return (
            <div>
                <button type='button' onClick={this._increment}>increment</button>
                <button type='button' onClick={this._decrement}>decrement</button>
                <input type='text' value={this.state.value} />
            </div>
        )
    }
}
