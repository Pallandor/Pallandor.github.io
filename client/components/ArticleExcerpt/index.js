import React from 'react';
import { Link } from 'react-router';

import * as util from '../../util';
import BaseArticle from '../BaseArticle';
import CustomReactMarkdown from '../CustomReactMarkdown';

// CustomReactMarkdown gets injected with content props
const ArticleExcerpt = ({index, articleLink, title, date, content}) => {
  // TODO: Fix babel config to support template literal strings
  // TODO: Fix getSnippet, naive string splicer may split markdown
  const getSnippet = content => content.slice(0,200) + '...';
  const bgColor = util.setBgColourByNumber(index);
  return (
      <BaseArticle
        titleRouteLink={articleLink}
        title={title}
        date={date}
        bgColor={bgColor}
      >
        <div className={styles.bodyContainer}>
          <CustomReactMarkdown
            content={getSnippet(content)}
          />
          <Link className={styles.link} to={articleLink}>Read more</Link>
        </div>
      </BaseArticle>
  );
};

const styles = {
  link: 'f6 link dim dark-gray',
  bodyContainer: 'fn fl-ns w-50-ns',
}

ArticleExcerpt.propTypes = {
  titleRouteLink: React.PropTypes.string,
  title: React.PropTypes.string,
  date: React.PropTypes.any,
  content: React.PropTypes.string,
};

export default ArticleExcerpt;
