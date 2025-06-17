//const express = require('express')
import express, { Application, Request, Response } from 'express';
import fs from "fs";
import path from 'path';
const app : Application = express();

app.use(express.json());

const filePath = path.join(__dirname,"../db/todo.json");

app.get('/', (req: Request, res: Response) => {
  // console.log({req, res})
  res.send('I am learning express js and I also want to learn node and others because I love to do code with node and express')
})
app.get('/todos', (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath,{encoding: "utf-8"})
  console.log(data);
  res.json(data);
})
app.post('/todos/create-todo', (req: Request, res: Response) => {
  const {title, body} = req.body;
  console.log(title, body);
  res.send('third one');
})


export default app;