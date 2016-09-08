import React from 'react';
import { Link } from 'react-router';

import * as util from '../../util';
import BaseArticle from '../BaseArticle';
import CustomReactMarkdown from '../CustomReactMarkdown';
import withBackgroundColour from '../HOCs/withBackgroundColour';

const ArticleExcerpt = ({articleLink, title, date, content}) => {
  // TODO: Fix babel config to support template literal strings
  // TODO: Fix getSnippet, naive string splicer may split markdown
  const getSnippet = content => content.slice(0,200) + '...';
  return (
      <BaseArticle
        titleRouteLink={articleLink}
        title={title}
        date={date}
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

export default withBackgroundColour(ArticleExcerpt);
