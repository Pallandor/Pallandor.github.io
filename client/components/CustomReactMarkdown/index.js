import React from 'react';
import ReactMarkdown from 'react-markdown';

const CustomReactMarkdown = ({content}) => (
  <ReactMarkdown source={content} />
);

export default CustomReactMarkdown;
