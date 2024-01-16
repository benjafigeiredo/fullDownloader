const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { PORT } = require('../config/config');
const UserRoutes = require('./routes/userRoute');
const UserModel = require('./models/userModel');
const AuthRoutes = require('./routes/authRoute');
const sequelize = require('../config/database');


const app = express();

// TODO this should be limited to only the frontend URL
app.use(cors()); 

app.use(express.json());

sequelize.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((error) => {
    console.log(`Error syncing database: ${error}`);
});

UserModel.initialize(sequelize);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use('/api/user', UserRoutes.router); // http://localhost:3000/api/user/getAllUsers
app.use('/api/auth', AuthRoutes.router);