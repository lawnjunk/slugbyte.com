'use strict'

const app = require('express')()
app.use(require('morgan')('common'))
app.all('*', (req, res) => {
  res.redirect('http://www.slugbyte.com')
})
app.listen(80, () =>  console.log('server up :: 80'))
