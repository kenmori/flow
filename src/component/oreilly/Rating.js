/*@flow*/
import React, {Component} from 'react';

import classNames from 'classnames';


type Props = {
    defaultValue: number,
    readonly: boolean,
    max: number,
}
type State = {
    rating: number,
    tmpRating: number
}

export class Rating extends Component {
    props: Props;
    state: State;
    constructor(props: Props){
        super(props);
        this.state = {
            rating:props.defaultValue,
            tmpRating: props.defaultValue,
        }
    }
}


