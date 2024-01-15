/*const express = require('express');
const path = require('path');
const app = express();
const puerto = 3000;

// Establecer la carpeta 'public' como carpeta de contenido estático
app.use(express.static(path.join(__dirname, 'public')));
// Establecer la carpeta 'views' como carpeta de contenido estático
app.use(express.static(path.join(__dirname, '..', 'views')));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});*/





const express = require('express');
const path = require('path');
const app = express();
const puerto = 3000;

// Establecer la carpeta 'public' como carpeta de contenido estático
app.use(express.static(path.join(__dirname, 'public')));

// Establecer la carpeta 'views' como carpeta de contenido estático
app.use(express.static(path.join(__dirname,'..', 'views')));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
