import React from 'react';
import { Link } from 'react-router';

import BaseArticle from '../BaseArticle';
import CustomReactMarkdown from '../CustomReactMarkdown';

// CustomReactMarkdown gets injected with content props
const ArticleExcerpt = ({articleLink, title, date, content}) => {
  // TODO: Fix babel config to support template literal strings
  const getSnippet = content => content.slice(0,180) + '...';
  return (
    <BaseArticle
      titleRouteLink={articleLink}
      title={title}
      date={date}
      content={getSnippet(content)}
    >
      <CustomReactMarkdown />
      <Link className={styles.link} to={articleLink}>Read more</Link>
    </BaseArticle>
  );
};

const styles = {
  link: 'f6 link dim dark-gray',
}

ArticleExcerpt.propTypes = {
  titleRouteLink: React.PropTypes.string,
  title: React.PropTypes.string,
  date: React.PropTypes.any,
  content: React.PropTypes.string,
};

export default ArticleExcerpt;
