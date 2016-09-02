import React, { Component } from 'react';

import ArticleList from '../../components/ArticleList';
import Loading from '../../components/Loading';

// query mongo store via API call for articles
const fakeArticles = [
  { title: 'Bringer of Doom v4', content: 'It was a long summer day that day, they said...' },
  { title: 'Harbringer of Life v4', content: 'Something about the whole thing just didn\'t smell right...' },
];

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
