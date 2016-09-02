import React from 'react';

import Article from '../Article';

const ArticleList = props => {
  const renderArticles = articlesArr => articlesArr.map((article, ind) => (
    <Article
      key={ind}
      title={article.title}
      content={article.content}
    />
  ));

  return (
    <div>
      {renderArticles(props.articles)}
    </div>
  );
};

ArticleList.propTypes = {
  articles: React.PropTypes.array,
};

export default ArticleList;
