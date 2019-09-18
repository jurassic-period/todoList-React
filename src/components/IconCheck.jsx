import React from "react";

class IconCheck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <i
        onClick={this.props.iconCheck_Change}
        className={
          "fa fa-check " + (this.props.isCheck ? "iVisible" : "iInvisible")
        }
      ></i>
    );
  }
}

export default IconCheck;
