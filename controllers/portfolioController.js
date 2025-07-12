const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
require("dotenv").config(); // Load .env variables

// Transporter setup using SendGrid and env variable
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

// Controller function to send email
const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Sending email
    transporter.sendMail({
      to: "muskangupta9559305697@gmail.com",
      from: "muskangupta9559305697@gmail.com",
      subject: "Regarding MERN Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p><strong>Name:</strong> ${name}</p></li>
          <li><p><strong>Email:</strong> ${email}</p></li>
          <li><p><strong>Message:</strong> ${msg}</p></li>
        </ul>
      `,
    });

    return res.status(200).send({
      success: true,
      message: "Your message was sent successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
