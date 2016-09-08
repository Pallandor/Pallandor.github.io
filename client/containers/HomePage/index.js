import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleList from '../../components/ArticleList';
import Loading from '../../components/Loading';
import { getArticles } from '../../reducers/articles';
import { getArticlesLoadingState } from '../../reducers/ui/articles';
import { fetchArticles } from '../../actions/articles';
import * as util from '../../util';

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
    // TODO: Create bind utility
    this._renderHomePage = this._renderHomePage.bind(this);
    this._containsRoute = this._containsRoute.bind(this);
  }

  componentWillMount(){
    this.props.fetchArticles();
  }

  _containsRoute(path, str){
    let regExpObj =  new RegExp(str,"gi");
    return regExpObj.test(path);
  }

  _renderHomePage() {
    const { children, articles, location } = this.props;
    let propsToInject = { articles };

    if (this._containsRoute(location.pathname, 'articles')){
      articles.some(article => {
        if (article.id === this.props.params.id){
          propsToInject = { ...article};
          return true;
        }
      });
    }

    return (
        <div>
          {util.injectReactChildrenWithProps(children, propsToInject)}
        </div>
      );
  }

  render() {
    return this.props.isLoadingArticles ? <Loading /> : this._renderHomePage();
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(HomePage);
