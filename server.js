const http = require('http');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  // Ejecutar el archivo "archivo.js"
  exec('node index.js', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error al ejecutar el archivo: ${err}`);
      res.statusCode = 500;
      res.end(`Error al ejecutar el archivo: ${err}`);
      return;
    }

    console.log(`Salida del archivo: ${stdout}`);
    res.statusCode = 200;
    res.end(`<pre>${stdout}</pre>`);
  });
});

const port = 3306;
server.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});