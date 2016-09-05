import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleList from '../../components/ArticleList';
import Loading from '../../components/Loading';
import { getArticles } from '../../reducers/articles';
import { fetchArticles } from '../../actions/articles';

const mapStoreToProps = store => ({
  articles: getArticles(store),
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles()),
});

// maybe abstract out the 'loading' concept to a base component (cool to try!)
  // or to redux store (as a general page concept?)
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
        <button onClick={this.props.fetchArticles}>Get Articles</button>
        <ArticleList articles={this.props.articles} />
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

export default connect(mapStoreToProps, mapDispatchToProps)(HomePage);
