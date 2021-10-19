const mysql = require('mysql');

class DataBase {

    constructor(host, port, user, password, database) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.database = database;

        this.connection = mysql.createConnection({
                host     : this.host,
                port     : this.port,
                user     : this.user,
                password : this.password,
                database : this.database,
            });
    }

    testConnection() {
          this.connection.connect();

          this.connection.query('SELECT "DB connected" FROM User', function (error, results, fields) {
            if (error) console.log(error);
            console.log('The solution is: ', results[0]);
          });

          this.connection.end();
    }

    getDevices(cb) {
        this.connection.connect();

        const query = 'SELECT * FROM Device';
        this.connection.query(query, (error, results, fields) => {
            if (error) console.log(error);
            cb(results);
        });
        this.connection.end();
    }

}

module.exports = DataBase;