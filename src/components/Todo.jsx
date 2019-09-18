import React from "react";
import ListItems from "./ListItems";
import Footer from "./Footer";
import FormInput from "./FormInput";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsTodoArr: [],
      filter: "all"
    };

    this.toAddObjIn_itemsTodoArr = this.toAddObjIn_itemsTodoArr.bind(this);
    this.toFindIndexOfMyObj = this.toFindIndexOfMyObj.bind(this);
    this.iconCloseClick = this.iconCloseClick.bind(this);
    this.iconCheck_Change = this.iconCheck_Change.bind(this);
    this.edit_Change = this.edit_Change.bind(this);
    this.button_All = this.button_All.bind(this);
    this.button_Active = this.button_Active.bind(this);
    this.button_Completed = this.button_Completed.bind(this);
  }

  toAddObjIn_itemsTodoArr(mean) {
    const newObject = {
      id: +new Date(),
      mean: mean,
      check: false,
      edit: false
    };
    const itemsTodoArr = this.state.itemsTodoArr;

    itemsTodoArr.push(newObject);

    this.setState({
      itemsTodoArr: itemsTodoArr
    });

    // show my Todo-array
    console.log(this.state.itemsTodoArr);
  };

  toFindIndexOfMyObj(id) {
    let todoArr = this.state.itemsTodoArr;
    let indexMyObj;

    for (let i = 0; i < todoArr.length; i++) {
      if (todoArr[i].id === id) {
        indexMyObj = i;
      }
    }
    return indexMyObj;
  };

  iconCloseClick(id) {
    let indexMyObj = this.toFindIndexOfMyObj(id);
    let todoArr = this.state.itemsTodoArr;

    todoArr.splice(indexMyObj, 1).pop();

    this.setState({
      itemsTodoArr: todoArr
    });
  };

    iconCheck_Change(id) {
    let indexMyObj = this.toFindIndexOfMyObj(id);
    let todoArr = this.state.itemsTodoArr;

    if (todoArr[indexMyObj].check) {
      todoArr[indexMyObj].check = false;
    } else {
      todoArr[indexMyObj].check = true;
    }

    this.setState({
      itemsTodoArr: todoArr
    });
  };

  edit_Change(id, mean) {
    let indexMyObj = this.toFindIndexOfMyObj(id);
    let todoArr = this.state.itemsTodoArr;

    if (todoArr[indexMyObj].edit) {
      todoArr[indexMyObj].edit = false;

      todoArr[indexMyObj].mean = mean;
      this.setState({
        itemsTodoArr: todoArr
      });
    } else {
      todoArr[indexMyObj].edit = true;
    }

    this.setState({
      itemsTodoArr: todoArr
    });
  };

  button_All() {
    this.setState({
      filter: "all"
    });
  };

  button_Active() {
    this.setState({
      filter: "active"
    });
  };

  button_Completed() {
    this.setState({
      filter: "completed"
    });
  };

  render() {
    const arrFromTodoStateWithFilter = this.state.itemsTodoArr.filter(el => {
      switch (this.state.filter) {
        case "all":
          return el.check === true || el.check !== true;
        case "active":
          return el.check !== true;
        case "completed":
          return el.check === true;
      }
    });

    return (
      <div>
        <FormInput eventClickEnter={this.toAddObjIn_itemsTodoArr} />
        <ListItems
          iconCheck_Change={this.iconCheck_Change}
          arrForRender={arrFromTodoStateWithFilter}
          forUlClass={this.state.itemsTodoArr}
          iconCloseClick={this.iconCloseClick}
          edit_Change={this.edit_Change}
        />
        <Footer
          countItemForFooter={this.state.itemsTodoArr}
          active={this.button_Active}
          completed={this.button_Completed}
          all={this.button_All}
        />
      </div>
    );
  }
}

export default Todo;
