import React from 'react';

import * as util from '../../util';

// temporarily, for visualising only
const Article = ({title, date, content}) => (

  <article className={styles.article}>
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <time className={styles.headerDate}>{util.convertDateToString(date)}</time>
    </header>
    <div className={styles.bodyContainer}>
      <p className={styles.paragraph}>{content}</p> // see if needs another p?
    </div>
  </article>
);

const styles = {
  article: 'cf ph3 ph5-ns pv5',
  headerContainer: 'fn fl-ns w-50-ns pr4-ns',
  headerTitle: 'mb3 mt0 lh-title',
  headerDate: 'f6 ttu tracked gray',
  bodyContainer: 'fn fl-ns w-50-ns',
  paragraph: 'lh-copy measure mt4 mt0-ns',
  lastParagraph: 'lh-copy measure',
};

Article.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.string,
};

/*
<article class="cf ph3 ph5-ns pv5">
  <header class="fn fl-ns w-50-ns pr4-ns">
    <h1 class="mb3 mt0 lh-title">Clay in a Potter's Hand</h1>
    <time class="f6 ttu tracked gray">Jan Tschichold</time>
  </header>
  <div class="fn fl-ns w-50-ns">
    <p class="lh-copy measure mt4 mt0-ns">
      PERFECT typography is more a science than an art. Mastery of the trade is
      indispensable, but it isn't everything. Unerring taste, the hallmark of
      perfection, rests also upon a clear understanding of the laws of harmonious
      design. As a rule, impeccable taste springs partly from inborn sensitivity:
      from feeling. But feelings remain rather unproductive unless they can inspire a
      secure judgment. Feelings have to mature into knowledge about the consequences
      of formal decisions. For this reason, there are no born masters of typography,
      but self- education may lead in time to mastery.
    </p>
    <p class="lh-copy measure">
      It is wrong to say that there is no arguing about taste when it is good taste
      that is in question. We are not born with good taste, nor do we come into this
      world equipped with a real understanding of art. Merely to recognize who or
      what is represented in a picture has little to do with a real under- standing
      of art. Neither has an uninformed opinion about the proportions of Roman
      letters. In any case, arguing is senseless. He who wants to convince has to
      do a better job than others.
    </p>
  </div>
</article>
*/

export default Article;
