const express = require("express");
const cron = require("node-cron");
const sgMail = require("@sendgrid/mail");
const sgAPI = require("./config/keys").sgAPI;

sgMail.setApiKey(sgAPI);

const app = express();

const msg = {
    to: "raulsanchez1024@gmail.com",
    from: "hi@happiworkplace.com",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>"
};

cron.schedule("0 31 19 * * *", () => {
    sgMail.send(msg);
});

const port = process.env.PORT || 1234;
app.listen(port, () => console.log(`Server running on port ${port}`));