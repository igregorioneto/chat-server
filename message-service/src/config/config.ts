import { config } from "dotenv";

const configFile = `./env`;
config({ path: configFile });

const {
    NODE_ENV,
    PORT,
    JWT_SECRET,
    MONGO_URI,
    MESSAGE_BROKER_URL
} = process.env;

const queue = { notifications: "NOTIFICATIONS" };

export default {
    MONGO_URI,
    PORT,
    JWT_SECRET,
    env: NODE_ENV,
    msgBrokerURL: MESSAGE_BROKER_URL,
    queue,
};