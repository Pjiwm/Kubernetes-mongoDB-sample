const mongoose = require('mongoose')
const express = require('express')

const app = express()

mongoose.Promise = global.Promise
const connectionString = process.env.DATABASE_CONNECTION
mongoose.connect(`${connectionString}`).catch((err) => {
    console.log(err)
})

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().catch((err) => console.log(err))

// DATABASE_CONNECTION=mongodb://admin:admin@172.27.192.1:27017/admin?directConnection=true&serverSelectionTimeoutMS=2000
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
})