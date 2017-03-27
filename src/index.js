import React from 'react';
import ReactDOM  from 'react-dom';
import {NormalCounter} from './component/ExampleCounter/NormalCounter';
import {FlowTypedCounter} from './component/ExampleCounter/FlowTypedCounter';
import Button from './component/oreilly/Button';


export default class HelloReact extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
          <div>

            <Button href="http://reactjs.com">フォローする</Button>
            <Button className="custom" href="http://reactjs.com">フォローする</Button>
          </div>
      );
  }
}


ReactDOM.render(
  <HelloReact />,
  document.getElementById('content')
);
