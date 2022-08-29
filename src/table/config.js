const axios = require("axios");

let globalConfig = {
  localStorage: () => {},

  actions: {
    onConfirm: ({ record: [key] }) => this.handleDelete(key),
    DeleteItem: () => {}
  },
  dataSource: [
    {
      key: "0",
      role: "user",
      username: "sip",
      fullname: "Seleznev Ivan Petrovich",
      accounts: {
        organization: {
          username: "ip.seleznev",
          domain: "gov.tp"
        }
      }
    },
    {
      key: "1",
      role: "admin",
      username: "admin",
      fullname: "System Adminitrator",
      accounts: {
        organization: {
          username: "admin",
          domain: "gov.tp"
        }
      }
    }
  ],
  propNames: () => Object.getOwnPropertyNames(globalConfig.dataSource),
  columns: [
    {
      title: "name",
      dataIndex: "name",
      width: "30%",
      editable: true
    },
    {
      title: "age",
      dataIndex: "age"
    },
    {
      title: "address",
      dataIndex: "address"
    },
    {
      title: "operation",
      dataIndex: "operation"
    }
  ]
};
module.exports = globalConfig;
