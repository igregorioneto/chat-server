import nodemailer from "nodemailer";
import config from "../config/config";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export class EmailService {
    private transporter;

    constructor() {        
        const smtpConfig: SMTPTransport.Options = {
            host: config.smtp.host,
            port: Number(config.smtp.port),
            auth: {
                user: config.smtp.user,
                pass: config.smtp.pass,
            },
        }
        this.transporter = nodemailer.createTransport(smtpConfig);
    }

    async sendEmail(to: string, subject: string, content: string) {
        const mailOptions = {
            from: config.EMAIL_FROM,
            to,
            subject,
            html: content,
        };

        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log("Email sent: %s", info.messageId); 
        } catch (error) {
            console.error("Error sending email:", error);
        }
    }
}