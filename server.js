const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Carpeta pública donde estarán tus archivos HTML, CSS, JS, etc.
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
