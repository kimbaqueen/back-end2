// express & cors setup

const express = require('express');
const cors = require('cors');
// controller setup
const controller = require('./controller');

const app = express();

// json setup 
app.use(express.json());
app.use(cors());

app.get(`/api/houses`, controller.getHouses);
app.post(`/api/houses`, controller.createHouse);
app.put(`/api/houses:id`, controller.updateHouse);
app.delete(`/api/houses:id`, controller.deleteHouse);

// app.listen setup
const PORT = 3030;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

