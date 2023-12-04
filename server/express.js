const express = require('express');
const routes = require('./routes/route.js');
const connectDB = require('./database/mongoose.js');
connectDB();
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(routes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=>{
    console.log(`Server Now Running on ${PORT}`);
});
