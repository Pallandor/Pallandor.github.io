import React from 'react';

import BaseArticle from '../BaseArticle';
import CustomReactMarkdown from '../CustomReactMarkdown';

// CustomReactMarkdown gets injected with content props
const CompleteArticle = ({title, date, content}) => (
  <BaseArticle
    title={title}
    date={date}
    content={content}
  >
    <CustomReactMarkdown />
  </BaseArticle>
);


CompleteArticle.propTypes = {
  title: React.PropTypes.string,
  date: React.PropTypes.any,
  content: React.PropTypes.string,
};

export default CompleteArticle;
