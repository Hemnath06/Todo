import React, { Component } from "react";
import List from "./List";

export default class Todo extends Component {
  state = {
    value: [],
    edit: true,
    id: 0
  };

  add = () => {
    if (this.state.edit === true) {
      let a = document.getElementById("data").value;
      let c = this.state.value.push(a);
      this.setState({ c });
    } else {
      let s = document.getElementById("data").value;
      let d = this.state.value.map((a) => {
        if (this.state.value.indexOf(a) === this.state.id) {
          a = s;
        }
        return a;
      });
      this.setState({ value: d, edit: true });
      document.getElementById("data").value = "";
    }
  };

  delete = (a) => {
    let v = this.state.value;
    let s = v.filter((data) => {
      return v.indexOf(data) !== a;
    });
    this.setState({ value: s });
  };

  update = (id, data, edit) => {
    let e = false;
    this.setState({
      edit: e,
      id: id
    });
  };

  display = () => {
    if (this.state.edit === true) {
      return this.state.value.map((a) => (
        <List
          key={this.state.value.indexOf(a)}
          id={this.state.value.indexOf(a)}
          onDelete={this.delete}
          update={this.update}
          value={a}
          edit={this.state.edit}
        />
      ));
    } else {
      console.log(this.state.edit);
      console.log("edit started bro");
      document.getElementById("data").value = this.state.value[this.state.id];
      return this.state.value.map((a) => (
        <List
          key={this.state.value.indexOf(a)}
          id={this.state.value.indexOf(a)}
          onDelete={this.delete}
          update={this.update}
          value={a}
          edit={this.state.edit}
        />
      ));
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Todo</h1>
        <input type="text" id="data" />
        <button onClick={this.add}>Add</button>
        {this.display()}
      </div>
    );
  }
}