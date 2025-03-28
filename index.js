import express from 'express'
import usersRouter from './Router/users.js';

const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Homepage'); 
})

app.listen(PORT, ()=>{
    console.log(`Server is running in this port ${PORT}`);
});