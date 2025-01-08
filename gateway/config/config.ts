import { config } from "dotenv";

const configFile = `./env`;
config({ path: configFile });

const {
    AUTH_URL,
    MESSAGE_URL,
    NOTIFICATION_URL,
    PORT
} = process.env;

export default {
    AUTH_URL,
    MESSAGE_URL,
    NOTIFICATION_URL,
    PORT
};