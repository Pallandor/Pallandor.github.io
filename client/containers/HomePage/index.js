import React from 'react';

// will inject store later
import ArticleList from '../../components/ArticleList';

const fakeArticles = [
  { title: 'Bringer of Doom v2', content: 'It was a long summer day that day, they said...' },
  { title: 'Harbringer of Life v2', content: 'Something about the whole thing just didn\'t smell right...' },
];

const HomePage = () => (
  <div>
    freaking homepage ya. 
    Articles Below: (was this on a new line? see..)
    <ArticleList articles={fakeArticles} />
  </div>
);

// grab articles via API from node server/mongo implementation
// feed to ArticleList

export default HomePage;
