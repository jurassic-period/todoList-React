import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.toCountAndShowItem = this.toCountAndShowItem.bind(this);
  }

  // Count ours item all and after check (bird)
  toCountAndShowItem() {
    const arrFromTodoState = this.props.countItemForFooter;
    const activeItems = arrFromTodoState.filter(el => {
      return el.check !== true;
    });
    const result = activeItems.length;
    return result;
  }

  render() {
    return (
      <div
        className={
          "footer-bar " +
          (this.props.countItemForFooter.length < 1 ? "hide" : "")
        }
      >
        <ul className="d-flex justify-content-around footer-ul">
          <li>
            <span className="todo-item">
              item left {this.toCountAndShowItem()}
            </span>
          </li>
          <li>
            <a href="#" className="all" onClick={this.props.all}>
              All
            </a>
          </li>
          <li>
            <a href="#" className="active" onClick={this.props.active}>
              Active
            </a>
          </li>
          <li>
            <a href="#" className="completed" onClick={this.props.completed}>
              Completed
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
