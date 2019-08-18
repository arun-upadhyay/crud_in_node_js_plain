var mysql = require('mysql');

export class dbConnection {
    constructor(host, usenname, password) {
        this.host = host;
        this.username = username;
        this.password = password;
    }

    createConnection() {
        var con = mysql.createConnection({
            host: this.host,
            user: this.username,
            password: this.password
        });

        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
        });
        return con;
    }
}
