import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";
import rateLimit from "express-rate-limit";

dotenv.config();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  };

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

console.log("DB user:", process.env.DB_USER);
console.log("DB password:", process.env.DB_PASSWORD ? "[HIDDEN]" : "MISSING");

const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
});

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5, 
  });
  
app.use("/submit", limiter);

console.log('got here')
app.post("/submit",
    async (req, res) => {
        console.log("✅ Contact form submitted!");
        console.log("Body received:", req.body);
        const {name, email, message} = req.body;

    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        console.log('logged in');
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `404 inquiry from ${name}`,
            replyTo: email,
            text: `From: ${name} (${email})\n\n${message}`,
        })
        console.log('mail sent');

        await db.execute(
            "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
            [name, email, message]
        )

        res.sendStatus(200);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending message');
    }
});

app.listen(3000, () => console.log('App running on port 3000'));