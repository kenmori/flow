import React from 'react';
import ReactDOM  from 'react-dom';
import {NormalCounter} from './component/ExampleCounter/NormalCounter';
import {FlowTypedCounter} from './component/ExampleCounter/FlowTypedCounter';


export default class HelloReact extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
          <div>
            <p>normal</p>
            <NormalCounter title='normal' visited={true} value={0} />
            <p>flowtyped</p>
            <FlowTypedCounter title='typed' visited={true} value={0} />
          </div>
      );
  }
}


ReactDOM.render(
  <HelloReact />,
  document.getElementById('content')
);
