import React, { Component } from 'react';
import { connect } from 'redux';

import ArticleList from '../../components/ArticleList';
import Loading from '../../components/Loading';
import { getArticles } from '../../reducers/articles';
import { fetchArticles } from '../'

const mapStoreToProps = store => ({
  articles: getArticles(store),
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch()
});

class HomePage extends Component {
  // natively manage component 'loading/fetch' state
  constructor() {
    super();
    this.state = {
      loading: true,
    };
    this._renderHomePage = this._renderHomePage.bind(this);
    this._updateLoadingState = this._updateLoadingState.bind(this);
  }

  componentDidMount() {
    // mock API call event here
    window.setTimeout(() => {
      this._updateLoadingState();
    }, 3000)
  }

  _updateLoadingState(){
    this.setState({
      loading: !this.state.loading,
    })
  }

  _renderHomePage() {
    return (
      <div>
        Welcome to Homepage! Articles Below!
        <ArticleList articles={fakeArticles} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.loading ? <Loading /> : this._renderHomePage()}
      </div>
    );
  }
};

export default HomePage;
