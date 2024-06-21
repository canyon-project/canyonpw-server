// import express from 'express'
// import cors from 'cors'
// import bodyParser from "body-parser";
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// const {join} = require("node:path");
const fs = require('fs')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json({ extended: true }))
// console.log(__dirname);  // 输出当前文件所在的目录
// const filePath = path.join(__dirname, 'main.js');
// 运行时确定的路径
const runtimePath = process.cwd();
app.post('/coverage/client',(req, res)=>{
    console.log('请求到了'+new Date(),path.join(runtimePath, 'public/data.json'))
    fs.writeFileSync(path.join(runtimePath, `public/${new Date().valueOf()}.json`),JSON.stringify(req.body))
    res.send({
        msg:'ok'
    })
})

app.listen(3000,()=>{
    console.log('start')
})