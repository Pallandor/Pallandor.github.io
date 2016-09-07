import React from 'react';

import ArticleExcerpt from '../ArticleExcerpt';

// TODO: generate titleRouteLink dynamically for client side routing
const ArticleList = props => {
  const renderArticleExcerpts = articlesArr => articlesArr.map((article, ind) => (
    <ArticleExcerpt
      key={ind}
      articleLink={'about'}
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
