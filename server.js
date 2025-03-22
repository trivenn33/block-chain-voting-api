require('dotenv').config(); // ✅ Make sure this is first
const express = require('express');
const app = express();
const registerRoute = require('./routes/register');
const cors = require('cors');

app.use(express.json());
app.use('/api/register', registerRoute);
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
