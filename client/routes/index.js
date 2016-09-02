import React from 'react';
import { IndexRoute, Route } from 'react-router';

const outlineComponent = {
  borderColor: 'black',
};

// const App = () => (
//   <div style={outlineComponent}>This is App component </div>
// );

// const HomePage = () => (
//   <div>This is HomePage component </div>
// );

// const AboutPage = () => (
//   <div>This is AboutPage component </div>
//);
// import App from '../containers/app';
// import HomePage from '../containers/home-page';
// import AboutPage from '../containers/about-page';

// export default (
//   <Route path="/" component={ App }>
//     <IndexRoute component={ HomePage }/>
//     <Route path="about" component={ AboutPage }/>
//   </Route>
// );
import Test from '../components/Test';

export default (
  <Route path="/" component={ Test }>
    <IndexRoute component={ Test }/>
    <Route path="about" component={ Test }/>
  </Route>
);