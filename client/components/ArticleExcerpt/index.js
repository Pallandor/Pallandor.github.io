import React from 'react';
import { Link } from 'react-router';

import BaseArticle from '../BaseArticle';
import CustomReactMarkdown from '../CustomReactMarkdown';

const ArticleExcerpt = ({titleRouteLink, title, date, content}) => (
  <BaseArticle
    titleRouteLink={titleRouteLink}
    title={title}
    date={date}
    content={content}
  >
    <CustomReactMarkdown /> // gets njected with content={}
    <Link to={titleRouteLink}>Read more...</Link> // lol will also get 'content!'
  </BaseArticle>
);

// TODO: Add proptypes validation

export default ArticleExcerpt;
