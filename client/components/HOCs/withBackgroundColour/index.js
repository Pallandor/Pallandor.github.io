import React from 'react';

// consumes background colour prop and returns functional component with rest of props
const withBackgroundColour = Component => (props) => (
  <div className={props.bgColour}>
    <Component {...props} />
  </div>
);

// TODO: Add proptype validation for composed component (separate definition?)
// TODO: Determine if need to handle undefined/null for bgColour

export default withBackgroundColour;
