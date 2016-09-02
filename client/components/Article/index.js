import React from 'react';

// temporarily, for visualising only
const Article = props => (
  <div>
    Article Title: {props.title}
    Article Content: {props.content}
  </div>
);

Article.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string,
};

export default Article;
