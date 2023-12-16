const express = require('express');

const app = express();
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/status', (req, res) => {
    res.send({ status: 'OK' });
});