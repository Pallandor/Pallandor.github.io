import React from 'react';

import ArticleExcerpt from '../ArticleExcerpt';

// TODO: generate titleRouteLink dynamically for client side routing
// TODO: add support for template literal strings for interpolation
const ArticleList = props => {
  const renderArticleExcerpts = articlesArr => articlesArr.map((article) => (
    <ArticleExcerpt
      key={article.id}
      articleLink={'articles/' + article.id}
      title={article.title}
      date={article.date}
      content={article.content}
    />
  ));

  return (
    <div>
      {renderArticleExcerpts(props.articles)}
    </div>
  );
};

ArticleList.propTypes = {
  articles: React.PropTypes.array,
};

export default ArticleList;
