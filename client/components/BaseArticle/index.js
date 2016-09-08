import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';

import * as util from '../../util';

// make bgColor optional??
const BaseArticle = ({titleRouteLink, title, date, bgColor, children}) => {
  bgColor = bgColor ? bgColor : '';
  const renderTitle = () =>
    titleRouteLink ? <Link className={styles.link} to={titleRouteLink}>{title}</Link> : title;
    // NOTE: Test what happens if bgColor is NOT passed, with this op?
    // preference for template lit strings???? need to activate this!
  return (
    <article className={[styles.article, bgColor].join(' ').trim()}>
      <header className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>{renderTitle()}</h1>
        <time className={styles.headerDate}>{util.convertDateToString(date)}</time>
      </header>
      {children}
    </article>
  );
};

const styles = {
  article: 'cf ph3 ph5-ns pv5',
  headerContainer: 'fn fl-ns w-50-ns pr4-ns',
  headerTitle: 'mb3 mt0 lh-title',
  headerDate: 'f6 ttu tracked gray',
  link: 'link dim dark-gray',
};


BaseArticle.propTypes = {
  // Add BG COLOR??/
  titleRouteLink: React.PropTypes.oneOfType([
    // TODO: Fix to accept either non-render type (null?) or string render
    React.PropTypes.any,
  ]),
  title: React.PropTypes.string,
  date: React.PropTypes.any,
  children: React.PropTypes.node,
  bgColor: React.PropTypes.string, // not reqd.
};

export default BaseArticle;
