const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const {ProductRouter} = require('./routes/products')
app.use(bodyParser.json())


const cors = require('cors')




app.use((err, req, res, next)=>{
    console.warn(err.stack)
    res.status(500).json({message: err.message})
})

// app.use('/products', ProductRouter)

const PORT = process.env.PORT || 4567

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

app.get('/', (req, res) => res.send('Welcome, you are about to see the cool effects of UPC.'))


