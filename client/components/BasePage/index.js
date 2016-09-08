import React from 'react';

const BasePage = ({title, content, children}) => (
  <article className={styles.article}>
    <h1>{title}</h1>
    <p className={styles.paragraph}>
      {content}
    </p>
      {children}
  </article>
);

const styles = {
  article: 'pa3 pa5-ns',
  paragraph: 'measure lh-copy',
};

// TODO: update proptype validation to indicate required props where relevant
BasePage.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string,
  children: React.PropTypes.node,
};

export default BasePage;
