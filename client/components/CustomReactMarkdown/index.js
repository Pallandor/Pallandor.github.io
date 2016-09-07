import React from 'react';
import ReactMarkdown from 'react-markdown';

const CustomReactMarkdown = ({content}) => (
  <ReactMarkdown
    source={content}
    className={styles.paragraph}
  />
);

CustomReactMarkdown.propTypes = {
  content: React.PropTypes.string,
};

const styles = {
  paragraph: 'lh-copy measure mt4 mt0-ns',
};

export default CustomReactMarkdown;
