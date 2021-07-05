const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
  })

app.get('/', (req,res)=>{
    res.send('hello world');
})