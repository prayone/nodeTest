const koa = require('koa')
const fs = require('fs')
const app = new koa()

function render(page) {
  return new Promise((resolve,reject) =>{
    
  })

}

app.use((ctx) => {
  ctx.body = ctx.request.url
})




app.listen(3000)