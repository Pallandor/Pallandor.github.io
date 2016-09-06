import React from 'react';
import ReactMarkdown from 'react-markdown';

import * as util from '../../util';


const testMd = `
  \`\`\`js
  function(){
    return 123;
  };
  console.log('blah!!');
  \`\`\`
`;

const Article = ({title, date, content}) => (
  <article className={styles.article}>
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <time className={styles.headerDate}>{util.convertDateToString(date)}</time>
    </header>
    <div className={styles.bodyContainer}>
      <p className={styles.paragraph}>{content}</p>
          <ReactMarkdown source={testMd}/>
    </div>
  </article>
);

const styles = {
  article: 'cf ph3 ph5-ns pv5',
  headerContainer: 'fn fl-ns w-50-ns pr4-ns',
  headerTitle: 'mb3 mt0 lh-title',
  headerDate: 'f6 ttu tracked gray',
  bodyContainer: 'fn fl-ns w-50-ns',
  paragraph: 'lh-copy measure mt4 mt0-ns',
  lastParagraph: 'lh-copy measure',
};

Article.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string,
};

export default Article;
