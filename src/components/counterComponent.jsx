import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  //Arrow functions dont rebinded the this keyword
  //Cleaner than adding a constructor method
  handleIncrement = () => {
    //updates the current object (must be done manually); we also pass in the attribute of state we want to modify.
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    //props in java scripts shows all attributes in counter component
    // console.log("props", this.props);

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
  //Temps
  //Uses ternary operator to change colors of button class in bootstrap
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  //Shows ZERO when counter at 0 else chow whats on the counter.
  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
