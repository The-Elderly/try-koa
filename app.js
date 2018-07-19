const Koa = require("koa");
// const mongoose = require("mongoose")
const routes = require('./routes/index');

const app = new Koa();



app.use(routes)


app.listen('2333');

// mongoose.connect('mongodb://dddreee:12345678@localhost:27017/test', { useNewUrlParser: true }).catch(err => {
//     console.log(err)
// })