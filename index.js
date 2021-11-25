const express=require("express")
const app=express();
const port = process.env.PORT || 3000;
var rootRouter = require('./src/routes');

// app.get('/', (req, res) => {
//     res.send('<h2>WELCOME - AWS-NODE-CURD App </h2><h3>CI-CD</h3><h4>THANKS GIVING 6:40AM</h4>')
// });

app.use('/', rootRouter);


app.listen(port, () => {
    console.log(`YEYY!!! LEAF-NODE App is UP and LISTENING to port : ${port}`);
});