import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';

import * as util from '../../util';

// TODO: Add childen to props validation
const BaseArticle = ({titleRouteLink, title, date, content, children}) => {
  const renderTitle = () =>
    titleRouteLink ? <Link to={titleRouteLink}>{title}</Link> : title;
  return (
    <article className={styles.article}>
      <header className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>{renderTitle()}</h1>
        <time className={styles.headerDate}>{util.convertDateToString(date)}</time>
      </header>
      {util.injectReactChildrenWithProps(children, {content, styles})}
    </article>
  );
};

const styles = {
  article: 'cf ph3 ph5-ns pv5',
  headerContainer: 'fn fl-ns w-50-ns pr4-ns',
  headerTitle: 'mb3 mt0 lh-title',
  headerDate: 'f6 ttu tracked gray',
  bodyContainer: 'fn fl-ns w-50-ns',
  paragraph: 'lh-copy measure mt4 mt0-ns',
  lastParagraph: 'lh-copy measure',
};

BaseArticle.propTypes = {
  // titleRouteLink
  title: React.PropTypes.string,
  date: React.PropTypes.any, // double check!
  content: React.PropTypes.string,
  children: React.PropTypes.node, // will this accept multiple children?
};

export default BaseArticle;
