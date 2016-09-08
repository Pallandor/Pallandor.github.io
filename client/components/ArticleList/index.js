import React from 'react';

import ArticleExcerpt from '../ArticleExcerpt';

// TODO: implement infinite scrolling, currently renders whole articles dataset
const ArticleList = ({articles}) => {
  const renderArticleExcerpts = articlesArr => articlesArr.map(article => (
    <ArticleExcerpt
      key={article.id}
      articleLink={'articles/' + article.id}
      title={article.title}
      date={article.date}
      content={article.content}
      bgColour={article.bgColour}
    />
  ));

  return (
    <div>
      {renderArticleExcerpts(articles)}
    </div>
  );
};

ArticleList.propTypes = {
  articles: React.PropTypes.array,
};

export default ArticleList;
