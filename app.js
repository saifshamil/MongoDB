// npx nodemon app.js or npm run dev

const http = require("http")

const {MongoClient} = require("mongodb")

const fs = require("fs");


let collection;
const qs = require('querystring')

const client = new MongoClient('mongodb://localhost:27017/')

const connect = async()=>{
    await client.connect()
    console.log("Mongodb Connected Successfully...")
    const db = client.db('college')
    collection = db.collection('students')
}

connect()

const server = http.createServer((req,res)=>{
    if(req.url =='/' && req.method == 'GET') {
        res.end(fs.readFileSync('form.html','utf-8'))
    }
    else if(req.url == '/register' && req.method == 'POST') {
        let body = '' 
        req.on('data',d=>body+=d)
        req.on('end',async()=>{
         const data = qs.parse(body)
         await collection.insertOne({
            name:data.name,
            email:data.email,
            phone:data.phone
         })
         res.end('Data Saved successfully')
        })
    }
})

server.listen(3000,()=>{
    console.log('server is running...')
})