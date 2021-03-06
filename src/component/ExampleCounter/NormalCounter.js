import React, {Component} from 'react';


export class NormalCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : this.props.value
        }

        this._increment = this._increment.bind(this);
        this._decrement = this._decrement.bind(this);
    };
    _increment (e) {
        this.setState({
            value: this.state.value + 1
        })
    }
    _decrement (e) {
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

