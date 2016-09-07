import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';

import * as util from '../../util';

const BaseArticle = ({titleRouteLink, title, date, content, children}) => {
  const renderTitle = () =>
    titleRouteLink ? <Link className={styles.link} to={titleRouteLink}>{title}</Link> : title;
  const propsToInject = {
    content,
    // add aditional props here (e.g. styles), but note native DOM nodes will
    // inherit non-standard DOM attribute e.g. styles on <a> element
  }
  return (
    <article className={styles.article}>
      <header className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>{renderTitle()}</h1>
        <time className={styles.headerDate}>{util.convertDateToString(date)}</time>
      </header>
      {util.injectReactChildrenWithProps(children, {content})}
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
  link: 'link dim dark-gray',
};


BaseArticle.propTypes = {
  titleRouteLink: React.PropTypes.oneOfType([
    // TODO: Fix to accept either non-render type (null?)
    // or rendered type (string)
    React.PropTypes.any,
  ]),
  title: React.PropTypes.string,
  date: React.PropTypes.any,
  content: React.PropTypes.string,
  children: React.PropTypes.node,
};

export default BaseArticle;
