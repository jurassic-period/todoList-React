import React from "react";

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mean : ''
    };

    this.meaning = this.meaning.bind(this);
    this.toCheckEnterAndSendMeanTodo = this.toCheckEnterAndSendMeanTodo.bind(
      this
    );
  }

  // take a value from input after onChange
  meaning(e) {
    this.setState({
      mean: e.target.value
    });
  }

  toCheckEnterAndSendMeanTodo(e) {
    // help don't use space and clean input
    if (this.state.mean.trim() === "") {
      this.setState({
        mean: ""
      });

      return;
    }
    // after click enter
    if (e.key === "Enter") {
      this.props.eventClickEnter(this.state.mean);
      this.setState({
        mean: ""
      });
    }
  }

  render() {
    return (
      <input
        onChange={this.meaning}
        onKeyDown={this.toCheckEnterAndSendMeanTodo}
        value={this.state.mean}
        placeholder="What needs to be done?"
        className="input"
      ></input>
    );
  }
}

export default FormInput;
