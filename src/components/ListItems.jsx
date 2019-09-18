import React from "react";
import ListItem from "./ListItem";

class ListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.edit_Change = this.edit_Change.bind(this);
    this.iconCheck_Change = this.iconCheck_Change.bind(this);
    this.iconCloseClick = this.iconCloseClick.bind(this);
  }

  edit_Change(id, mean) {
    this.props.edit_Change(id, mean);
  }
  iconCheck_Change(id) {
    this.props.iconCheck_Change(id);
  }
  iconCloseClick(id) {
    this.props.iconCloseClick(id);
  }

  render() {
    return (
      <ul
        className={
          this.props.forUlClass.length > 0 ? "ul visible" : "ul unvisible"
        }
      >
        {this.props.arrForRender.map(el => (
          <li key={el.id}>
            <ListItem
              newItem={el}
              edit_Change={this.edit_Change}
              putMean={this.changeMean}
              iconCheck_Change={this.iconCheck_Change}
              iconCloseClick={this.iconCloseClick}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default ListItems;
