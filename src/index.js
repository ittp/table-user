import React, { useContext, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Input, Button, Popconfirm, Form } from "antd";

import { EditableTable } from "./table/";

let onRender = (_, record) => (action = "");

ReactDOM.render(<EditableTable />, document.getElementById("container"));
