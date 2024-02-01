const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hellow World");
});

const PORT = 3000;
app.listen (PORT, () => {
    console.log(`Server is running on at http://localhost:${PORT}`);    
});