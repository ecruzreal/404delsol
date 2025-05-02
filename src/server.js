import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";
import rateLimit from "express-rate-limit";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import multer from 'multer';

const upload = multer();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  };

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    upload.none(),
    async (req, res) => {
        console.log("✅ Contact form submitted!");
        console.log("Body received:", req.body);
        const {
            name, email, studentID, socials, names_instruments, genre,
            songs, bringing, bringing_other, needs, needs_other,
            video_link, message
        } = req.body;
        console.log('Received:', { name, email, studentID, socials, names_instruments,
            genre, songs, bringing, bringing_other, needs, needs_other, video_link, message
         });

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
            subject: `404 application from ${name}`,
            replyTo: email,
            html: `<!DOCTYPE html>
                    <html>
                    <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td align="center">
                            <table width="600" cellpadding="20" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px;">
                                <tr>
                                <td>
                                    <h2 style="color: #333333;">New Submission Received</h2>
                                    <p><strong>Band/Artist Name:</strong> ${name}</p>
                                    <p><strong>UCI Email:</strong> ${email}</p>
                                    <p><strong>Student ID:</strong> ${studentID}</p>
                                    <p><strong>Socials:</strong> ${socials}</p>
                                    <p><strong>Names and Instruments:</strong> ${names_instruments}</p>
                                    <p><strong>Main Genre:</strong> ${genre}</p>
                                    <p><strong>Songs:</strong> ${songs}</p>
                                    <p><strong>Bringing Equipment:</strong> ${bringing.join(", ")} <strong>Other:<strong /> ${bringing_other}</p>
                                    <p><strong>Needs Equipment:</strong> ${needs.join(", ")} <strong>Other:<strong /> ${needs_other} </p>
                                    <p><strong>Video Link:</strong> ${video_link}</p>
                                    <p><strong>Comments:</strong> ${message}</p>

                                    <hr style="border: none; border-top: 1px solid #dddddd; margin: 20px 0;" />

                                    <p style="font-size: 12px; color: #888888;">
                                    This message was sent via the 404 del Sol submission form.
                                    </p>
                                </td>
                                </tr>
                            </table>
                            </td>
                        </tr>
                        </table>
                    </body>
                    </html>`
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

/*-----------------------------------*/


app.post("/submit-email",
    upload.none(),
    async (req, res) => {
        console.log("✅ Contact form submitted!");
        console.log("Body received:", req.body);
        const {name, email,  message} = req.body;
        console.log('Received:', { name, email,message});

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
            subject: `New 404 inquiry from ${name}`,
            replyTo: email,
            html: `<!DOCTYPE html>
                    <html>
                    <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td align="center">
                            <table width="600" cellpadding="20" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px;">
                                <tr>
                                <td>
                                    <h2 style="color: #333333;">New Message Received</h2>
                                    <p><strong>Name:</strong> ${name}</p>
                                    <p><strong>Email:</strong> ${email}</p>
                                    <p><strong>Message:</strong> ${message}</p>

                                    <hr style="border: none; border-top: 1px solid #dddddd; margin: 20px 0;" />

                                    <p style="font-size: 12px; color: #888888;">
                                    This message was sent via the 404 del Sol submission form.
                                    </p>
                                </td>
                                </tr>
                            </table>
                            </td>
                        </tr>
                        </table>
                    </body>
                    </html>`
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