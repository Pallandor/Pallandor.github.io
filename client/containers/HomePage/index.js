import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleList from '../../components/ArticleList';
import Loading from '../../components/Loading';
import { getArticles } from '../../reducers/articles';
import { getArticlesLoadingState } from '../../reducers/ui/articles';
import { fetchArticles } from '../../actions/articles';

const mapStoreToProps = store => ({
  articles: getArticles(store),
  isLoadingArticles: getArticlesLoadingState(store),
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles()),
});

class HomePage extends Component {
  constructor(){
    super();
    this._renderHomePage = this._renderHomePage.bind(this);
  }

  componentWillMount(){
    this.props.fetchArticles();
  }

  _renderHomePage() {
    return (
      <div>
        <ArticleList articles={this.props.articles} />
      </div>
    );
  }

  render() {
    return this.props.isLoadingArticles ? <Loading /> : this._renderHomePage();
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(HomePage);
