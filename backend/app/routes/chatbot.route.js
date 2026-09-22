import express from 'express';
import { Message } from '../controller/chatbot.msg.js';

const  chatRouter =express.Router();

chatRouter.post("/message",Message)

export default chatRouter;
