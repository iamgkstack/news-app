import React, { Component } from 'react';

import Card from '../Card';
import Search from '../Search';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      searchKey: '',
      searchTerm: 'a',
      error: null
    }

    this.needsToSearchTopstories = this.needsToSearchTopstories.bind(this);
    this.setSearchTopstories = this.setSearchTopstories.bind(this);
    this.fetchSearchTopstories = this.fetchSearchTopstories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopstories(searchTerm);
  }

  setSearchTopstories(result) {
    const { articles } = result;
    const { searchKey, results } = this.state;

    const oldArticles = results && results[searchKey]
      ? results[searchKey].articles
      : [];

    const updatedArticles = [
      ...oldArticles,
      ...articles
    ];

    this.setState({
      results: {
        ...results,
        [searchKey]: { articles: updatedArticles}
      }
    });
  }

  fetchSearchTopstories(searchTerm) {
    fetch(`http://localhost:5200/api/v1/news?query=${searchTerm}`)
      .then(response => response.json())
      .then(result => 
        this.setSearchTopstories(result)
      )
      .catch(e => this.setState({ error: e }));
  }

  needsToSearchTopstories(searchTerm) {
    return !this.state.results[searchTerm];
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });

    if (this.needsToSearchTopstories(searchTerm)) {
      this.fetchSearchTopstories(searchTerm);
    }

    event.preventDefault();
  }

  render() {
    const {
      searchTerm,
      results,
      searchKey,
      error
    } = this.state;

    const list = (
      results &&
      results[searchKey] &&
      results[searchKey].articles
    ) || [];
    return (
      <div className="container">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        >
          Filter
        </Search>
        {error ? 
          <div className="interactions">
            <p>Something went wrong.</p>
          </div>:
        <div>
          <Card result={list}/>
        </div>
      }
      </div>
      
    )
  }
}

export default App;