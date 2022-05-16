//const express = require('express')
import express from 'express';
//const config = require('config')
import config from 'config';
//const mongoose = require('mongoose')
import mongoose from 'mongoose';

const app = express()

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get('port') || 5000


async function start() {
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log('App has been started on port 5000...'))
    } catch(e) {
        console.log('Server Error', e.message),
        process.exit(code, 1)
    }
}

start()


