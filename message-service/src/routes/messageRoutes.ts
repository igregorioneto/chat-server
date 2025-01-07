import { Router } from "express";
import { authMiddleware } from "../middleware";
import MessageController from "../controllers/MessageController";

const messageRoutes = Router();

// @ts-ignore
messageRoutes.post("/send", authMiddleware, MessageController.send);
messageRoutes.get(
    "/get/:receiverId",
    // @ts-ignore
    authMiddleware,
    MessageController.getConversation
);

export default messageRoutes;