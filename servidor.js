const http = require("http");
const chalk = require("chalk");

const hostname = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  const response = {
    nombre: "Julian David Ruiz Morales",
    mensaje: "Hola soy el servidor!",
  };

  res.end(JSON.stringify(response));
});

server.listen(port, hostname, () => {
  console.log(
    chalk.green(`El servidor está corriendo en http://${hostname}:${port}/`)
  );
});
