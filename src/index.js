import React from 'react';
import ReactDOM  from 'react-dom';
import {ParentComponent} from './component/ParentComponent';


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
            <ParentComponent />
          </div>
      );
  }
}


ReactDOM.render(
  <HelloReact />,
  document.getElementById('content')
);
