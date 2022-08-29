import { EditableCell, EditableRow } from "./table";
import { Table, Row, Col, Button, Form, Select } from "antd";
import React, { Component, createContext, useContext, useState } from "react";
const EditableContext = React.createContext(null);

let { dataSource, ...globalConfig } = require("./config");

const hook = (handler) => {
  switch (handler) {
    case "dataSource":
      console.log("hook: dataSource");

      break;

    default:
      console.log("hook: ", handler);

      break;
  }
};

let columns = [
  {
    key: "id",
    dataIndex: "id",
    title: "id",
    editable: true
  },
  {
    key: "username",
    dataIndex: "username",
    title: "user",
    editable: true
  },
  {
    key: "role",
    dataIndex: "role",
    title: "Role",
    editable: true,
    render: (_, record) => (
      <Select id={record.key} options={["User", "Admin"]}></Select>
    )
  }
];

class EditableTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns,
      dataSource: [{ id: 1, username: "User" }, { id: 2 }],
      count: 0
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key)
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;

    const newData = {
      id: count
    };

    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1
    });
  };

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData
    });
  };

  render() {
    const { dataSource } = this.state;

    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell
      }
    };

    const isDataSource =
      this.state.dataSource.length >= 1 ? hook(this.state.dataSource) : null;

    const columns = this.state.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });

    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16
          }}
        >
          Добавить
        </Button>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

module.exports = {
  EditableTable
};
