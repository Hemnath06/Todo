import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <span>{this.props.value}</span>
        <button
          onClick={() => {
            this.props.update(this.props.id, this.props.value, this.props.edit);
          }}
          style={{ marginLeft: "10px" }}
        >
          Update
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.id);
          }}
          style={{ marginLeft: "10px" }}
        >
          Delete
        </button>
      </div>
    );
  }
}