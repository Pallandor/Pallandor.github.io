import React from 'react';

import BaseArticle from '../BaseArticle';
import CustomReactMarkdown from '../CustomReactMarkdown';

const CompleteArticle = ({title, date, content, children}) => (
  <BaseArticle
    title={title}
    date={date}
    content={content}
  >
    <CustomReactMarkdown /> // gets injected with contet={}
  </BaseArticle>
);

// TODO: Add proptypes validation

export default CompleteArticle;
