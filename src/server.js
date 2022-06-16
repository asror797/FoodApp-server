const express = require('express')
const app = express()
const cors = require('cors')

const router = require('./modules')

app.use(cors())
app.use(express.json())
app.use(router)





app.listen(9000,()=>{
   console.log('Server is ready at 9000 PORT');
})