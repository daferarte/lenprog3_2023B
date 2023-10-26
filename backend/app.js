const express = require('express');
const app = express();
const port = 3000;

let calculadora=()=>{
    return 2+2;
}

app.get('/', (req, res) => {
  res.send(`Hola estudiantes de quinto ${calculadora()}`);
})

app.listen(port, () => {
  console.log(`aplicacion funcionando en el puerto ${port}`);
})