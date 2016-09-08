import React from 'react';

import BasePage from '../BasePage';

const AboutPage = () => (
  <BasePage
    title={staticContent.title}
    content={staticContent.content}
  />
);

const staticContent = {
  title: 'About Me',
  content: `
  Australian full-stack software engineer fluent in Javascript (from React.js and
    Redux to Node.js, MongoDB and Express). Loves deconstructing hopeless problems
    into solvable sets. Always thinking about what scalable front-end applications
    would look like and optimal solutions to managing complex UI and state.

    You'll always find me geeking out over new tech and relentlessly customising my
    dev environment.
  `,
};

export default AboutPage;
