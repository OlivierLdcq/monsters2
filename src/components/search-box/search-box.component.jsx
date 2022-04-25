import React, { Component } from "react";
import "./search-box.styles.css";
class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={this.props.className}
          type="search"
          placeholder={this.props.placeholder}
          onChange={(e) => {
            this.props.onChangeHanlder(e);
          }}
        />
      </div>
    );
  }
}
export default SearchBox;
