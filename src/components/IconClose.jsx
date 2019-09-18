import React from "react";

class IconX extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <i onClick={this.props.iconCloseClick} className="fa fa-times"></i>
    );
  }
}

export default IconX;
