// require('conn/connection.js');
// import {dbConnection} from "../conn/connection";
// var connection = new dbConnection('localhost', 'root');
// console.log(connection);
// console.log(connection.createConnection());

import {dbConnection} from "../conn/connection";

var connection = new dbConnection("localhost", "root", "");
console.log(connection);