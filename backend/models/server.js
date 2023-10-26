const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = 3000;
        this.path = '/users';
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.path,require('../routes/users.routes'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`aplicación funcionando en el puerto ${this.port}`);
        });
    }
}

module.exports=Server;