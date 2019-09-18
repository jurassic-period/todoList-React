import React from "react";

class IconEditSave extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <i
        onClick={this.props.edit_Change}
        className={(this.props.isEdit ? "fa fa-save" : "fa fa-pen") + " edit"}
      ></i>
    );
  }
}

export default IconEditSave;
