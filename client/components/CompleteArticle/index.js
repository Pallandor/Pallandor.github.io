import React from 'react';
import { Link } from 'react-router';

import BaseArticle from '../BaseArticle';
import CustomReactMarkdown from '../CustomReactMarkdown';

const CompleteArticle = ({title, date, content}) => (
  <BaseArticle
    title={title}
    date={date}
  >
    <div className={styles.bodyContainer}>
      <CustomReactMarkdown
        content={content}
      />
      <Link className={styles.link} to={'/'}>Back</Link>
    </div>
  </BaseArticle>
);

const styles = {
  link: 'f6 link dim dark-gray',
  bodyContainer: 'fn fl-ns w-50-ns',
}

CompleteArticle.propTypes = {
  title: React.PropTypes.string,
  date: React.PropTypes.any,
  content: React.PropTypes.string,
};

export default CompleteArticle;
