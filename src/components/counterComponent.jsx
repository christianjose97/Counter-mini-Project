import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  //Arrow functions dont rebinded the this keyword
  //Cleaner than adding a constructor method
  handleIncrement = (product) => {
    //updates the current object (must be done manually); we also pass in the attribute of state we want to modify.
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {/*Class attributes we use bootstrap classes here */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  //Uses ternary operator to change colors of button class in bootstrap
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  //Shows ZERO when counter at 0 else chow whats on the counter.
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
