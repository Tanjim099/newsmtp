const nodemailer = require("nodemailer");
require("dotenv").config()
const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    secure: true,
    auth: {
        user: process.env.USER_ID,
        pass: process.env.PASSWORD,
    },
});

async function sendMail(to, subject, text, html) {
    const info = await transporter.sendMail({
        from: "nde.alam404@gmail.com",
        to: "nde.alam404@gmail.com",
        subject,
        text,
        html,
    });
};

module.exports = sendMail
