import React from "react";
import IconX from "./IconClose";
import IconCheck from "./IconCheck";
import IconEditSave from "./ChangeAndSaveIcons";

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mean: this.props.newItem.mean,
      id: this.props.newItem.id
    };

    this.edit_Change = this.edit_Change.bind(this);
    this.onChangeMean = this.onChangeMean.bind(this);
    this.iconCheck_Change = this.iconCheck_Change.bind(this);
    this.iconCloseClick = this.iconCloseClick.bind(this);
  }

  edit_Change() {
    this.props.edit_Change(this.state.id, this.state.mean);
  }

  onChangeMean(e) {
    const mean = e.target.value;
    this.setState({
      mean: mean
    });
  }
  iconCheck_Change() {
    this.props.iconCheck_Change(this.state.id);
  }
  iconCloseClick() {
    this.props.iconCloseClick(this.state.id);
  }

  render() {
    return (
      <div>
        <IconCheck
          check={this.props.newItem.id}
          isCheck={this.props.newItem.check}
          iconCheck_Change={this.iconCheck_Change}
        />
        {this.props.newItem.edit ? (
          <input
            autoFocus
            className="changingInput"
            value={this.state.mean}
            onChange={this.onChangeMean}
          ></input>
        ) : (
          <span className={this.props.newItem.check ? "line-through" : ""}>
            {this.props.newItem.mean}
          </span>
        )}
        <IconEditSave
          edit_Change={this.edit_Change}
          isEdit={this.props.newItem.edit}
        />
        <IconX iconCloseClick={this.iconCloseClick}/>
      </div>
    );
  }
}

export default ListItem;
