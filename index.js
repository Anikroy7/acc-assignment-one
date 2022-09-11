const express = require('express');
const userRouter = require('./userRoutes/user.routes');
const app = express()
const port = 5000;

app.use(express.json())

app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send('welcome to random user api')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
