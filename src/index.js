import ReactDOM from 'react-dom';
import React from 'react';

const HelloWorld = () => {
  return (
    <div>
      Hello world!
    </div>
  )
};

ReactDOM.render(
  <HelloWorld/>, document.getElementById('React-App')
)