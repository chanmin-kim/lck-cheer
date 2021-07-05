const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
const authRouter = require("./routers/auth");
const cheerRouter = require("./routers/cheer");

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
  })

app.get('/', (req,res)=>{
    res.render('index.ejs');
})

app.get('/register', (req,res)=>{
    res.render('register.ejs');
})

app.use("/api/auth",authRouter);
app.use("/api/cheer",cheerRouter);