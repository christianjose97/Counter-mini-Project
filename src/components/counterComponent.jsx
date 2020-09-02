import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0, tags: [] };

  renderTags() {
    if (this.state.tags.length === 0) return <p>there are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    //div wraps it into one so Babel can read it!
    //class styuff is from bootstrap library
    return <div>{this.renderTags()}</div>;
    //map used to render the list of items!
  }
}

export default Counter;
