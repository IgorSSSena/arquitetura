const express = require('express');
const bodyParser = require('body-parser');
const cheerleaderRoutes = require('./routes/route');



const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));
app.use('/', cheerleaderRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
