const express = require('express');
require('dotenv').config();
const cron = require('node-cron');

const userRoutes = require('./routes/userRoutes');
const { WriteCustomFile } = require('./Utils/Utils');

// Creating a cron job which runs on every 10 second
// cron.schedule("*/1 * * * * *", function() {
//   WriteCustomFile('files/newFile',"-----------------25 DEC 2024-----------------------");
// })

WriteCustomFile('files/newFile',"-----------------25 DEC 2024-----------------------",'node_modules');


const app = express();
const PORT = process.env.PORT || 3000;
console.log(PORT)

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

app.get('/helloUser',(req,res)=>{
  res.send({name:'This is Paras!!!'});
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});