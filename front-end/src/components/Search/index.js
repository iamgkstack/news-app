import React, { Component } from 'react';

import './index.css';
class Search extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      value,
      onChange,
      onSubmit,
      children
    } = this.props;

    return (
      <div className="form">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={value}
            onChange={onChange}
            ref={el => this.input = el}
          />
          <button type="submit">
            {children}
          </button>
        </form>
      </div>
    );
  }
}

export default Search;