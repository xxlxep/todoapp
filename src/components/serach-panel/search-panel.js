import React, { Component } from 'react';
import './search-panel.css';
class SearchPanel extends Component {
  state = {
    term: '',
  };
  onSearchChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchchange(term);
  };
  render() {
    return (
      <input
        className="search-input"
        placeholder="type tosearch"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
export default SearchPanel;
