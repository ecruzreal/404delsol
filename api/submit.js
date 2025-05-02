//import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name, email, studentID, socials, names_instruments, genre,
      songs, bringing = [], bringing_other, needs = [], needs_other,
      video_link, message
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

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
    });

    /*
    const db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
    });

    await db.execute(
      "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );
    */

    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
