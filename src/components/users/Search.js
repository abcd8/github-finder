import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };
  onSubmit(e) {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light')
    } else {
      this.props.searchUser(this.state.text);
      this.setState({ text: "" });
    }
  }

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { showClear, clearUser } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUser}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;