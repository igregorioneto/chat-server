import express from "express";
import proxy from "express-http-proxy";
import config from "./config/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const auth          = proxy(config.AUTH_URL as string);
const messages      = proxy(config.MESSAGE_URL as string);
const notifications = proxy(config.NOTIFICATION_URL as string);

app.use("/api/auth", auth);
app.use("/api/messages", messages);
app.use("/api/notifications", notifications);

const server = app.listen(config.PORT, () => {
    console.log("Gateway is Listening to Port 8080");
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.info("Server closed");
            process.exit(1);
        })
    } else {
        process.exit(1);
    }
}

const unexpectedErrorHandler = (error: unknown) => {
    console.error(error);
    exitHandler();
}

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);