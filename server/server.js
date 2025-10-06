require('dotenv').config();
const dbConnection = require('./config/db');
const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const errorHandler = require('./middleware/error.middleware');
const otpRoutes = require('./routes/otp.routes');
dbConnection();
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: process.env.CLIENT_URL,
    optionSuccessStatus: "200"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/otp', otpRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Successfully listening on PORT: ", PORT);
})