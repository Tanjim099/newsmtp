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

async function sendMail(subject, text, to, form) {
    try {
        console.log(subject, text, to, form)
        await transporter.sendMail({
            from: form || "nde.alam404@gmail.com",
            to: to || "nde.alam404@gmail.com",
            subject,
            text,
        });
    } catch (error) {
        throw new Error(error)
    }
};

module.exports = sendMail
