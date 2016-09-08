import React from 'react';

import ArticleExcerpt from '../ArticleExcerpt';


// NOTE: If im using article.id to pass down, and its a UUID, then how is it preserving order?????
// doesnt need a numeric?
// TODO: add support for template literal strings for interpolation
// TODO: implement infinite scrolling! Currently renders whole articles set
const ArticleList = props => {
  const renderArticleExcerpts = articlesArr => articlesArr.map((article, ind) => (
    <ArticleExcerpt
      key={article.id}
      index={ind}
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
