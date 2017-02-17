import React from 'react';
import ReactDOM  from 'react-dom';
import {Parent} from './component/Parent';


//@flow
var str: number = 'hell world';
console.log(str);
export default class HelloReact extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
          <div>
            <Parent />
          </div>
      );
  }
}


ReactDOM.render(
  <HelloReact />,
  document.getElementById('content')
);
