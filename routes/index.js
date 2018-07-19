const Router = require('koa-router');
const createCode = require('../draw');


const router = new Router({
	prefix: '/api'
});

router.get('/verify', async (ctx, next) => {
    let o = createCode(6);
    console.log(o.captcha)
    ctx.body = `<img src="${o.data}" />`
    await next()
})

module.exports = router.routes()