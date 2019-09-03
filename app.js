/**
 * @author Shan Lu
 * @date 2019-09-03 18:17
 * Created by shanlu
 */
const Koa=require('koa')
const app=new Koa()


app.use(async(ctx,next)=>{
    ctx.body='hello koa'
})

app.listen(3000);