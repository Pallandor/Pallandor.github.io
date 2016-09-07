import React from 'react';
import { Link } from 'react-router';

import BaseArticle from '../BaseArticle';
import CustomReactMarkdown from '../CustomReactMarkdown';

// CustomReactMarkdown gets injected with content props
const ArticleExcerpt = ({articleLink, title, date, content}) => {

  // TODO: Fix babel config to support template literal strings
  const getSnippet = content => content.slice(0,150) + '...';

  return (
    <BaseArticle
      titleRouteLink={articleLink}
      title={title}
      date={date}
      content={getSnippet(content)}
    >
      <CustomReactMarkdown />
      <Link to={articleLink}>Read more...</Link>
    </BaseArticle>
  );
};

ArticleExcerpt.propTypes = {
  titleRouteLink: React.PropTypes.string,
  title: React.PropTypes.string,
  date: React.PropTypes.any,
  content: React.PropTypes.string,
};

export default ArticleExcerpt;
