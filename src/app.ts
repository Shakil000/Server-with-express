//const express = require('express')
import express, { Application, Request, Response } from 'express';
const app : Application = express()

app.get('/', (req: Request, res: Response) => {
  // console.log({req, res})
  res.send('I am learning express js and I also want to learn node and other')
})


export default app;