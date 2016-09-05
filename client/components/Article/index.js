import React from 'react';
import * as util from '../../util';

// temporarily, for visualising only
const Article = ({title, date, content}) => (
  <div>
    <div>Title: {title}</div>
    <div>Date: {util.convertDateToString(date)}</div>
    <div>Content: {content}</div>
  </div>
);

Article.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string,
};

export default Article;
