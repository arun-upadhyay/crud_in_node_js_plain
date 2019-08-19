/**
 * Run your application as (to support export, by default node does not support es6 import)
 * node -r esm db_insert.js
 * https://timonweb.com/tutorials/how-to-enable-ecmascript-6-imports-in-nodejs/
 */
import {dbConnection} from "../conn/connection";

var conn = new dbConnection("localhost", "root", "");
console.log(conn.createConnection());