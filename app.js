const Koa = require("koa");
const mongoose = require("mongoose")

const app = new Koa();

app.use(async (ctx, next) => {    
    ctx.body = 'Hello World!'
});

app.listen('2333');

mongoose.connect('mongodb://dddreee:12345678@localhost:27017/test', { useNewUrlParser: true }).catch(err => {
    console.log(err)
})