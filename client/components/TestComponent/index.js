import React from 'react';

const TestComponent = ({params, children}) => (
  <div>
    <h1>This is the TestComponent</h1>
    <h3>This.props.params.id: {params.id}</h3>
    {children}
  </div>
);

export default TestComponent;
