import React, { Component } from 'react';

class Search extends Component {
  state={
    query: ''
  }

  setQuery = (query) => {
    this.setState({
      query: query
    })
    this.props.query(query);
  }
  render(){

    let {query} = this.state
    return <form onSubmit={this.submitQuery}>
    <span>Search Restaurant by Name: </span>
    <input
    aria-label='Search Filter'
    type='text'
    value={query}
    onChange={e => {this.setQuery(e.target.value)}}><
    /input>
    </form>
  }
}

export default Search;
