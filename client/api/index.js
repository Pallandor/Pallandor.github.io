import { v4 } from 'node-uuid';

// in-memory implementation of AJAX calls to mongo store for articles
const fakeDatabase = {
  articles: [{
    id: v4(),
    title: 'The Perks of Being a Wallflower',
    date: new Date('09-01-2016'),
    content: 'It was a long summer day, and little did we know that...',
  }, {
    id: v4(),
    title: 'The Dark Knight',
    date: new Date('09-02-2016'),
    content: 'Who would have thought that something like this could happen?',
  }, {
    id: v4(),
    title: 'Sir Gaben Rises',
    date: new Date('09-03-2016'),
    content: 'Dondo and Miracle, otherwise known as Merkel, made decisive blows against Sufail...',
  }],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchArticles = () =>
  delay(1000).then(() => {
    return fakeDatabase.articles;
  });

// add articles
// delete articles
