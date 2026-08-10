import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js'; 
const app = express();

app.use(cors()); 
app.use(express.json()); 
connectDB();


app.get('/', (req, res) => {
  res.send('Nex-Style Voice Commerce API is perfectly running in ES6 Mode...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

