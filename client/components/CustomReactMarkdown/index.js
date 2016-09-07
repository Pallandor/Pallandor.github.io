import React from 'react';
import ReactMarkdown from 'react-markdown';

const CustomReactMarkdown = ({content}) => (
  <ReactMarkdown source={content} />
);

CustomReactMarkdown.propTypes = {
  content: React.PropTypes.string,
};

export default CustomReactMarkdown;
